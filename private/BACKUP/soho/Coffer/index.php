<?php
include_once( '../inc/secure.php' );
include_once( '../inc/mobiledetect.php' );
$devicePath = 'lqm';
if ( $mobileExit == 'yes' ) {
	$devicePath = 'lq';
}
header( 'Location: ../'.$devicePath.'/promos/core-connect-hc/', true, 302 );
?>
