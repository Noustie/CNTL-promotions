	<!-- click to chat -->
	<script type="text/javascript">
		lpMTagConfig = { lpNumber: '86584264' };
		if ( location.hostname.match('staging') ) {
			//lpMTagConfig.lpNumber = '90218425';
		}
	</script>
	<script src="https://www.centurylink.com/assets/js/third-party/ctl-liveperson-mtagconfig.js"></script>
	<script>
		try {
		    lpAddVars('page', 'PageName', 'clickChat');
		    var lpUnit='residential'; //myaccount-service
		    lpAddVars('session', 'lpDomain', document.domain);
		} catch (e) {}
	</script>