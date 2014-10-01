<?php
if ( $_SERVER['SERVER_ADDR'] == '192.168.33.18') {
	$path = '/var/www/private';
	set_include_path(get_include_path() . PATH_SEPARATOR . $path);
}
require("configs/contact-settings.php");

session_start();

function prevent_multi_submit($type = "post", $excl = "/^x|y$/") {
    $string = "";
    foreach ($_POST as $key => $val) {
        if ( preg_match( $excl, $key ) == 0 ) {
            $string .= $val;
        }
    }
    if (isset($_SESSION['last'])) {
        if ($_SESSION['last'] === md5($string)) {
            return false;
        } else {
            $_SESSION['last'] = md5($string);
            return true;
        }
    } else {
        $_SESSION['last'] = md5($string);
        return true;
    }
}

$success = trim($_POST['success']);
$success = filter_var($success, FILTER_SANITIZE_URL);


$sendToEmailArr = array(
	"live" => "talktous@centurylink.com",
	"QA" => "corbettj@peteramayer.com",
	"DEV" => "brownkg@peteramayer.com",
	"CEE" => "celestinec@peteramayer.com"
);
$emailArrSelection = 'DEV';
if ( $_SERVER['SERVER_NAME'] == 'promotions.centurylink.com' ) {
	$emailArrSelection = 'live';
}


if ( $emailArrSelection !== 'live' || prevent_multi_submit() ) {

	$topicID 	= filter_var( trim($_POST['topicID']), 		FILTER_SANITIZE_STRING );
	$comments 	= filter_var( trim($_POST['comments']), 	FILTER_SANITIZE_STRING );
	$title 		= filter_var( trim($_POST['title']), 		FILTER_SANITIZE_STRING );
	$firstName 	= filter_var( trim($_POST['firstName']), 	FILTER_SANITIZE_STRING );
	$lastName 	= filter_var( trim($_POST['lastName']), 	FILTER_SANITIZE_STRING );
	$email 		= filter_var( trim($_POST['email']), 		FILTER_SANITIZE_EMAIL );
	$acctNum 	= filter_var( trim($_POST['acctNum']), 		FILTER_SANITIZE_STRING );
	$phone 		= filter_var( trim($_POST['phone']), 		FILTER_SANITIZE_STRING );
	$billingTitle = "";
	$billingFirstName = "";
	$billingLastName = "";
	$billingAddress1 = trim($_POST['billingAddress1']);
	$billingAddress2 = trim($_POST['billingAddress2']);
	$billingState = trim($_POST['billingState']);
	$billingZipCode = trim($_POST['billingZipCode']);
	$source = ( strpos($success,'fb') ) ? 'Facebook' : 'Standalone';
	$honeyPot  = "";

	if ( isset($_POST['sameAsContact']) ) {
		$billingTitle = $title;
		$billingFirstName = $firstName;
		$billingLastName = $lastName;
	} else {
		$billingTitle = trim($_POST['billingTitle']);
		$billingFirstName = trim($_POST['billingFirstName']);
		$billingLastName = trim($_POST['billingLastName']);
	}

	if (isset($_POST['xljsdfljkj']))
		$honeyPot = trim($_POST['xljsdfljkj']);

	function checkLength ( $checkLengthArray ) {
		$output = "";
		for ($i=0; $i < count($checkLengthArray); $i++) { 
			if ( strlen($checkLengthArray[$i]) > 30000 ) {
				$output .= '<li>Some Entries Were too long. Please enter less than 30000 charcters for every entry.</li>';
			}
		}
		return $output;
	}

	function Validate($honeyPot, $email, $topicID, $comments, $title, $firstName, $lastName)
	{
		$errMsg = "";

		$errMsg .= checkLength( array($email, $topicID, $comments, $title, $firstName, $lastName) );


		if ($honeyPot != "")
			$errMsg .= '<li>Request is invalid.</li>';

		if(filter_var($email, FILTER_VALIDATE_EMAIL) == false)
			$errMsg .= '<li>Email address is invalid.</li>';

		if(filter_var($topicID, FILTER_VALIDATE_INT) == false)
			$errMsg .= '<li>A topic was not selected.</li>';

		if(empty($comments))
			$errMsg .= '<li>You did not enter a comment.</li>';

		if(empty($title))
			$errMsg .= '<li>You did not enter a title.</li>';

		if(empty($firstName))
			$errMsg .= '<li>You did not enter a first name.</li>';

		if(empty($lastName))
			$errMsg .= '<li>You did not enter a last name.</li>';

		if (!empty($errMsg))
		{
			echo "There are errors in your form submission:<br /><ul >" . $errMsg . "</ul>";
			echo '<a href="javascript: history.go(-1);">&lt; Back</a>';
			exit();
		}
	}

	function GetTopic($topicContent)
	{


		$topicMap = array(
			"1" => "My Account",
			"2" => "Customer Service",
			"3" => "Phone Repair",
			"4" => "Internet/Technical Support",
			"5" => "Billing/Pricing",
			"6" => "Other"
		 );

		return ($topicMap[$topicContent]);
		
	}


	function SendEmail($topicID, $comments, $source, $title, $firstName, $lastName, $email, $acctNum, $phone, $billingTitle, $billingFirstName, $billingLastName, $billingAddress1, $billingAddress2, $billingState, $billingZipCode)
	{
		global $smtp_emailHost, $smtp_emailPort, $smtp_emailU, $smtp_emailP, $smtp_emailFrom, $sendToEmailArr, $emailArrSelection;

		require_once "Mail.php";

		$topicName = GetTopic($topicID);
		$today = date("F j, Y, g:i a");
		$to = $sendToEmailArr[$emailArrSelection]; // live, QA, DEV
		$subject = "Support Request - $topicName";
		if (!empty($billingState))
			$subject .= " - $billingState";
		$body = "Date: $today \n";

		//TESTING
		//$body .= "HASH: " . $_SESSION['last']. " \n";

		$body .= "Source: $source Support Form \n";
		$body .= "Name: $title $firstName $lastName \n";
		$body .= "Email: $email \n";
		$body .= "Phone: $phone \n";
		$body .= "Account #: $acctNum \n";
		$body .= "Billing Name: $billingTitle $billingFirstName $billingLastName \n";
		$body .= "Billing Address 1: $billingAddress1 \n";
		$body .= "Billing Address 2: $billingAddress2 \n";
		$body .= "Billing State: $billingState \n";
		$body .= "Billing Zip: $billingZipCode \n";
		$body .= "Topic: $topicName \n";
		$body .= "Comments: $comments \n\n";
		$headers = array (
			'From' => $smtp_emailFrom, 
			'To' => $to, 
			'Reply-To' => $email, 
			'Subject' => $subject, 
			'X-peteramayer-whitelist' => '5TxfWIuhbBEayO9emzWutkYB3PIxAuMk'
		);

		$smtp = Mail::factory('smtp', array( 
			'host' => $smtp_emailHost, 
			'auth' => true, 
			'port' => $smtp_emailPort, 
			'username' => $smtp_emailU, 
			'password' => $smtp_emailP
		));

		$mail = $smtp->send($to, $headers, $body);

		if (PEAR::isError($mail))
		{
			echo("<p>" . $mail->getMessage() . "</p>");
			exit();
		}
	}

	Validate($honeyPot, $email, $topicID, $comments, $title, $firstName, $lastName);
	SendEmail($topicID, $comments, $source, $title, $firstName, $lastName, $email, $acctNum, $phone, $billingTitle, $billingFirstName, $billingLastName, $billingAddress1, $billingAddress2, $billingState, $billingZipCode);

}
header( 'Location: ' . $success );

