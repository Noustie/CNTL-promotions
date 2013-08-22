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
	'LQ' => 'sbg.click-to-call@centurylink.com',
	'LQ_MIN' => 'sbc2call@centurylink.com',
	'LC' => 'youcan.general@centurylink.com',
	'DEV_MARKET_KEEGAN' => 'brownkg@peteramayer.com',
	'DEV_MARKET_DOLAN' => 'dolanj@peteramayer.com',
	'AE_MARKET' => 'wegmannl@peteramayer.com',
	'QA_MARKET' => 'corbettj@peteramayer.com'
);
$formConfig = array();

if ( !!$c_market ) $formConfig['legacy_market'] = $c_market;
if ( !!$c_offerMeta ) $formConfig['offer_meta'] = $c_offerMeta;
if ( !!$c_productInterest ) $formConfig['product_interest'] = $c_productInterest;
if ( !!$c_offer ) $formConfig['product_offer'] = $c_offer;
if ( !!$c_product ) $formConfig['product'] = $c_product;
if ( !!$c_price ) $formConfig['price'] = $c_price;
if ( !!$c_ErrorURL ) $formConfig['error_view'] = $c_ErrorURL;
if ( !!$c_time ) $formConfig['contact_time'] = $c_time;
if ( !!$c_name ) $formConfig['contact_name'] = $c_name;
if ( !!$c_email ) $formConfig['contact_email'] = $c_email;
if ( !!$c_bizname ) $formConfig['contact_business_name'] = $c_bizname;
if ( !!$c_phone ) $formConfig['contact_phone_number'] = $c_phone;
if ( !!$c_visitSource ) $formConfig['visitSource'] = $c_visitSource;

if ( count( $formConfig ) === 0 ) {
	$formConfig = null;
}


class SOHOFormData
{
	public $legacy_market;
	public $offer_meta;
	public $product_interest;
	public $product_offer;
	public $product;
	public $price;
	public $error_view;
	public $contact_time;
	public $contact_name;
	public $contact_business_name;
	public $contact_email;
	public $contact_phone_number;

	public $formConfig = array(
		"visitSource" => "visitSource",
		"legacy_market" => "legacyMarket",
		"offer_meta" => "offerMeta",
		"product_interest" => "productInterest",
		"product_offer" => "productOffer",
		"product" => "product",
		"price" => "price",
		"error_view" => "onMailErrorURL",
		"contact_time" => "contact_time",
		"contact_name" => "contact_name",
		"contact_email" => "contact_email",
		"contact_business_name" => "contact_business_name",
		"contact_phone_number" => "contact_phoneNumber"
	);
	public $specialValidationProps = array (
		"contact_name" => array( null, true ),
		"contact_email" => array( "email", false ),
		"contact_business_name" => array( null, true ),
		"contact_phone_number" => array( "phone", false )
	);
	public function __construct ( $uniqueFormConfig = null ) {
		if ( !!$uniqueFormConfig && gettype($uniqueFormConfig) == "array" ) {
			foreach( $uniqueFormConfig as $key => $value ) {
				if ( !!$this->formConfig[$key] ) {
					$this->formConfig[$key] = $value;
				}
			}
		}
		foreach( $this->formConfig as $configKey => $configVal ) {
			if ( !!$this->specialValidationProps["$configKey"] ) {
				$this->{$configKey} = $this->getFormData( $this->formConfig["$configKey"], $this->specialValidationProps["$configKey"][0], $this->specialValidationProps["$configKey"][1] );
			} else {
				$this->{$configKey} = $this->getFormData( $this->formConfig["$configKey"] );
			}
		}
	}
	public function isValidSubmitData () {
		if ( !!$this->product_offer && !!$this->contact_name && !!$this->contact_business_name && !!$this->contact_phone_number ) {
			return true;
		} else {
			return false;
		}
	}
	public function failedSending ( $errmsg ) {
		$errmsg = urlencode( $errmsg );
		$qstr = ( isset( $_SERVER['QUERY_STRING'] ) ) ? $_SERVER['QUERY_STRING']."&" : "";
		Header("Location: ./?".$qstr."error=" . $errmsg );
		exit();
	}
	public function submissionSuccessful() {
		$sourceParam = "";
		if ( !!$_POST['visitSource'] && ( $_POST['visitSource']=="email" || $_POST['visitSource']=="25" || $_POST['visitSource']=="200K" ) ) {
				$sourceParam = "&source=" . $_POST['visitSource'];
		}
		$qstr = ( isset( $_SERVER['QUERY_STRING'] ) ) ? $_SERVER['QUERY_STRING']."&" : "";
		Header( "Location: ./thankyou.php?".$qstr."success=true&r=" . $_SERVER['REQUEST_TIME'] . $sourceParam, true, 301 );
		exit();
	}
	private function sanitizeData ( $data ) {
		$sanitizeRegExp = "/[^a-zA-Z0-9\s._\-\@]/";
		$output = preg_replace($sanitizeRegExp, "", $data);
		$output = substr( $output, 0, 99 );
		if ( !!$output ) return $output;
		return null;
	}
	private function getFormData ( $postVarName, $fieldType = null, $requiresValdiation = false ) {
		$data = null;
		if( get_magic_quotes_gpc() ){
			$data = trim( stripslashes( $_POST[$postVarName] ) );
		} else {
			$data = trim( $_POST[$postVarName] );
		}
		$data = $this->sanitizeData($data);
		if ( !!$data && !$fieldType && !!$requiresValdiation ) {
			if( !$this->validateText( $data ) ) {
				$this->failedSending('invalid ' . preg_replace("/\_/", " ", $postVarName) );
			}
		}
		if ( !!$data && $fieldType == "phone" ) {
			$pattern = "/[^0-9]*/";
			$test = preg_replace( $pattern, "", $data );
			$isvalid = $this->validatePhone( $test );
			if( !$isvalid ) {
				$this->failedSending('invalid phone number');
			}
			$data = "" . chr(40) . $test[0] . $test[1] . $test[2] . chr(41) . " " . $test[3] . $test[4] . $test[5] . '-' . $test[6] . $test[7] . $test[8] . $test[9];
		}
		if ( !!$data && $fieldType == "email" ) {
			$parts = explode('@', $data);
			$user = $parts[0];
			$domain = "@" . $parts[1];
			$test_user = preg_replace("/[^a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~\.]/", "", $user);
			$test_domain = preg_replace("/[^a-zA-Z0-9\.]/", "", $domain);
			$data = $test_user."@".$test_domain;
		}
		
		return $data;
	}
	private function validateText ( $textIn ) {
		$pattern = "/[^A-Za-z0-9]/";
		$isValid = true;
		$stripped = preg_replace($pattern, "", $textIn );
		if ( !strlen( $stripped ) || strlen( $stripped ) < 2 ) {
			$isValid = false;
		}
		return $isValid ;
	}
	private function validatePhone ( $phoneIn ) {
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
				( "" . $phoneArr[0] . $phoneArr[1] . $phoneArr[2] === "900" ) ||
				( "" . $phoneArr[0] . $phoneArr[1] . $phoneArr[2] === "958" ) ) {
			$isValid = false;
		}
		if ( $isValid &&
				( intval( $phoneArr[3], 10 ) === 0 || intval( $phoneArr[3], 10 ) === 1 ) ||
				( intval( $phoneArr[4], 10 ) === 1 && intval( $phoneArr[5], 10 ) === 1 ) ) {
			$isValid = false;
		}

