<?php
$mobileExit = 'yes';
if ( !!!$_COOKIE['mobileExit'] && !!!$_REQUEST['mobileExit'] ) {
	$ua = $_SERVER['HTTP_USER_AGENT'];
	if ( preg_match( '/android|blackberry|iphone|ipod|iemobile|opera mobile|palmos|webos|googlebot-mobile/i', $ua ) ) {
		$mobileExit = 'no';
		setcookie( 'mobileExit', $mobileExit, 0, '/', '.centurylink.com' );
	}
} else if ( !!$_REQUEST['mobileExit'] ) {
	$mobileExit = $_REQUEST['mobileExit'];
	setcookie( 'mobileExit', $mobileExit, 0, '/', '.centurylink.com' );
} else if ( !!$_COOKIE['mobileExit'] ) {
	$mobileExit = !!$_COOKIE['mobileExit'];
}

setcookie( 'redetectURL', rawurlencode($_SERVER['PHP_SELF']), 0, '/' );

