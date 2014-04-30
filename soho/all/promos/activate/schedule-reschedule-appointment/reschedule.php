<?php 
	require_once("../inc/config.php");
	$title = "CenturyLink | Small Business | Schedule Activation Appointment";
	$description = "Schedule or reschedule an appointment to activate the services included in your CenturyLink Business Bundle: email, Internet security and more.";
	$nav_class["schedule-reschedule-appointment"] = "selected light";
    $svar = array(
        'pageName' => "ctl|smb|activation_center|reschedule_or_cancel_ appt_tab",
        'prop26evar54' => "smb|activation_center|reschedule_or_cancel_ appt_tab",
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
		<li><a href="/soho/all/promos/activate/schedule-reschedule-appointment/" class="first-tab">Schedule an Appointment</a></li>
		<li><a href="/soho/all/promos/activate/schedule-reschedule-appointment/reschedule.php" class="selected-tab">Reschedule or Cancel Your Appointment</a></li>
		<div style="clear:both"></div>
	</ul>
</div>

<div id="main" class="container">
	<iframe src="https://schedule.clsetup.com/CustomerSearch.aspx?embed=yes" frameborder="0" width="100%" height="720px"></iframe>
</div><!--end main-->

<?php require_once("../inc/footer.php") ?>

