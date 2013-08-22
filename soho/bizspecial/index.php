<?php
include_once( '../inc/secure.php' );
include_once( '../inc/mobiledetect.php' );
$devicePath = 'lcm';
if ( $mobileExit == 'yes' ) {
	$devicePath = 'lc';
}
header( 'Location: ../'.$devicePath.'/promos/core-connect-lc/', true, 302 );
?>
