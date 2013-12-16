<?php
function addGlobalTNTLib () {
	echo '<script type="text/javascript" src="//www.centurylink.com/assets/js/mbox.js"></script>';
}
function addGlobalTNTMbox () {
echo <<<MBOX
	<!-- TnT -->
	<div id="PromotionsCTL-Provisioner" class="mboxDefault"></div>
	<script type="text/javascript">
		mboxCreate('PromotionsCTL-Provisioner','path='+location.pathname,'ttquerystr='+location.search);
	</script>
	<!-- End TnT-->
MBOX;
}
function addConversionTNTMbox () {
echo <<<MBOXCONV
	<!-- TnT -->
	<div id="PromotionsCTL-ConversionSuccess" class="mboxDefault"></div>
	<script type="text/javascript">
		mboxCreate('PromotionsCTL-ConversionSuccess','path='+location.pathname,'ttquerystr='+location.search);
	</script>
	<!-- End TnT-->
MBOXCONV;
}

