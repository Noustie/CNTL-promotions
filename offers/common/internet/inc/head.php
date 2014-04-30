<!DOCTYPE HTML>
<html lang="en-US" xmlns:fb="http://www.facebook.com/2008/fbml" itemscope itemtype="http://schema.org/Product">
<head>
	<!-- METADATA FOR GOOGLE+ -->
	<meta itemprop="name" content="<?php echo $fb_title; ?>" />
	<meta itemprop="description" content="<?php echo $fb_description; ?>" />
	<meta itemprop="image" content="<?php echo $fb_image; ?>" />

	<!-- METADATA FOR FACEBOOK -->
	<meta property="og:title" content="<?php echo $fb_title; ?>" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="<?php echo $fb_url; ?>" />
	<meta property="og:image" content="<?php echo $fb_image; ?>" />
	<meta property="og:site_name" content="<?php echo $fb_title; ?>" />
	<meta property="og:description" content="<?php echo $fb_description; ?>" />
	<meta property="fb:app_id" content="<?php echo $fb_appid; ?>" />

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title><?php echo $page_title; ?></title>
	<meta name="description" content="<?php echo $page_description; ?>" />
	<meta name="keywords" content="<?php echo $page_keywords; ?>" />
	<link rel="shortcut icon" href="http://www.centurylink.com/favicon.ico" type="image/vnd.microsoft.icon" />

	<link rel="P3Pv1" href="/w3c/p3p.xml" />

	<script type="text/javascript">
		// var custClass = "business"; //uncomment to use biz suite
		var pageName = "<?php echo $svar['pageName']; ?>"; //s.pageName
		var sAddress = "";
		var pageType = ""; //s.pageType
		var errorType = ""; //s.prop2
		var accountEvents = ""; //eVar1
		var serviceEvents = ""; //eVar2
		var pCategory = ""; //eVar3
		var unisysEvent = ""; //eVar4
		var orderType = ""; //eVar7
		var zipAvail = ""; //eVar8
		var phoneAvail = ""; //eVar9
		var addressAvail = ""; //eVar10
		var respMsg = ""; //eVar11
		var availType = ""; //eVar12
		var sEvents = ""; //s.events
		var sProducts = ""; //s.products
		var orderNum = ""; //s.purchaseID
		var totalOrderPrice = ""; //Doubleclick
		var eBiz_server = "<?php echo $svar['server']; ?>"; // s.server
		var eBiz_channel = "<?php echo $svar['channel']; ?>"; // s.channel, s.eVar41
		var eBiz_prop20 = "";
		var eBiz_prop24 = "<?php echo $svar['prop24evar53']; ?>";
		var eBiz_prop25 = "<?php echo $svar['prop25evar54']; ?>";
		var eBiz_prop26 = "<?php echo $svar['prop26evar55']; ?>";
		var eBiz_prop38 = "<?php echo $svar['prop38evar48']; ?>";
		var eBiz_prop39 = "<?php echo $svar['prop39evar49']; ?>";
		var eBiz_prop52 = "<?php echo $svar['prop52evar56']; ?>";
		var eBiz_evar27 = "";
		var eBiz_evar48 = eBiz_prop38;
		var eBiz_evar49 = eBiz_prop39;
		var eBiz_evar53 = eBiz_prop24;
		var eBiz_evar54 = eBiz_prop25;
		var eBiz_evar55 = eBiz_prop26;
		var eBiz_evar56 = eBiz_prop52;

		//var c2c_clickTrack = "<?php echo $svar['c2c_clickTrack']; ?>";
		//var c2c_buttonname = "<?php echo $c2c_buttonname; ?>";
	</script>
	<!--<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4f5a3e1e265f4081"></script>-->
	<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>

	<link rel="stylesheet" href="../common/internet/css/main.css" type="text/css" media="screen,print">
	<link rel="stylesheet" href="../common/internet/css/internet.css" type="text/css" media="screen,print">
