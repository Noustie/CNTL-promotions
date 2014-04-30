<?php

require_once('htmlemail.class.php');

class Email {

	var $sender_email;

	var $sender_name;

	var $recipient_email;

	var $recipient_name;
	
	var $message;
	
	function Email()
	{
		$this->sender_email = $_GET["emailFrom"];
		$this->sender_name = $_GET["nameFrom"];
		$this->recipient_email = $_GET["emailTo"];
		$this->recipient_name = $_GET["nameTo"];
		$this->message = $_GET["messageTo"];
	}
	
	function sendEmail() 
	{
		
		
		$mail = new HtmlEmail();
		
		
		/////////////////////////////////////
		//$mail->setHtml(getEmailVersion("html"),getEmailVersion("plain"));
		
		$mail->setHtml($this->getEmailVersion("html"),$this->getEmailVersion("text"));	
		
		/////////////////////////////////////
		//$mail->setReturnPath(REPLY_EMAIL);
		//$mail->setFrom($this->sender_name . "<" . $this->sender_name . "@alotmorespace.com>");
		$mail->setFrom($this->sender_email);
		$mail->setSubject("Create personalized gift tags online");
		$mail->setHeader('X-Mailer', 'HTML Mime mail class');
		/////////////////////////////////////
		if($mail->send(array($this->recipient_email),"smtp")) {
			print "true";
			return(true);
		}
	
		print "false";
		return(false);
	}
	
	function getEmailVersion($version) {
		ob_start();
		require_once($version .".php");
		$text = ob_get_clean();
		//return $text;
		return($this->populateCopy($text));
		
	}
	
	function populateCopy($copy) 
	{
		$formatted = str_replace("[SENDER]", $this->sender_name, $copy);
		return($formatted);
	}
}

?>