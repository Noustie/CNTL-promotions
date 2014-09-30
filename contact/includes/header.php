<?php
	if ( !!!$_SERVER['HTTPS'] || $_SERVER['HTTPS'] == 'no' ) {
		header( 'Location: https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'], true );
	}
	$currentFile = basename($_SERVER["PHP_SELF"]);
	$successPath = "/contact/"
?>

<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<title>CenturyLink | Customer Support</title>
	<meta name="robots" content="noindex, nofollow">
	<meta name="description" content="Let CenturyLink help you. Please complete the form and a CenturyLink representative will contact you." />
	<meta name="keywords" content="" />
	<meta name="robots" content="" />
	<link rel="stylesheet" href="/contact/css/reset.css" />
	<link rel="stylesheet" href="/contact/css/master.css" />
	<link rel="stylesheet" href="/contact/css/colorbox.css" />
	<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
	<script type="text/javascript" src="/contact/js/jquery.validate.min.js"></script>
	<script type="text/javascript" src="/contact/js/jquery.colorbox-min.js"></script>
</head>

<body>
	<div id="mainWidth">
	    <!--START HEADER AREA-->
	    <div id="headerContainer">
	        <div id="top_nav">
				<ul>
					<li><a target="_blank" href="http://www.centurylink.com">Home</a></li>
					<li><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/">About Us</a></li>
					<li><a target="_blank" href="http://espanol.centurylink.com/">Español</a></li>
					<li class="topnav_last"><a target="_blank" href="http://m.centurylink.com">Mobile Site</a></li>
				</ul>
			</div>
			<div id="hdr_logo">
				<a target="_blank" href="http://www.centurylink.com"><h1>CenturyLink&trade;</h1></a>
			</div>	    
		</div>
	    <!--END HEADER AREA-->