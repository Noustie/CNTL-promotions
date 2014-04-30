<?php

$userAgent = strtolower( $_SERVER['HTTP_USER_AGENT'] );
$isSupported = ( strpos( $userAgent, "blackberry" ) !== false && strpos( $userAgent, "webkit" ) === false ) ? 'notSupported' : 'supported';
$isIOS = ( strpos( $userAgent, "iphone" ) !== false || strpos( $userAgent, "ipod" ) !== false || strpos( $userAgent, "ipad" ) !== false ) ? 'ios' : '';
$isAndroid = ( strpos( $userAgent, "android" ) !== false ) ? 'isAndroid' : '';
$isAndroidTablet = ( strpos( $userAgent, "tablet" ) !== false && strpos( $userAgent, "android" ) !== false ) ? 'isAndroidTablet' : '';


//TRACKING SETUP
$tracking = array(
	account => 'qwestmobiledev',
	pageName => 'ctl|rsd|product|emktg|mobiletemplate',
	server => 'promotions.centurylink.com',
	channel => 'rsd',
	prop24 => 'rsd|product',
	eVar53 => 'rsd|product',
	prop25 => 'rsd|product|emktg',
	eVar54 => 'rsd|product|emktg',
	prop26 => 'rsd|product|emktg|mobiletemplate',
	eVar55 => 'rsd|product|emktg|mobiletemplate',
	prop38 => 'static_page',
	eVar48 => 'static_page',
	prop39 => 'landing_page',
	eVar49 => 'landing_page'
);

?>
<!DOCTYPE HTML>
<html lang="en-US" xmlns:fb="http://www.facebook.com/2008/fbml" class="photosActive  <?php echo $isSupported; ?> <?php echo $isAndroid; ?> <?php echo $isAndroidTablet; ?> <?php echo $isIOS; ?>">
<head>
	<meta charset="utf-8">
	<title>CenturyLink&trade; Mobile Template</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">

	<link rel="shortcut icon" href="http://www.centurylink.com/favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/reset-min.css">
	<link rel="stylesheet" type="text/css" href="css/site.css">

	<!-- SiteCatalyst code version: H.20.3. Copyright 1997-2009 Omniture, Inc. More info available at http://www.omniture.com -->
	<script type="text/javascript">
		var sAccount = "<?php echo $tracking['account'] ?>"; //SET THE VALUE OF THIS VAR IF THE ACCOUNT IS NOT THE STANDARD ACCOUNT, EG FOR MOBILE PAGES.
		var pageName = "<?php echo $tracking['pageName'] ?>",
			pageType = "", //s.pageType
			errorType = "", //s.prop2
			accountEvents = "", //eVar1
			serviceEvents = "", //eVar2
			pCategory = "", //eVar3
			unisysEvent = "", //eVar4
			orderType = "", //eVar7
			zipAvail = "", //eVar8
			phoneAvail = "", //eVar9
			addressAvail = "", //eVar10
			respMsg = "", //eVar11
			availType = "", //eVar12
			sEvents = "", //s.events
			sProducts = "", //s.products
			orderNum = "", //s.purchaseID
			totalOrderPrice = "", //Doubleclick
			eBiz_server = "<?php echo $tracking['server'] ?>", // s.server
			eBiz_channel = "<?php echo $tracking['channel'] ?>", // s.channel, s.eVar41
			eBiz_prop20 = "",
			eBiz_prop24 = "<?php echo $tracking['prop24'] ?>",
			eBiz_prop25 = "<?php echo $tracking['prop25'] ?>",
			eBiz_prop26 = "<?php echo $tracking['prop26'] ?>",
			eBiz_prop38 = "<?php echo $tracking['prop38'] ?>",
			eBiz_prop39 = "<?php echo $tracking['prop39'] ?>",
			eBiz_prop52 = "",
			eBiz_evar27 = "",
			eBiz_evar48 = eBiz_prop38,
			eBiz_evar49 = eBiz_prop39,
			eBiz_evar53 = eBiz_prop24,
			eBiz_evar54 = eBiz_prop25,
			eBiz_evar55 = eBiz_prop26,
			eBiz_evar56 = "";
	</script>
	<!-- End SiteCatalyst code version: H.20.3. -->
</head>
<body class="portrait nojs">

