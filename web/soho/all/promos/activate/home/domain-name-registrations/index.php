<?php 
if( !$_SERVER["HTTP_X_PJAX"] ):
	require_once("../../inc/config.php");
	$nav_class["home"] = "selected";
	$tab_class["domain"] = "selected-tab";
	$svar = array(
	    'pageName' => "ctl|smb|activation_center|domain_name_registration_tab",
	    'prop26evar54' => "smb|activation_center|domain_name_registration_tab",
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
		<div class="domain-names">
			<div class="module">
				<h2 class="shorty">Your company’s website will need a domain name.</h2>
				<p>Luckily, CenturyLink gives you one.</p>
			</div>
			<div class="module">
				<div class="info-left">
					<p>What’s in a name? Well, if it’s a domain name, a lot. Your domain name serves as the calling card for your business online. A great domain name not only helps your customers (and search engines) find you on the Web, it also helps your business stand out. That’s why your CenturyLink business bundle includes one domain name – to help you hit the ground running.</p>
					<p>Not sure what a domain name is? It’s a company’s Web address (e.g., www.example.com).</p>	
				</div>
				<div style="clear:both"></div>
			</div>
		</div>

		<div class="breaker"></div>

		<div class="module more-domains">
			<div class="info-left">
				<h5>Need additional domain names?</h5>
				<p>With CenturyLink buying more domain names is easy.</p>
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