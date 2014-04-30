<?php

	error_reporting(E_ALL);
	ini_set("display_errors", 1);
	$hostName = $_SERVER['SERVER_NAME']; 

	function trim_value(&$value)
	{
	    $value = trim($value);
	}
	array_filter($_POST, 'trim_value');

	//SANITIZE DATA, AND VALIDATE THE IMPORTANT STUFF.
	$name = 			filter_var( $_POST['name'], 			FILTER_SANITIZE_STRIPPED );
	$streetAddress = 	filter_var( $_POST['streetAddress'], 	FILTER_SANITIZE_STRIPPED );
	$unitNumber = 		filter_var( $_POST['unitNumber'], 		FILTER_SANITIZE_STRIPPED );
	$state = 			filter_var( $_POST['state'], 			FILTER_SANITIZE_STRING );
	$zip = 				filter_var( $_POST['zip'], 				FILTER_SANITIZE_NUMBER_INT );

	$email = 			filter_var( $_POST['email'], 			FILTER_SANITIZE_EMAIL );
	$email = 			filter_var( $email, 					FILTER_VALIDATE_EMAIL );

	//SANITZE PHONE NUMBERS AND FORCE THEM TO BE 10 DIGITS.
	$phone = 			filter_var( $_POST['phone'], 			FILTER_SANITIZE_NUMBER_INT );
	$phone = 			preg_replace('~.*(\d{3})[^\d]*(\d{3})[^\d]*(\d{4}).*~', '$1$2$3', $phone);

	$successView = 		filter_var( $_POST['successView'], 		FILTER_SANITIZE_URL );

	$success = false;

	if ( !$email ) {
		//NOT A VALID EMAIL. TRY AGAIN.
		if ( !$successView )  {
			//echo $success;
		} else {
			//header("Location: $successView?error=1");
			header("HTTP/1.0 404 Not Found");
		}
		exit();
	}

	try {  
		//db params
		include("/var/www/clients/client1/$hostName/private/gpon-config/db.php");

		// db-connect with POD  
		$con = new PDO( "mysql:host=$host;dbname=$dbname", $user, $pass );

		//error handling
		$con->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

		# named placeholders 
		$STH = $con->prepare("INSERT INTO GPON_INQUIRY (name, streetAddress, unitNumber, state, zip, email, phone) value (:name, :streetAddress, :unitNumber, :state, :zip, :email, :phone)");  

		//bind params
		$STH->bindParam(':name', $name);
		$STH->bindParam(':streetAddress', $streetAddress);
		$STH->bindParam(':unitNumber', $unitNumber);
		$STH->bindParam(':state', $state);
		$STH->bindParam(':zip', $zip);
		$STH->bindParam(':email', $email);
		$STH->bindParam(':phone', $phone);

		$STH->execute(); 

		//close connection
		$con = null;
	}  

	//error reporting
	catch(PDOException $e) {  
	    //echo $e->getMessage();  
	    $success = false;
	}

	//LOOKS LIKE WE'RE DONE.
	if ( !$successView )  {
		echo $success;
		exit();
	} else {
		header("Location: $successView?thanks=1");
	}

/*
	MOVED CAUSE WE ARENT SENDING EMAILS ANYMORE


	require("private/configs/getstarted-mail-config.php");

	$emailFrom = "Vegas GPON 1GIG Inquiry <smbinquiry@contactcenturylink.com>";
	$emailsTo = 'celestinec@peteramayer.com';


	function SendEmail($name, $streetAddress, $unitNumber, $zip, $email, $phone, $successView, $email_TO, $email_FROM, $email_HOST, $email_PORT, $email_UN, $email_PW)
	{
		require_once "Mail.php";

		$subject = "Las Vegas Gpon 1GIG Inquiry";
		$today = date("F j, Y, g:i a");
		$body = "Inquiry Date: $today (Central Time) \n\n";
		$body .= "Customer Name: $name\n";
		$body .= "Street Address: $streetAddress\n";
		$body .= "Unit Number: $unitNumber \n\n";
		$body .= "Zip: $zip \n";
		$body .= "Phone Number: $phone \n\n";

		$headers = array ('From' => $email_FROM, 'To' => $email_TO, 'Subject' => $subject, 'X-peteramayer-whitelist' => '5TxfWIuhbBEayO9emzWutkYB3PIxAuMk' );

		$smtp = Mail::factory('smtp', array ('host' => $email_HOST, 'port' => $email_PORT, 'auth' => true, 'username' => $email_UN, 'password' => $email_PW));

		$mail = $smtp->send($email_TO, $headers, $body);

		if (PEAR::isError($mail)) {
			return false;
		} else {
			return true;
		}
	}

	$success = SendEmail($name, $streetAddress, $unitNumber, $zip, $email, $phone, $successView, $emailsTo, $emailFrom, $emailHost, null, $emailU, $emailP);

	//Header("Location: $successView");
*/
