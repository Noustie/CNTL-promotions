(function (window, $) {

	this.init = function () {
		var btnName = 'chat-centurylink-residential-customer-support-winback';
		var btnID = 'chat-residential-english-winback';
		enablePopups();
		createClickToChat(btnName, btnID);
	}

	this.createClickToChat = function (name, pid) {
		if( !!lpMTagConfig && !!lpMTagConfig.dynButton ) {
			lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {'name':name,'pid':pid};
		}
		$('#lp-button a').live( 'click',function (e) {
			var qLinkName = 'ctl|rsd|product|emktg|comeback_lctl|click_to_chat';
			if(!(typeof s_account === "undefined") && !!s_gi ) {
				var s=s_gi(s_account);
				s.templtv=s.linkTrackVars;
				s.templte=s.linkTrackEvents;
				s.manageVars('clearVars')
				s.linkTrackVars='eVar30';
				s['eVar30']=qLinkName;
				s.tl(this,'o',qLinkName);
				if(s.templtv) s.linkTrackVars=s.templtv;
				if(s.templte) s.linkTrackEvents=s.templte;
			}
		});
	}

	this.enablePopups = function () {
		$(".popupTrigger").live('click', function (e) {
			window.open( this.href, 'discWindow', 'height=500,width=500,top=100,left=100,scrollbars=yes');
			e.preventDefault();
		});
	}


	$(init);
})(window, jQuery);
