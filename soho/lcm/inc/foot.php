<?php
	$s_account = 'qwestmobiledev';
	if ( strpos( $_SERVER['SERVER_NAME'], 'staging' ) === false ) {
		$s_account = 'qwestmobile';
	}
?>

    <script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
    <script type="text/javascript" src="/soho/m-assets/js/jquery.ba-hashchange.min.js"></script>

    <!-- END MAIN CONTENT AREA -->

    <!-- Do not touch! -->
    <?php
		$pageTrackImg = 'http://metrics.centurylink.com/b/ss/' . $s_account . '/5/H.22.1/' . rand( 1000000000000, 9999999999999 ) . '?D=..&amp;gn=' . $s_pageName . '&amp;sv=' . $s_server . '&amp;ch=' . $s_channel . '&amp;c24=' . $s_prop24 . '&amp;v53=' . $s_evar53 . '&amp;c25=' . $s_prop25 . '&amp;v54=' . $s_evar54 . '&amp;r=..';
	?>
    <img class="tImg" src="<?php echo $pageTrackImg; ?>" height="5" width="5" border="0" alt="" />

    <!-- Do not touch! -->
    <!-- SiteCatalyst code version: H.14.
    Copyright 1997-2009 Omniture, Inc. More info available at
    http://www.omniture.com -->
    <script type="text/javascript">
    var pageName = "<?php echo $s_pageName; ?>"; //s.pageName
        pageType = "", 				//s.pageType
        errorType = "", 			//s.prop2
        accountEvents = "", 		//eVar1
        serviceEvents = "", 		//eVar2
        pCategory = "", 			//eVar3
        unisysEvent = "", 			//eVar4
        orderType = "", 			//eVar7
        zipAvail = "", 				//eVar8
        phoneAvail = "", 			//eVar9
        addressAvail = "", 			//eVar10
        respMsg = "", 				//eVar11
        availType = "",				//eVar12
        sEvents = "",				//s.events
        sProducts = "",				//s.products
        orderNum = "", 				//s.purchaseID
        totalOrderPrice = "",	 	//Doubleclick
        eBiz_server = "<?php echo $s_server; ?>",	 	// s.server
        eBiz_channel = "<?php echo $s_channel; ?>", 	// s.channel, s.eVar41
        eBiz_prop20 = "",
        eBiz_prop24 = "<?php echo $s_prop24; ?>",
        eBiz_prop25 = "<?php echo $s_prop25; ?>",
        eBiz_prop26 = "",
        eBiz_prop38 = "<?php echo $s_prop38; ?>",
        eBiz_prop39 = "<?php echo $s_prop39; ?>",
        eBiz_prop52 = "",
        eBiz_evar27 = "",
        eBiz_evar48 = "<?php echo $s_evar48; ?>",
        eBiz_evar49 = "<?php echo $s_evar49; ?>",
        eBiz_evar53 = "<?php echo $s_evar53; ?>",
        eBiz_evar54 = "<?php echo $s_evar54; ?>",
        eBiz_evar55 = "",
        eBiz_evar56 = "";

    var sAccount='<?php echo $s_account; ?>';


    </script>


	<script type="text/javascript">
	//checking if the hash tag is '#success.php' and if so, firing the I2A tracking tag
	if(window.location.hash == '#success.php')
		{
			var pageAction = "3491";
		}
	</script>
    <script type="text/javascript" src="/assets/js/third-party/metrics/metrixConfig.js"></script>
    <script type="text/javascript">
        s.linkInternalFilters="javascript:,tel:,centurylink.,centurytel.,embarqmail.,synacor.,embarq.,speedpay.,mspcare.bcgi.,embarqnow.,centurylink-business";
    </script>
    <noscript>
    <a href="http://www.omniture.com" title="Web Analytics"><img src="//qwest.com/images/spacer.gif" height="1" width="1" border="0" title="" /></a>
    </noscript>
    <!--/DO NOT REMOVE/-->
    <!-- End SiteCatalyst code version: H.14. -->

    <script type="text/javascript" src="../../../m-assets/js/site.js"></script>
</body>
</html>
