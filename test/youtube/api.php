<?php
$request = $_SERVER['REQUEST_URI'];
echo $request;

$output = null;

if ( file_exists($request) ) {
	$output = file_get_contents( $request );
	echo $output;
}
