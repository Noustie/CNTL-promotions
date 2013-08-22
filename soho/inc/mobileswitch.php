<?php

$refreshURL = rawurldecode($_COOKIE['redetectURL']);
if ( !!$_GET['mobileExit'] && ( $_COOKIE['mobileExit'] != $_GET['mobileExit'] ) ) {
	setcookie( 'mobileExit', $_GET['mobileExit'], 0, '/', '.centurylink.com' );
	header( 'Location: '.$refreshURL.'', true, 302 );
}

