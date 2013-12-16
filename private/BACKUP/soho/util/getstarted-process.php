<?php

$emailHost = "mail.contactcenturylink.com";
$emailU = "smbinquiry@contactcenturylink.com";
$emailP = "5peYEs8Ujey7";
$emailFrom = "SMB Customer Inquiry <smbinquiry@contactcenturylink.com>";

/*
$emailHost = "mail.5years1price.com";
$emailU = "smbinquiry@5years1price.com";
$emailP = "5peYEs8Ujey7";
$emailFrom = "SMB Customer Inquiry <smbinquiry@5years1price.com>";
*/


$emailsTo = array( 
    'LQ' => 'sbc2call@centurylink.com', 
    'LC' => 'sohosalessupport@centurylink.com', 
    'TEST_MARKET' => 'brownkg@peteramayer.com',
	'DEV_MARKET_KEEGAN' => 'brownkg@peteramayer.com',
	'DEV_MARKET_DOLAN' => 'dolanj@peteramayer.com',
	'AE_MARKET' => 'wegmannl@peteramayer.com',
	'QA_MARKET' => 'corbettj@peteramayer.com'
);
$legacyMarket = trim($_POST['legacyMarket']);

// QA STUFF
// $qaLegacyMarket = trim($_POST['legacyMarket']);
// $qaRecipient = $emailsTo[$qaLegacyMarket];
// $qaString = "\n\n";

$productOffer = trim($_POST['productOffer']);
$successView = trim($_POST['successView']);
$custName = trim($_POST['name']);
$bizName = trim($_POST['business_name']);
$productInterest = trim($_POST['productInterest']);
$whentocall = trim($_POST['time']);
$phone = '(' . trim($_POST['phone1']) . ') ' . trim($_POST['phone2']) . '-' . trim($_POST['phone3']);

function SendEmail($productOffer, $productInterest, $custName, $bizName, $phone, $whentocall, $successView, $email_TO, $email_FROM, $email_HOST, $email_PORT, $email_UN, $email_PW)
{
	require_once "Mail.php";

	$subject = "Small Business Sales Inquiry - " . $productOffer;
	$today = date("F j, Y, g:i a");
	$body = "Inquiry Date: $today (Central Time) \n\n";
	$body .= "Customer Name: $custName\n";
	$body .= "Business Name: $bizName\n";
	$body .= "Phone Number: $phone \n\n";
	$body .= "Product Interest: $productInterest \n";
	$body .= "Contact Preference: $whentocall \n\n";
	$headers = array ('From' => $email_FROM, 'To' => $email_TO, 'Subject' => $subject, 'X-peteramayer-whitelist' => '5TxfWIuhbBEayO9emzWutkYB3PIxAuMk' );

	$smtp = Mail::factory('smtp', array ('host' => $email_HOST, 'port' => $email_PORT, 'auth' => true, 'username' => $email_UN, 'password' => $email_PW));

	$mail = $smtp->send($email_TO, $headers, $body);

	if (PEAR::isError($mail))
		echo("<p>" . $mail->getMessage() . "</p>");
}

SendEmail($productOffer, $productInterest, $custName, $bizName, $phone, $whentocall, $successView, $emailsTo["$legacyMarket"], $emailFrom, $emailHost, null, $emailU, $emailP);

Header("Location: $successView");
