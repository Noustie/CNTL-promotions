<?php 
	require_once("../inc/config.php");

	$title = "CenturyLink | Small Business | Schedule Activation Appointment";
	$description = "Schedule or reschedule an appointment to activate the services included in your CenturyLink Business Bundle: email, Internet security and more.";
	$nav_class["schedule-reschedule-appointment"] = "selected";
    $svar = array(
        'pageName' => "ctl|smb|activation_center|schedule_appt_tab",
        'prop26evar54' => "ctl|smb|activation_center|schedule_appt_tab",
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
	<h1>Schedule or reschedule your activation appointment.</h1>
	<p>Use the interface below to schedule, reschedule or cancel your activation appointment.</p>
</div>

<div class="tabbed-nav scheduler container">
	<ul>
		<li><a href="/soho/all/promos/activate/schedule-reschedule-appointment/" class="first-tab selected-tab">Schedule an Appointment</a></li>
		<li><a href="/soho/all/promos/activate/schedule-reschedule-appointment/reschedule.php">Reschedule or Cancel Your Appointment</a></li>
		<div style="clear:both"></div>
	</ul>
</div>

<div id="main" class="container">
	<iframe src="https://schedule.clsetup.com/Default.aspx?mode=savvis&embed=yes" frameborder="0" width="100%" height="800px"></iframe>
</div><!--end main-->

<div class="bottom-cta container">
	<h2>Finished setting up your appointment?</h2>
	<p>Prepare for your activation appointment by completing the pre-appointment checklist.</p>
	<a href="/soho/all/promos/activate/prepare-for-appointment/" class="glow-button" clicktrack="ctl|smb|activation_center|schedule_appt|bottom|button1|prepare_for_appt">Prepare For Appointment</a>
</div>

<?php require_once("../inc/footer.php") ?>