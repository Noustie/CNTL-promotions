			<!-- END INNER_CONTENT_WRAPPER -->
		</div>
		<!-- END CONTENT_WRAPPER -->
		<div class="footer">
			<ul>
				<li><a href="http://www.centurylink.com/home" target="_blank">Residential</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/Legal/privacyPolicy.jsp" target="_blank">Privacy Policy</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/Community/Disabled" target="_blank">Customers with Disabilities</a></li>
				<li class="footernav_last"><a href="http://www.centurylink.com/Pages/AboutUs/CompanyInformation/Regulatory/tariffLibrary.jsp" target="_blank">Tariffs</a></li>
			</ul>
			<p>&copy;<?php echo date("Y"); ?>, CenturyLink, Inc. All Rights Reserved.</p>
		</div>
	</div>
</div>
<script type="text/javascript">
	$(document).ready(function () {
		$('#chatBtn a').live('click', function () {
			var qLinkName = clicktracks.chatBtnTrkName;
			if(!(typeof s_account === "undefined") && !!s_gi )
			{
				var s=s_gi(s_account);
				s.templtv=s.linkTrackVars;
				s.templte=s.linkTrackEvents;
				s.manageVars('clearVars')
				s.linkTrackVars=clicktracks.chatBtnEvar;
				s[clicktracks.chatBtnEvar]=qLinkName;
				s.tl(this,'o',qLinkName);
				if(s.templtv) s.linkTrackVars=s.templtv;
				if(s.templte) s.linkTrackEvents=s.templte;
			}
		});
	})
</script>
<?php
	include_once('../../assets/tracking.php');
?>
</body>
</html>
