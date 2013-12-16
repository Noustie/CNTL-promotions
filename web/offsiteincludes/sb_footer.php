<?php
require_once("curlpage.class.php");

$cacheName = '/mnt/stor2-wc1-dfw1/391839/'.$_SERVER['SERVER_NAME'].'/web/content/offsiteincludes/sb_footer.txt';
$remotePath = 'http://www.centurylink.com/small-business/includes/sb_footer.html';
$forceRefresh = !!$_GET['forceRefresh'];

error_reporting(0);
try {
	$cacheTime = filemtime($cacheName);
} catch ( Warning $error ) {
	$cacheTime = false;
}
$now = time();
$aWeek = (60 * 24 * 7);

$content = false;

if ( $cacheTime && !$forceRefresh ) {
	$diff = $now - $cacheTime;
	if ( $diff < $aWeek ) {
		$content = file_get_contents( $cacheName );
	}
}
if ( !$content ) {
	$curlContent = new CurlPage(false);
	$content = $curlContent->get( $remotePath );

	$content=preg_replace('#\(none\)#','',$content);
	$content=preg_replace('#(href|src)="([^:"]*)("|(?:(?:%20|\s|\+)[^"]*"))#','$1="//www.centurylink.com$2$3',$content);
	$content=preg_replace('#(\/\/www\.centurylink\.com)(\#)#','$2',$content);
	file_put_contents( $cacheName, $content );
}
//echo $content;

libxml_use_internal_errors(true);
$doc = new DOMDocument();
$doc->loadHTML( $content );

$footers = array();
foreach($doc->getElementsByTagName('div') as $obj) {
	if ( strpos( $obj->getAttribute('class'), 'smbFooter' ) !== false ) {
		$footers['smbFooter'] = $obj;
	}
	if ( strpos( $obj->getAttribute('class'), 'footer' ) !== false ) {
		$footers['footer'] = $obj;
	}
}
echo "\n";
echo $footers['smbFooter']->ownerDocument->saveXML($footers['smbFooter']);
echo "\n";
//echo $footers['footer']->ownerDocument->saveXML($footers['footer']);

?>
