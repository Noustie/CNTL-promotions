<?php 

if( !$_SERVER["HTTP_X_PJAX"] ):
	require_once("../../inc/config.php");
	$nav_class["home"] = "selected";
	$tab_class["website"] = "selected-tab";
	$svar = array(
	    'pageName' => "ctl|smb|activation_center|website_tools_hosting_tab",
	    'prop26evar54' => "smb|activation_center|website_tools_hosting_tab",
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
		<div class="web-tools">
			<div class="module">
				<h2>Help customers find your business online.</h2>
				<p>Establish a strong Web presence with these great tools from CenturyLink.</p>
			</div>
			<div class="module">
				<div class="info-left">
					<h5>Want to build a website? Now you can.</h5>
					<p>Create your own website with our easy-to-use online tools. Choose from customizable site templates for your industry and incorporate popular services like YouTube, Google Search, Share and more.</p>
					<h5>Promote your website with our SEO and marketing tools.</h5>
					<p>With these advanced tools you can raise your search ranking and drive more traffic to your site. Trust the professionals to keep your site on search engines and in front of customers.</p>
					<h5>We’ll also host your website</h5>
					<div class="site-list">
						<h4>Our hosting services include:</h4>
						<ul>
							<li>5 GB of web space</li>
							<li>99% uptime SLA reliability</li>
							<li>Built-in redundancy</li>
							<li>Daily website backup</li>
						</ul>
					</div>

				</div>
				<div style="clear:both"></div>
			</div>
		</div>

		<div class="breaker"></div>

		<div class="module more-tools">
			<div class="info-right">
				<h5>Need more tools to manage your business online?</h5>
				<p>We’ve got them. CenturyLink offers advanced tools to customize your website, manage your business’s social media accounts, and optimize your website for search engines.</p>
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