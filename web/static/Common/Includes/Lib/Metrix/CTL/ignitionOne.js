
// this script is used in tracking of paid search marketing campaigns
function stripStr(strText){
	var newStr = strText.replace(/<!--(.*?)-->/gm,''); //strip HTML comments
	newStr = newStr.replace(/(\r\n|\n|\r|\s)/gm,''); //strip newlines,spaces
	return newStr;
}

var convPageName = window.location.pathname;

(function() {
	var h = 'com-centurylink.netmng.com';
	var a = '1279';
	var t = document.createElement('script');
	t.type = 'text/javascript'; t.async = true;
	var p = 'https:'==document.location.protocol?'https://':'http://';
	var m = document.referrer.match(/https?:\/\/([a-z]+\.[a-z\.]+)/i);
	var r = (m && m[1] != document.location.hostname) ? ('&ref=' + escape(document.referrer)) : '';
	var d = '';
	
	//set var d for conversion pages (aka order confirmation pages)
	if ( convPageName == '/shop/checkoutExistingCustomer.html') {
		//pull prices from page to set variable d for L-CTL EC shop path
		var monthlycharge = stripStr( $("tr.grandTotal > td.totalHead:eq(0)").html() );
		var onetimecharge = stripStr( $("tr.grandTotal > td.totalHead:eq(1)").html() );
		d = ['conversion','monthlycharge='+monthlycharge,'onetimecharge='+onetimecharge,'order_code='+orderNum,'sku='+sku,'conversion_type=Shop-CTL-EC'];
		d = '&nm_data='+escape(d.join('|'));
	} else if ( convPageName == '/shop/Iptv/submitIptvOrder.html' ) {
		//pull prices from Omniture variables to set variable d for Prism EC path
		d = ['conversion','monthlycharge='+price,'onetimecharge=0.00','order_code='+order_code,'sku='+sku,'conversion_type=Prism-CTL-EC'];
		d = '&nm_data='+escape(d.join('|'));
	}
	
	t.src = p + h + '/?async=1&aid=' + a + r + d;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(t, s);
})();

