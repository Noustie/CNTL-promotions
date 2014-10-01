<?php
	if ( !!!$_SERVER['HTTPS'] || $_SERVER['HTTPS'] == 'no' ) {
		header( 'Location: https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'], true );
	}
	$currentFile = basename($_SERVER["PHP_SELF"]);
	$successPath = "/contact/";
	$bodyClasses = "";

function echoTracking () {
?>
	<script type="text/javascript">
		// var sAccount;
		// var custClass = "business"; //uncomment to use biz suite
		var eBiz_linkInternalFilters = "javascript:,centurylink.,centurytel.,embarqmail.,synacor.,embarq.,speedpay.,mspcare.bcgi.,embarqnow.,centurylink-business,twitter.,facebook."; //Uncomment for special clicktrack needs
		var pageName = "ctl|rsd|product|emktg|2012|customer_service_form"; //s.pageName
		var pageType = ""; 		//s.pageType
		var errorType = ""; 	//s.prop2
		var accountEvents = ""; //eVar1
		var serviceEvents = ""; //eVar2
		var pCategory = ""; 	//eVar3
		var unisysEvent = ""; 	//eVar4
		var orderType = ""; 	//eVar7
		var zipAvail = ""; 		//eVar8
		var phoneAvail = ""; 	//eVar9
		var addressAvail = ""; 	//eVar10
		var respMsg = ""; 		//eVar11
		var availType = ""; 	//eVar12
		var sEvents = ""; 		//s.events
		var sProducts = ""; 	//s.products
		var orderNum = ""; 		//s.purchaseID
		var totalOrderPrice = ""; //Doubleclick
		var eBiz_server = "promotions.centurylink.com"; // s.server
		var eBiz_channel = "rsd"; // s.channel, s.eVar41
		var eBiz_prop20 = "";
		var eBiz_prop24 = "rsd|product";
		var eBiz_prop25 = "rsd|product|emktg|2012";
		var eBiz_prop26 = "rsd|product|emktg|2012|customer_service_form";
		var eBiz_prop38 = "static_page";
		var eBiz_prop39 = "landing_page";
		var eBiz_prop52 = "";
		var eBiz_evar27 = "";
		var eBiz_evar48 = eBiz_prop38;
		var eBiz_evar49 = eBiz_prop39;
		var eBiz_evar53 = eBiz_prop24;
		var eBiz_evar54 = eBiz_prop25;
		var eBiz_evar55 = eBiz_prop26;
		var eBiz_evar56 = "";
	</script>
<?
}

include('includes/header.php'); 
?>
	    <!--START MAIN CONTENT AREA - set height in master.css-->
	    <div id="content">
		<?php
			session_start();
		?>
		<?php include('includes/subhead.php'); ?>
	    	
	    	<?php include('includes/form.php'); ?>
	    	
	    </div>
	    <!--END MAIN CONTENT AREA-->

<?php include('includes/footer.php'); ?>