<?php
$fn = __FILE__;
$market = "lq";
if ( !!strpos( $fn, "/lcm/" ) || !!strpos( $fn, "/lc/" ) ) {
	$market = "lc";
} else if ( !!strpos( $fn, "/lqm/" ) || !!strpos( $fn, "/lq/" ) ) {
	$market = "lq";
}
header("Location: /soho/$market/promos/internet/", true, 301);
exit;