<div id="container">
	<div class="fixedWrap">
		<div class="globalHeader">
			<a href="http://www.centurylink.com" target="_blank" id="logo" class="ir">CenturyLink&trade;</a>
			<a class="menuLink togglePageMenu" href="#pageMenu">Menu</a>
			<div id="pageMenu" class="mainMenu hwacel">
				<ul class="navBar">
					<li class="active"><a class="getAjaxPage" href="index.php" data-target=".content"><span class="btnPad">Photos</span></a></li>
					<li><a class="getAjaxPage" href="page1.php" data-target=".content"><span class="btnPad">Music</span></a></li>
					<li><a class="getAjaxPage" href="page2.php" data-target=".content"><span class="btnPad">TV Shows</span></a></li>
					<li><a class="getAjaxPage" href="page3.php" data-target=".content"><span class="btnPad">Movies</span></a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="header">
		<div class="headerImg">
			<img src="images/header-img.png" alt="img" />
		</div>
		<div class="headerTxt">
			<h1 class="message">Lorem ipsum dolor sit amet, consectetuer</h1>
			<h2 class="subMessage">Ipsum dolor sit amet</h2>
			<p class="ctaButtonWrap"><a class="ctaButton" clicktrack="test" href="#order">Learn More &raquo;</a></p>
		</div>
	</div>
	<div id="index" class="content">
		<div class="slideTabs hwacel">
			<ul class="slideTabNav">
				<li><a class="showSlideTab" href="#tab1">Slide Tab 1 eget sem sit</a></li>
				<li><a class="showSlideTab" href="#tab2">Slide Tab 2 eget sem sit</a></li>
				<li><a class="showSlideTab" href="#tab3">Slide Tab 3 eget sem sit</a></li>
				<li><a class="showSlideTab" href="#tab4">Slide Tab 4 eget sem sit</a></li>
			</ul>
			<div class="tabCont">
				<div id="tab1" class="tab">
					<h3 class="tabheader"><a href="#back" class="backLink hideSlideTab">Back</a> Slide Tab 1</h3>
					<div class="section">
						<h3>This is a little bit of Tab Content</h3>
						<p>Nulla facilisi. In vel sem. Morbi id urna in diam dignissim feugiat. Proin molestie tortor eu velit. Aliquam erat volutpat. Nullam ultrices, diam tempus vulputate egestas, eros pede varius leo, sed imperdiet lectus est ornare odio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin consectetuer velit in dui.</p>
					</div>
				</div>
				<div id="tab2" class="tab">
					<h3 class="tabheader"><a href="#back" class="backLink hideSlideTab">Back</a> Slide Tab 2</h3>
					<div class="section">
						<h3>This is a little more Tab Content</h3>
						<p>Nulla facilisi. In vel sem. Morbi id urna in diam dignissim feugiat. Proin molestie tortor eu velit. Aliquam erat volutpat. Nullam ultrices, diam tempus vulputate egestas, eros pede varius leo, sed imperdiet lectus est ornare odio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin consectetuer velit in dui.</p>
						<p>Phasellus wisi purus, interdum vitae, rutrum accumsan, viverra in, velit. Sed enim risus, congue non, tristique in, commodo eu, metus. Aenean tortor mi, imperdiet id, gravida eu., posuere eu, felis.
					</div>
				</div>
				<div id="tab3" class="tab">
					<h3 class="tabheader"><a href="#back" class="backLink hideSlideTab">Back</a> Slide Tab 3</h3>
					<div class="section">
						<h3>This is some more Tab Content</h3>
						<p>Nulla facilisi. In vel sem. Morbi id urna in diam dignissim feugiat. Proin molestie tortor eu velit. Aliquam erat volutpat. Nullam ultrices, diam tempus vulputate egestas, eros pede varius leo, sed imperdiet lectus est ornare odio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin consectetuer velit in dui.</p>
						<br />
						<h3>This is some more Tab Content</h3>
						<p>Phasellus wisi purus, interdum vitae, rutrum accumsan, viverra in, velit. Sed enim risus, congue non, tristique in, commodo eu, metus. Aenean tortor mi, imperdiet id, gravida eu., posuere eu, felis.</p>
						<br />
						<h3>This is some more Tab Content</h3>
						<p>Mauris sollicitudin, turpis in hendrerit sodales, lectus ipsum pellentesque ligula, sit amet scelerisque urna nibh ut arcu. Aliquam in lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla placerat aliquam wisi. Mauris viverra odio. Quisque fermentum pulvinar odio. Proin posuere est vitae ligula. Etiam euismod. Cras a eros.</p>
					</div>
				</div>
				<div id="tab4" class="tab">
					<h3 class="tabheader"><a href="#back" class="backLink hideSlideTab">Back</a> Slide Tab 4</h3>
					<div class="section">
						<h3>This is an extreme amount Tab Content</h3>
						<p>Nulla facilisi. In vel sem. Morbi id urna in diam dignissim feugiat. Proin molestie tortor eu velit. Aliquam erat volutpat. Nullam ultrices, diam tempus vulputate egestas, eros pede varius leo, sed imperdiet lectus est ornare odio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin consectetuer velit in dui.</p>
						<br />
						<h3>Vestibulum interdum </h3>
						<ul>
							<li>Lorem ipsum</li>
							<li>Dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
						</ul>
						<h3>Magna sed quam</h3>
						<ul>
							<li>Lorem ipsum</li>
							<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
							<li>Dolor sit amet</li>
						</ul>
						<h3>This is an extreme amount Tab Content</h3>
						<p>Phasellus wisi purus, interdum vitae, rutrum accumsan, viverra in, velit. Sed enim risus, congue non, tristique in, commodo eu, metus. Aenean tortor mi, imperdiet id, gravida eu., posuere eu, felis.
						<h3>This is an extreme amount Tab Content</h3>
						<p>Mauris sollicitudin, turpis in hendrerit sodales, lectus ipsum pellentesque ligula, sit amet scelerisque urna nibh ut arcu. Aliquam in lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla placerat aliquam wisi. Mauris viverra odio. Quisque fermentum pulvinar odio. Proin posuere est vitae ligula. Etiam euismod. Cras a eros.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="section">
			<h3>Vestibulum interdum </h3>
			<p>Donec placerat. Nullam nibh dolor, blandit sed, fermentum id, imperdiet sit amet, neque. Nam mollis ultrices justo. Sed tempor. Sed vitae tellus. Etiam sem arcu, eleifend sit amet, gravida eget, porta at, wisi. Nam non lacus vitae ipsum viverra pretium. Phasellus massa. </p>
			<p>Donec placerat. Nullam nibh dolor, blandit sed, fermentum id, imperdiet sit amet, neque. Nam mollis ultrices justo. Sed tempor. </p>
			<br />
			<h3>Vestibulum interdum </h3>
			<ul>
				<li>Lorem ipsum</li>
				<li>Dolor sit amet</li>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
			</ul>
			<h3>Magna sed quam</h3>
			<ul>
				<li>Lorem ipsum</li>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
				<li>Dolor sit amet</li>
			</ul>
		</div>
	</div>
	<div class="gotoFullWrap"><a href="#fullsite">&raquo; Go to Full Site</a></div>
	<div class="footer">
		<div class="disclaimer">
			<p class="ctaButtonWrap"><a class="ctaButton" clicktrack="test" href="#order">Learn More &raquo;</a></p>
			<p>Donec placerat. Nullam nibh dolor, blandit sed, fermentum id, imperdiet sit amet, neque. Nam mollis ultrices justo. Sed tempor. </p>
			<p>&copy;2012 CenturyLink, Inc. All Rights Reserved. All other marks are the property of their respective owners.</p>
		</div>
	</div>
