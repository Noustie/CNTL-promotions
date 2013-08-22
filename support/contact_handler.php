<?php
$topicID = 1;
$comments = "test";
$title = "test";
$firstName = "test";
$lastName = "test";
$email = "test";
$acctNum = "test";
$phone = "test";
$billingFirstName = "test";
$billingLastName = "test";
$billingAddress1 = "test";
$billingAddress2 = "test";
$billingState = "test";
$billingZipCode = "test";

if (isset($_POST['Topic']))
	$topicID = trim($_POST['Topic']);

if (isset($_POST['comments']))
	$comments = trim($_POST['comments']);
	
if (isset($_POST['title']))
	$title = trim($_POST['title']);
	
if (isset($_POST['lastName']))
	$lastName = trim($_POST['lastName']);
	
if (isset($_POST['email']))
	$email = trim($_POST['email']);
	
if (isset($_POST['acctNum']))
	$acctNum = trim($_POST['acctNum']);

if (isset($_POST['phone']))
	$phone = trim($_POST['phone']);
	
if (isset($_POST['BillingAddress1']))
	$billingAddress1 = trim($_POST['BillingAddress1']);
	
if (isset($_POST['BillingAddress2']))
	$billingAddress2 = trim($_POST['BillingAddress2']);
	
if (isset($_POST['BillingState']))
	$billingState = trim($_POST['BillingState']);
	
if (isset($_POST['BillingZipCode']))
	$billingZipCode = trim($_POST['BillingZipCode']);
	
/////// INSERT INTO DB ///////
$mysqli = new mysqli("internal-db.s116013.gridserver.com", "db116013_cntl", "y7cheb73TUxe", "db116013_cntl");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

if (!$mysqli->query("INSERT INTO Contact (Title,FirstName,LastName,Email,Phone,AcctNum,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingState,BillingZipCode,TopicID,Comments) VALUES('$title','$firstName','$lastName','$email','$phone','$acctNum','$billingFirstName','$billingLastName','$billingAddress1','$billingAddress2','$billingState','$billingZipCode',$topicID,'$comments')") === TRUE) {
	printf("Error inserting contact.\n");
}

$mysqli->close();

//////// SEND NOTIFICATION ///////
require_once "Mail.php";
 
$host = "ssl://jcdx-nd5k.accessdomain.com";
$username = "noreply@tjblabs.com";
$password = "noreply2012";
$port = "465";
$from = "Webmaster <noreply@tjblabs.com>";
$to = "Todd Boyles <toddjboyles@yahoo.com>";
$subject = "Support request";
$today = date("F j, Y, g:i a");
$body = "Date: $today \n";
$body .= "Title: $title \n";
$body .= "Name: $firstName $firstName \n";
$body .= "Email: $email \n";
$body .= "Phone: $phone \n";
$body .= "Account #: $acctNum \n";
$body .= "Billing Name: $billingFirstName $billingLastName \n";
$body .= "Address 1: $billingAddress1 \n";
$body .= "Address 2: $billingAddress2 \n";
$body .= "State: $billingState \n";
$body .= "Zip: $billingZipCode \n";
$body .= "Topic: $topicID \n";
$body .= "Comments: $comments \n\n";	
$headers = array ('From' => $from, 'To' => $to, 'Subject' => $subject);

$smtp = Mail::factory('smtp', array ('host' => $host, 'port' => $port, 'auth' => true, 'username' => $username, 'password' => $password));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail))
	echo("<p>" . $mail->getMessage() . "</p>");
else 
	echo("<p>Message successfully sent!</p>");
	
//Header("Location: requestinfoConfirm.php");
?>