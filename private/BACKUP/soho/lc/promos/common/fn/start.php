<?php
$is_staging = ( strpos( $_SERVER['SERVER_NAME'], 'staging' ) !== false );
$soho_root = $_SERVER["DOCUMENT_ROOT"] . "/soho";

if ( !$is_staging ) {
	if ( !!!$_SERVER['HTTPS'] || $_SERVER['HTTPS'] == 'no' ) {
		header( 'Location: https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'], true );
		exit;
	}
}

$fn = __FILE__;
$market = "lq";
if ( !!strpos( $fn, "/lcm/" ) || !!strpos( $fn, "/lc/" ) ) {
	$market = "lc";
} else if ( !!strpos( $fn, "/lqm/" ) || !!strpos( $fn, "/lq/" ) ) {
	$market = "lq";
}

function getDir () {
	global $is_staging;
	$protocol = 'http://';
	if ( !$is_staging ) {
		$protocol = 'https://';
	}
	$dir = $protocol . $_SERVER['SERVER_NAME'] . dirname($_SERVER['PHP_SELF']);
	echo $dir;
}

include_once("$soho_root/inc/tracking.php");
include_once("$soho_root/inc/mbox.php");
include_once("$soho_root/inc/renderForm.php");