</div>

<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.cycle.all.js"></script>

<!-- END MAIN CONTENT AREA -->

<!-- Do not touch! -->


<script type="text/javascript">
	var metrix = '<script type="text/javascript" src="/assets/js/third-party/metrics/metrixConfig.js"><\/script>';
	if ( !document.getElementsByTagName('html')[0].className.match('notSupported') ) {
		document.writeln( metrix );
	}
</script>


<noscript>
<?php
//NON-JS MOBILE PAGE TRACKING
$tImg = '//metrics.centurylink.com/b/ss/';
$tImg .= $tracking['account'];
$tImg .= '/5/H.22.1/';
$tImg .= rand( 1000000000000, 9999999999999 ) . "?D=..&amp;r=" . $_SERVER['HTTP_REFERER'] . '&amp;';

foreach ( $tracking as $key => $value ) {
	if ( $key == 'pageName' ) {
		$tImg .= 'gn=' . $value . '&amp;';
	}
	if ( $key == 'server' ) {
		$tImg .= 'sv=' . $value . '&amp;';
	}
	if ( $key == 'channel' ) {
		$tImg .= 'ch=' . $value . '&amp;' . 'v41=' . $value . '&amp;';
	}
	if ( strpos( $key, 'eVar' ) !== false ) {
		$tImg .= str_replace( 'eVar', 'v', $key ) . '=' . $value . '&amp;';
	}
	if ( strpos( $key, 'prop' ) !== false ) {
		$tImg .= str_replace( 'prop', 'c', $key ) . '=' . $value . '&amp;';
	}
}

echo '<img class="tImg" src="' . $tImg . '" height="5" width="5" border="0" alt="" />';
?>
<a href="http://www.omniture.com" title="Web Analytics"><img src="http://qwest.com/images/spacer.gif" height="1" width="1" border="0" title="" /></a>
</noscript>

<script type="text/javascript" src="js/site.js"></script>

</body>
</html>
