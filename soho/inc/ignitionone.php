<?php
function addIgnOne_behavioral () {
echo <<<IGNONE_BEHAV
	<!-- BEGIN IGNITION ONE BEHAVIORAL -->
	<script type="text/javascript">
	(function() {
		var h = 'com-centurylink.netmng.com';
		var a = '1279';
		var t = document.createElement('script');
		t.type = 'text/javascript'; t.async = true;
		var p = 'https:'==document.location.protocol?'https://':'http://';
		var m = document.referrer.match(/https?:\/\/([a-z]+\.[a-z\.]+)/i);
		var r = (m && m[1] != document.location.hostname) ? ('&ref=' + escape(document.referrer)) : '';
		t.src = p + h + '/?async=1&aid=' + a + r;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(t, s);
	})();
	</script>
	<!-- END IGNITION ONE BEHAVIORAL -->
IGNONE_BEHAV;
}
function addIgnOne_conversion ( $conversion_type = "SOHO-LQ", $sku = "", $order_code = "", $onetimecharge="", $monthlycharge="" ) {
echo <<<IGNONE_CONV
	<!-- BEGIN IGNITION ONE CONVERSION -->
	<script type="text/javascript">
	(function() {
		var h = 'com-centurylink.netmng.com';
		var a = '1279';
		var t = document.createElement('script');
		t.type = 'text/javascript'; t.async = true;
		var p = 'https:'==document.location.protocol?'https://':'http://';
		var m = document.referrer.match(/https?:\/\/([a-z]+\.[a-z\.]+)/i);
		var r = (m && m[1] != document.location.hostname) ? ('&ref=' + escape(document.referrer)) : '';
		var d = ['conversion','monthlycharge=$monthlycharge','onetimecharge=$onetimecharge','order_code=$order_code','sku=$sku','conversion_type=$conversion_type'];
		d = '&nm_data='+escape(d.join('|'));
		t.src = p + h + '/?async=1&aid=' + a + r + d;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(t, s);
	})();
	</script>
	<!-- END IGNITION ONE CONVERSION -->
IGNONE_CONV;
}
