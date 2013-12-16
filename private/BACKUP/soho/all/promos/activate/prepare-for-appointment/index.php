<?php 
	require_once("../inc/config.php");
	$title = "CenturyLink | Small Business | Prepare for Activation Appointment";
	$description = "These simple steps will ensure that you’re fully prepared for your Activation Appointment with CenturyLink’s Technology Support Team.";
	$nav_class["prepare-for-appointment"] = "selected";
    $svar = array(
        'pageName' => "ctl|smb|activation_center|prepare_for_appt_tab",
        'prop26evar54' => "smb|activation_center|prepare_for_appt_tab",
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
	<h1>Here’s your pre-appointment checklist.</h1>
	<p>Completing these simple tasks will help ensure that your activation<br/>appointment goes smoothly. </p>
</div>

<div id="main" class="container pre-appointment-checklist">

	<div class="checklist">	
		<h2>Before your activation appointment:</h2>
		<div class="checklistunit">
			<span class="num fL">1</span>
			<h3>Make sure you’re connected to the Internet via your CenturyLink Internet Connection.</h3>
		</div>
		<div class="checklistunit examplecom">
			<span class="num fL">2</span>
			<h3>Make sure you’ve selected a domain name for your company’s website.</h3>
			<p>Come prepared with at least five domain name options in case your first few choices are already taken.</p>
		</div>
		<div class="checklistunit">
			<span class="num fL">3</span>
			<h3>Make sure you’ve informed your company’s IT department, if you have one.</h3>
			<p>This ensures they can be involved in the installation as well as provide appropriate system access.</p>
		</div>
		<div class="checklistunit">
			<span class="num fL">4</span>
			<h3>Make sure you’ve gathered the credentials for current email accounts, Web-hosting<br>accounts, and other important technical information.</h3>
		</div>
	</div>

</div><!--end main-->

<?php require_once("../inc/footer.php") ?>