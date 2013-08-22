<?php
require_once("curlpage.class.php");

$cacheName = '/mnt/stor2-wc1-dfw1/391839/'.$_SERVER['SERVER_NAME'].'/web/content/offsiteincludes/modals.txt';
$remotePath = 'http://www.centurylink.com/assets/includes/templates/modals.html';
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

	$content=preg_replace('#(href|src)="([^:"]*)("|(?:(?:%20|\s|\+)[^"]*"))#','$1="//www.centurylink.com$2$3',$content);
	$content=preg_replace('#(\/\/www\.centurylink\.com)(\#)#','$2',$content);
	file_put_contents( $cacheName, $content );
}
echo $content;
?>

<script type="text/javascript">
	qm.initialize({serviceDomain:ctl_url});
</script>
