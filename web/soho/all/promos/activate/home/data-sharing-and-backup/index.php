<?php 
if( !$_SERVER["HTTP_X_PJAX"] ):
	require_once("../../inc/config.php");
	$nav_class["home"] = "selected";
	$tab_class["data"] = "selected-tab";
	$svar = array(
	    'pageName' => "ctl|smb|activation_center|data_sharing_and_backup_tab",
	    'prop26evar54' => "smb|activation_center|data_sharing_and_backup_tab",
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

	<div id="main" class="container data-sharing">
<?php endif; ?>	
		<div class="data-sharing-top">
			<div class="module">
				<h2 class="shorts">Information is a valuable asset.</h2>
				<p class="shorts">CenturyLink gives you the tools you need to share and care for your data.</p>
				<p class="shorts">When it comes to data backup, we know peace of mind is paramount. That’s why we provide you with two licenses, each with 10 GB of online storage space. Our data backup solutions also give you cool features like these:</p>
			</div>
		</div>
		<div class="data-sharing-middle">
			<div class="module">
				<div class="info-right">
					<h5>End-user safety:</h5>
					<p>PC/Laptop/Mobile backup is there in case an end-user accidentally deletes valuable data.</p>
				</div>
				<div style="clear:both"></div>
			</div>
		</div>
		<div class="data-sharing-bottom">
			<div class="module">
				<div class="info-left">
					<h5>Backup with all the right credentials:</h5>
					<p>Our backup solution is compliance-friendly for audits, financial statements and lawyers. Plus, it aligns with stringent international data compliance regulations. </p>
				</div>
				<div style="clear:both"></div>
			</div>
		</div>

		<div class="breaker"></div>

		<div class="module more-data-sharing">
			<div class="info-left scrap-width">
				<h5>Need flexible, scalable options for online storage?</h5>
				<p>With CenturyLink, you can increase your remote storage capacity at any time.</p>
				<h5>For more information, ask a Technology Support Team member.</h5>
			</div>
			<div style="clear:both"></div>
		</div>
<?php 
if( !$_SERVER["HTTP_X_PJAX"] ):
?>		
	</div><!--end main-->
<?php 
	require_once("../../inc/footer.php");
	endif;
?>