<?php
$emailHost = "mail.contactcenturylink.com";
$emailU = "smbinquiry@contactcenturylink.com";
$emailP = "5peYEs8Ujey7";
$emailFrom = "SMB Customer Inquiry <smbinquiry@contactcenturylink.com>";

//catch and declare the variable
$visitSource ="";
if($_POST['visitSource']=="email" || $_POST['visitSource']=="display"){
		$visitSource = $_POST['visitSource'];	
	}


$emailsTo = array(
	'LQ' => 'sbg.click-to-call@centurylink.com',
	'LQ_MIN' => 'sbc2call@centurylink.com',
	'LC' => 'sohosalessupport@centurylink.com',
	'DEV_MARKET_KEEGAN' => 'brownkg@peteramayer.com',
	'DEV_MARKET_DOLAN' => 'dolanj@peteramayer.com',
	'AE_MARKET' => 'wegmannl@peteramayer.com',
	'QA_MARKET' => 'corbettj@peteramayer.com'
);

$formConfig = array();
$formConfig['legacyMarket'] = ( !!$c_market ) ? $c_market : 'legacyMarket';
$formConfig['offerMeta'] = ( !!$c_market ) ? $c_market : 'offerMeta';
$formConfig['productOffer'] = ( !!$c_offer ) ? $c_offer : 'productOffer';
$formConfig['product'] = ( !!$c_product ) ? $c_product : 'product';
$formConfig['price'] = ( !!$c_price ) ? $c_price : 'price';
$formConfig['onMailErrorURL'] = ( !!$c_ErrorURL ) ? $c_ErrorURL : 'onMailErrorURL';
$formConfig['contact_name'] = ( !!$c_name ) ? $c_name : 'contact_name';
$formConfig['contact_business_name'] = ( !!$c_bizname ) ? $c_bizname : 'contact_business_name';
$formConfig['contact_time'] = ( !!$c_time ) ? $c_time : 'contact_time';
$formConfig['contact_phoneNumber'] = ( !!$c_phone ) ? $c_phone : 'contact_phoneNumber';


function getFormData ( $postVarName, $isPhoneNumber = false, $requiresValdiation = false ) {
	$data = null;
	if( get_magic_quotes_gpc() ){
		$data = substr( trim( stripslashes( $_POST[$postVarName] ) ), 0, 150 );
	} else {
		$data =  substr( trim( $_POST[$postVarName] ), 0, 150 );
	}
	if ( !!$data && !!$requiresValdiation ) {
		if( !validateText( $data ) ) {
			failedSending('invalid ' . preg_replace("/\_/", " ", $postVarName) );
		}
	}
	if ( !!$data && !!$isPhoneNumber ) {
		$pattern = "/[^0-9]*/";
		$test = preg_replace( $pattern, "", $data );
		if( !validatePhone( $test ) ) {
			failedSending('invalid phone number');
		} else {
			$data = "(" . $test[0] . $test[1] . $test[2] . ") " . $test[3] . $test[4] . $test[5] . "-" . $test[6] . $test[7] . $test[8] . $test[9];
		}
	}
	return $data;
}

function validateText ( $textIn ) {
	$pattern = "/[^A-Za-z0-9]/";
	$isValid = true;
	$stripped = preg_replace($pattern, "", $textIn );
	if ( !strlen( $stripped ) || strlen( $stripped ) < 2 ) {
		$isValid = false;
	}
	return $isValid ;
}

