<?php 
if( !$_SERVER["HTTP_X_PJAX"] ):
	require_once("../../inc/config.php");
	$nav_class["home"] = "selected";
	$tab_class["fax"] = "selected-tab";
	$svar = array(
	    'pageName' => "ctl|smb|activation_center|fax_over_email_tab",
	    'prop26evar54' => "smb|activation_center|fax_over_email_tab",
	    'server' => "centurylink.com",
	    'channel' => "Small Business",
	    'prop20' => "Small Business",
	    'prop24evar35' => "smb|activation_center",
	    'prop25evar53' => "",
	    'prop27evar55' => "",
	    'prop38evar48' => "static_page",
	    'prop39evar49' => "static_page",
	    'prop52evar56' => "ctl"
	);
	require_once("../../inc/header.php");
	require_once("../../inc/navigation.php");
	require_once("../../inc/appointmentSelection.php");
?>

	<div class="tabbed-nav container">
		<ul>
			<li><a href="/soho/all/promos/activate/" class="first-tab <?php echo $tab_class["email"]; ?>" data-clicktrack="ctl|smb|activation_center|email_and_calendar_tab">Email &amp;<br/>Calendar</a></li>
			<li><a href="/soho/all/promos/activate/home/website-tools-and-hosting/" data-clicktrack="ctl|smb|activation_center|website_tools_hosting_tab" class="<?php echo $tab_class["website"]; ?>">Website Tools<br/>&amp; Hosting</a></li>
			<li><a href="/soho/all/promos/activate/home/domain-name-registrations/" data-clicktrack="ctl|smb|activation_center|domain_name_registration_tab" class="<?php echo $tab_class["domain"]; ?>">Domain Name<br/>Registration</a></li>
			<li><a href="/soho/all/promos/activate/home/data-sharing-and-backup/" data-clicktrack="ctl|smb|activation_center|data_sharing_and_backup_tab" class="<?php echo $tab_class["data"]; ?>">Data Sharing<br/>&amp; Backup</a></li>
			<li><a href="/soho/all/promos/activate/home/internet-security" data-clicktrack="ctl|smb|activation_center|internet_security_tab" class="<?php echo $tab_class["security"]; ?>">Internet<br/>Security</a></li>
			<li><a href="/soho/all/promos/activate/home/fax-over-email" data-clicktrack="ctl|smb|activation_center|fax_over_email_tab" class="<?php echo $tab_class["fax"]; ?>">Fax Over<br/>Email</a></li>
			<div style="clear:both"></div>
		</ul>
	</div>

	<div id="main" class="container">
<?php endif; ?>	
		<div class="fax-over-email">
			<div class="module">
				<h2>The facts about Fax over Email.</h2>
				<p>With CenturyLink, you get 20 inbound/outbound pages per month.</p>
			</div>
			<div class="module">
				<div class="info-left">
					<p>Send and receive faxes from anywhere with Fax over Email. You get a real fax number that connects to your email account, enabling you to send and receive faxes right from your wireless device (or your desktop). If you have an email account, you can have Fax over Email.</p>
				</div>
				<div style="clear:both"></div>
			</div>
		</div>

		<div class="breaker"></div>

		<div class="module more-fax-over-email">
			<div class="info-right">
				<h5>Need additional Fax over Email pages?</h5>
				<p>No problem. CenturyLink gives you the flexibility to add as many Fax over Email pages as you need.</p>
				<h5>For more information, ask a Technology Support Team member.</h5>
			</div>
			<div style="clear:both"></div>
		</div>
	</div><!--end main-->
<?php 
if( !$_SERVER["HTTP_X_PJAX"] ):
?>		
	</div><!--end main-->
<?php 
	require_once("../../inc/footer.php");
	endif;
?>