<?php
if ( strpos( $_SERVER['SERVER_NAME'], 'staging' ) === false ) {
	if ( !!!$_SERVER['HTTPS'] || $_SERVER['HTTPS'] == 'no' ) {
		header( 'Location: https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'], true );
	}
}
