<?php 
	require_once("./inc/config.php");

	$title = "CenturyLink | Small Business | Activate email, Internet security and more.";
	$description = "Get more out of your CenturyLink Small Business Bundle by activating services like Microsoft Exchange email, Norton Antivirus and more.";
	$nav_class["home"] = "selected";
	$tab_class["email"] = "selected-tab";
    $svar = array(
        'pageName' => "ctl|smb|activation_center|email_and_calendar_tab",
        'prop26evar54' => "smb|activation_center|email_and_calendar_tab",
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

	if( !$_SERVER["HTTP_X_PJAX"] ):
		require_once("./inc/header.php");
		require_once("./inc/navigation.php");
		require_once("./inc/appointmentSelection.php");
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
		<div class="module">
			<h2>Business email: Hugely powerful. Perfect for small businesses.</h2>
			<p>Turbocharge your business with email you can use virtually anywhere – even with a tablet or mobile device. </p>
		</div>

		<div class="module business-email">
			<div class="info-left">
				<h3>Business Email</h3>
				<img src="/soho/all/promos/activate/img/outlook-icon.png" class="outlook-icon1" alt="">
				<p>Get 2 Microsoft<sup>&reg;</sup>-hosted Exchange email accounts with personalized addresses so you can connect with clients, customers and staff &ndash; no matter where you are. Plus, an easy-to-use address book keeps all your contacts organized and in a single place.</p>
				
				<div class="site-list">
					<h4>Includes:</h4>
					<ul>
						<li>2 licenses, each with 5 GB of storage – enough space for 5,000 photos</li>
						<li>99% uptime SLA reliability</li>
						<li>Seamless synching for all your devices</li>
						<li>Automatic server backup so information is never lost</li>
						<li>Address book</li>
					</ul>
				</div>
			</div>
			<div style="clear:both"></div>
		</div>

		<div class="module calendar">
			<div class="info-right">
				<h3>Calendar</h3>
				<img src="/soho/all/promos/activate/img/outlook-icon.png" class="outlook-icon1" alt="">
				<p>This intuitive online calendar helps you schedule meetings, sends reminders of upcoming meetings and more. Best of all, it works hand-in-hand with your Microsoft<sup>&reg;</sup> Outlook email account.</p>
			</div>
			<div style="clear:both"></div>
		</div>


		<div class="breaker"></div>

		<div class="module lync">
			<div class="info-left">
				<img src="/soho/all/promos/activate/img/mail-add-icon.png" alt="" class="mail-add-icon">
				<h5>Adding employees?</h5>
				<p class="p-spacer">With CenturyLink, it’s easy to add more email accounts for your growing business.</p>
				<h5>Ready to collaborate?</h5>
				<p>Keep everyone in the loop with Microsoft<sup>&reg;</sup> Lync, an easy-to-use program designed for instant messaging, video conferencing and more.</p>
				<img src="/soho/all/promos/activate/img/lync-icon.png" alt="" class="lync-icon">
				<h5>For more information, ask a Technology Support Team member.</h5>
			</div>
			<div style="clear:both"></div>
		</div>
<?php 
if( !$_SERVER["HTTP_X_PJAX"] ):
?>		
	</div><!--end main-->
<?php 
	require_once("./inc/footer.php");
	endif;
?>