function validatePhone ( $phoneIn ) {
	$isValid = true;
	$phoneArr = str_split( $phoneIn );

	//North American Numbering plan validation.
	if  (	( isset($phoneArr) && count( $phoneArr ) != 10 ) ||
			( intval( $phoneArr[0], 10 ) === 0 || intval( $phoneArr[0], 10 ) === 1 ) ||
			( intval( $phoneArr[1], 10 ) === 1 && intval( $phoneArr[2], 10 ) === 1 ) ||
			( intval( $phoneArr[1], 10 ) === 9 || intval( $phoneArr[2], 10 ) === 9 ) ||
			( intval( $phoneArr[0], 10 ) === 3 && intval( $phoneArr[1], 10 ) === 7 ) ||
			( intval( $phoneArr[0], 10 ) === 9 && intval( $phoneArr[1], 10 ) === 6 ) ||
			( intval( $phoneArr[1], 10 ) === 1 && intval( $phoneArr[2], 10 ) === 1 ) ||
			( "" . $phoneArr[0] . $phoneArr[1] . $phoneArr[2] === "900"  ) ||
			( "" . $phoneArr[0] . $phoneArr[1] . $phoneArr[2] === "958"  ) 	) 	{
		$isValid = false;
	}
	if ( $isValid &&
			( intval( $phoneArr[3], 10 ) === 0 || intval( $phoneArr[3], 10 ) === 1 ) ||
			( intval( $phoneArr[4], 10 ) === 1 && intval( $phoneArr[5], 10 ) === 1 ) ) 	{
		$isValid = false;
	}

	return $isValid;
}

$legacyMarket = getFormData( $formConfig['legacyMarket'] );
$productOffer = getFormData( $formConfig['productOffer'] );
$offerMeta = getFormData( $formConfig['offerMeta'] );
$product = getFormData( $formConfig['product'] );
$price = getFormData( $formConfig['price'] );
$errorView = getFormData( $formConfig['onMailErrorURL'] );
$custName = getFormData( $formConfig['contact_name'], false, true );
$bizName = getFormData( $formConfig['contact_business_name'], false, true );
$whentocall = getFormData( $formConfig['contact_time'] );
$phone = getFormData( $formConfig['contact_phoneNumber'], true );


function SendEmail($productOffer, $product, $price, $custName, $bizName, $phone, $whentocall, $errorView, $email_TO, $email_FROM, $email_HOST, $email_UN, $email_PW, $email_PORT = null, $offerMeta = "" )
{
	require_once "Mail.php";

	$today = date("F j, Y, g:i A");
	$vip = $_SERVER['REMOTE_ADDR'];

	$requestPage = "http://" . $_SERVER['SERVER_NAME'] . dirname( $_SERVER['SCRIPT_NAME'] );

	$subject = "SMB Online Offer Page - $offerMeta - $today";
	$body = "";
	if ( !!$productOffer ) $body .= "Product Offer: $productOffer \n";
	if ( !!$price ) $body .= "Product Offer Price: $price \n";
	$body .= "\nCustomer Name: $custName\n";
	$body .= "Business Name: $bizName\n";
	$body .= "Phone Number: $phone \n\n";
	$body .= "Contact Preference: $whentocall \n\n";
	$body .= "Inquiry Date: $today (Central Time) \n\n";
	$body .= "Form Submitted from URL: $requestPage \n";
	$body .= "Form Submitted by IP Address: $vip \n";
	$body .= "(Note: frequent submissions from the same IP Address could indicate spamming) \n\n";
	$headers = array ('From' => $email_FROM, 'To' => $email_TO, 'Subject' => $subject, 'X-peteramayer-whitelist' => '5TxfWIuhbBEayO9emzWutkYB3PIxAuMk' );

	$smtp = Mail::factory('smtp', array ('host' => $email_HOST, 'port' => $email_PORT, 'auth' => true, 'username' => $email_UN, 'password' => $email_PW));

	$mail = $smtp->send($email_TO, $headers, $body);

	if (PEAR::isError($mail)) {
		failedSending('true');
	} else {
		submissionSuccessful();
	}
}

function failedSending ( $errmsg ) {
	$errmsg = urlencode( $errmsg );
	Header("Location: ./?error=" . $errmsg );
	exit();
}

function submissionSuccessful() {
	Header( "Location: ./thankyou.php?success=true&r=" . $_SERVER['REQUEST_TIME'], true, 301 );
	exit();
}

if ( !!$productOffer && !!$custName && !!$bizName && !!$phone ) {
	SendEmail( 	$productOffer, $product, $price, $custName,
				$bizName, $phone, $whentocall, $errorView,
				$emailsTo["$legacyMarket"], $emailFrom,
				$emailHost, $emailU, $emailP, null, $offerMeta );
} else if ( $_REQUEST['QA'] == true || $_REQUEST['success'] == true ) {
	// Pass through
} else {
	failedSending("Form fields not set.");
}
