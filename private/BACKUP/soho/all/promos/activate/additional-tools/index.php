<?php 
	require_once("../inc/config.php");

	$title = "CenturyLink | Small Business | Additional Tools";
	$description = "Learn more about helpful tools like CenturyLink’s Small Business Resource Center, Business Referral Program and Do-It-Yourself Setup Guides.";
	$nav_class["additional-tools"] = "selected";
    $svar = array(
        'pageName' => "ctl|smb|activation_center|additional_tools_tab",
        'prop26evar54' => "smb|activation_center|additional_tools_tab",
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
	require_once("../inc/header.php");
	require_once("../inc/navigation.php"); 
?>

<div class="hero-text container shorty-tall">
	<h1>Ready to take your business to the next level?</h1>
	<p>We’ve got the tools to help you do it.</p>
</div>

<div id="main" class="container additional-tools">
	<div class="module resource-center1">
		<div class="info-left">
			<h3>The Small Business Resource Center.</h3>
			<p>We’ve created a dedicated website full of helpful articles and videos with tips for unleashing your business’s potential. Learn about popular topics like general and digital marketing, analytics, social media, customer relationship management, small business websites, email, blogging and many more.</p>
			<a href="http://sbrc.centurylink.com" class="tools-links" target="_blank" clicktrack="ctl|smb|activation_center|additional_tools|button1|visit_resource_center">Visit Resource Center</a>
		</div>
		<div style="clear:both"></div>
	</div>

	<div class="module resource-center2">
		<div class="info-right">
			<h3>Business Referral Program.</h3>
			<p>It pays to refer other businesses to CenturyLink. The company you refer gets CenturyLink’s first-class business services and you earn up to $100. It’s a real win-win. </p>
			<a href="http://centurylinkbizreferrals.com" class="tools-links" target="_blank" clicktrack="ctl|smb|activation_center|additional_tools|button2|learn_more">Learn More</a>
		</div>
		<div style="clear:both"></div>
	</div>

	<div class="module resource-center3">
		<div class="info-left">
			<h3>Do-It-Yourself Setup Guides.</h3>
			<p>If you need to set up one or more of your services in the future, these handy guides will help you do it, step by step.</p>
			<a href="http://savvisdirect.com/knowledge-base" class="tools-links" target="_blank" clicktrack="ctl|smb|activation_center|additional_tools|button3|browse_setup_guides">Browse Setup Guides</a>
		</div>
		<div style="clear:both"></div>
	</div>

	<div class="module resource-center4">
		<div class="info-right">
			<h3 class="no-padding">Need even more tools to grow your business?</h3>
			<p class="no-top-space">CenturyLink provides many great services that can help shift your business into overdrive.</p>

			<div class="site-list wide-list">
				<h4>Services like:</h4>
				<ul>
					<li>Analytics software to keep you up to date on all your online media</li>
					<li>A user-friendly online shopping cart software from Pinnacle Cart</li>
					<li>Help building a mobile website quickly and easily with goMobi</li>
					<li>A single, customizable hub where team members can share information and track a project’s progress through Microsoft<sup>&reg;</sup> Sharepoint </li>
					<li>Email archiving, so you can comply with regulations and defend against litigation </li>
				</ul>
				<h5 class="h5-list">For more information, ask a Technology Support Team member.</h5>
			</div>

		</div>
		<div style="clear:both"></div>
	</div>
</div>

<?php require_once("../inc/footer.php") ?>