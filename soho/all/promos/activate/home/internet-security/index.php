<?php 
if( !$_SERVER["HTTP_X_PJAX"] ):
	require_once("../../inc/config.php");
	$nav_class["home"] = "selected";
	$tab_class["security"] = "selected-tab";
	$svar = array(
	    'pageName' => "ctl|smb|activation_center|internet_security_tab",
	    'prop26evar54' => "smb|activation_center|internet_security_tab",
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
		<div class="net-security">
			<div class="module">
				<h2>Protect your company’s (and your customers’) information.</h2>
				<p>CenturyLink keeps your business safe online.</p>
			</div>
			<div class="module">
				<div class="info-left">
					<p>Don’t let online threats distract you from outmaneuvering your competition. With CenturyLink, you get features that protect you from all types of online threats.</p>
					<div class="site-list">
						<ul class="ul-spacer">
							<li class="li-spacer">Easily protect up to 5 computers</li>
							<li>AntiVirus and AntiSpam protection that even works for mobile devices</li>
							<li>Firewalls</li>
							<li>Malware protection</li>
							<li>Browsing protection</li>
							<li>Intrusion protection</li>
							<li>Secure network access with VPN and email encryption</li>
						</ul>
					</div>

				</div>
				<div style="clear:both"></div>
			</div>
		</div>

		<div class="breaker"></div>

		<div class="module more-security">
			<div class="info-right">
				<h5>Need even more online security?</h5>
				<p>With CenturyLink you can add powerful security tools to your business bundle. Products like StopTheHacker and SiteLock offer advanced features designed to keep your company safe.</p>
				<ul class="fL more-security-list">
					<li>Web malware detection</li>
					<li>Uptime monitoring</li>
					<li>Reputation monitoring </li>
				</ul>
				<ul class="fL more-security-list">
					<li>Database protection</li>
					<li>Web application firewall </li>
				</ul>
				<div style="clear:both"></div>
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