		return $isValid;
	}
}


function SendEmail( SOHOFormData $formData, $email_TO, $email_FROM, $email_HOST, $email_UN, $email_PW, $email_PORT = null )
{
	require_once "Mail.php";

	$today = date("F j, Y, g:i A");
	$vip = strip_tags( $_SERVER['REMOTE_ADDR'] );

	$requestPage = "http://" . $_SERVER['SERVER_NAME'] . dirname( $_SERVER['SCRIPT_NAME'] );

	$sbjVisSrc = "";
	if ( !!$formData->visitSource ) {
		$sbjVisSrc .= $formData->visitSource . " - ";
	}

	$subject = "SMB Online Offer Page - ". $formData->product_offer . " " . $formData->price /*. " - " . $formData->offer_meta*/ ." - " . $formData->legacy_market . " - " . $sbjVisSrc . " - $today";
	$body = "\n";
	if ( !!$formData->product_offer ) $body .= "Product Offer: " . $formData->product_offer . " \n";
	if ( !!$formData->price ) $body .= "Product Offer Price: " . $formData->price . " \n\n";
	if ( !!$formData->visitSource ) $body .= "Visit Source: " . $formData->visitSource . " \n\n";
	$body .= "Customer Name: " . $formData->contact_name . "\n\n";
	$body .= "Business Name: " . $formData->contact_business_name . " \n\n";
	$body .= "Phone Number: " . $formData->contact_phone_number . " \n\n";
	if ( !!$formData->contact_email ) $body .= "Customer Email: " . $formData->contact_email . " \n\n";
	$body .= "Preferred Contact Time: " . $formData->contact_time . " \n\n";
	$body .= "Inquiry Date: " . $today . " (Central Time) \n\n";
	$body .= "Form Submitted from URL: " . $requestPage . " \n";
	$body .= "Form Submitted by IP Address: " . $vip . " \n";
	$body .= " \n Note: Frequent submissions from the same IP Address could indicate spamming. \n If the IP Address is 98.191.25.3, then this email is likely sent for internal testing or quality assurance \n\n";
	$headers = array ('From' => $email_FROM, 'To' => $email_TO, 'Subject' => $subject, 'X-peteramayer-whitelist' => '5TxfWIuhbBEayO9emzWutkYB3PIxAuMk' );

	$smtp = Mail::factory('smtp', array ('host' => $email_HOST, 'port' => $email_PORT, 'auth' => true, 'username' => $email_UN, 'password' => $email_PW));

	$mail = $smtp->send($email_TO, $headers, $body);

	if (PEAR::isError($mail)) {
		$formData->failedSending('true');
	} else {
		$formData->submissionSuccessful();
	}
}

$formData = new SOHOFormData($formConfig);
if ( $formData->isValidSubmitData() ) {
	SendEmail( $formData, $emailsTo["".$formData->legacy_market.""], $emailFrom, $emailHost, $emailU, $emailP );
} else if ( $_REQUEST['QA'] == true || $_REQUEST['success'] == true ) {
	// Pass through
} else {
	$formData->failedSending("Form fields not set.");
}
