(
/**
 *
 * jQuery extension closure 
 * @param {Object} $ jQuery representation
 */
function($) {
	/**
	 * Core javascript library for CenturyLink.com
	 * @class
	 */
	$.centurycore = {
		setup:function(timer){
			$().ready(function(){
				$.centurycore.initialize();
			});
		},
		initialize:function(){ 
			$.centurycore.modals.initialize({cookieJar:subcookiejar,serviceDomain:ctl_url});
			$.centurycore.popups.initialize({triggerClass:'.popup-trigger'});
			$.centurycore.welcomeobject.initialize();
		},
		/**
		 * Function to permit the return of a specific url from the matrix
		 * @param {string} domain	shoppingDomain from the cookie, identifying customer type.
		 * @param {string} modalType	Which modal is making the request for the url
		 * @param {string} redirId	id of the action/link we have clicked, key for the url in the matrix.
		 *
		 * @return {string} url that matches the domain and id, from the modal's matrix subset.
		 */
		markAsError:function(errorMessageId, errorField) {
			$(errorMessageId).show();
			$(errorField).addClass('errored');
		},
		clearErrors:function(){
			
			$('.errored').removeClass('errored');
			$('.error-message').hide();
			$('.error').hide();
			$('.modal-errors').hide();
		},
		overrideSubmit:function(form,trigger) {
			//Added keypress handling for IEs misbehaviors.
			$(form).keypress(function(event){
				keycode = event.keyCode;
				if (keycode == 13) {
					//alert('called submit off enter');
					$(this).submit();
				} else {
					return true;
				}
			});
			$(form).submit(function(event){
				$(trigger).click();
				//alert('call the clicky!');
				event.preventDefault();
				return false;
			});
		},
		redirectSuccessfulAuth : function(domain, modalType, redirId, customerType,params) {
			//We are going to short circuit some stuff here.
			var bestData = qm.getBestDataSource();
			switch($.type(bestData.specialFlags)) {
				case "string":
					if(bestData.specialFlags.indexOf('shopClec') >= 0) {
						window.location.href = "/small-business/CLEC/";
						return;
					}
					break;
				case "array":
					if(bestData.specialFlags.length !== null) {
						$(bestData.specialFlags).each(function(){
							$this = $(this)[0];
							if($this.indexOf('shopClec') >= 0) {
								window.location.href="/small-business/CLEC/";
								return;
							}
						});
					}
					break;
			}
			
			$.centurycore.modals.retries = 0;
			var target = '';
			var useJumpPage = '';
			var jumpTarget  = '';
			
			qm.ignorePreviousAuthData = false;
			
			if(typeof params != 'object') {
				params = {};
			}
			
			if(qm.loopback) {
				qm.loopback = false;
				$.centurycore.modals.activeModalType = null;
				location.reload(true);
				return true;
			}
			
			if(domain == 'UNKNOWN' || domain == 'OOR' || typeof domain == 'undefined' || domain == '') {
				$.centurycore.modals.activeModalType = null;
				window.location = q_url + '/home/oor/index.html';
				clearTimeout($.centurycore.modals.interstitialTimer);
				return;
			}
			
			
			
			if(q.utility.getLinkTypeById(redirId,domain,customerType) == 'popup') {
				$.centurycore.modals.activeModalType = null;
				window.open(q.utility.getLinkEndpointById(redirId,domain,customerType),'popup','scrollbars=yes,height=500,width=420');
				qm.hideInterstitial();
				$('#zam-modal').jqmHide();
				return false;
			}

			if(q.utility.getLinkTypeById(redirId,domain,customerType) == 'ajax') {
				$.centurycore.modals.activeModalType = null;
				target = q.utility.getLinkEndpointById(redirId,domain,customerType);
				$.ajax({
					type: "GET",
					url: target
                }).done(function( msg ) {
					
					var tip = $('#ajax-content-div_'+redirId);
					tip.html(msg);
                });
                qm.hideInterstitial();
                $('#zam-modal').jqmHide();
                return false;
			} 

			if(modalType == 'mam') {
			//Stuff goes here.
			}else if(typeof customerType == 'undefined') {
				target = q.utility.getLinkEndpointById(redirId,domain,customerType);
				
				if(q.utility.getLinkTypeById(redirId,domain,customerType) == 'TCAT') {
					useJumpPage = true;
					jumpTarget = generalUrls['shop'][domain]
				}
			} else {
				target = q.utility.getLinkEndpointById(redirId,domain,customerType);
				if(q.utility.getLinkTypeById(redirId,domain,customerType) == 'TCAT') {
					useJumpPage = true;
					jumpTarget = generalUrls['shop'][domain];
				}
			}
			if(target != '#NOREDIRECT' && $.centurycore.modals.activeModalType != 'zam') {
			
			//Handle manipulation of target for params
			if(target.substr(0,1) != '#') {
				for(p in params) {
					target = $.centurycore.utility.addUrlParameter(target,p,params[p]);
				}
			}}
			
			if(target != '#NOREDIRECT') {
				var subcookie = {redirectTarget:target};
				qm.options.cookieJar.bake('profile_cookie',subcookie,0,"/","centurylink.com");
			}
		    
			
			if(target == '#REMAINONPAGE') {
				$('.jqmWindow').jqmHide();
				$.centurycore.modals.hideInterstitial();
				return;
			}
			
			if(useJumpPage) {
				$.centurycore.modals.activeModalType = null;
				// The following logic is used to automatically redirect the user back to a given tcat env
				// after calling COM locator services.  
				// DO NOT REMOVE - This is required functionality for load test
				if(SERVER_TYPE != 'PROD' && domain == 'CTL' && window.location.search.match('devBaseDestOverRide')!=null ) 
				{
					jumpTarget = jumpTarget + window.location.search.match('devBaseDestOverRide').input
					window.location = jumpTarget
				}
				else if (SERVER_TYPE != 'PROD' && domain == 'Q' && window.location.search.match('devBaseDestOverRide')!=null ) 
				{
					newTarget = target.split(".centurylink.com")[1]
					newTarget = 'http://' + window.location.search.match('devBaseDestOverRide').input.split("=")[1] + newTarget
					var subcookie = {redirectTarget:newTarget};
					qm.options.cookieJar.bake('profile_cookie',subcookie,0,"/","centurylink.com");
					jumpTarget = 'http://' + window.location.search.match('devBaseDestOverRide').input.split("=")[1] + '/MasterWebPortal/shopAuthentication'
					window.location = jumpTarget
				}
				else
				{
					window.location = jumpTarget
				}
				clearTimeout($.centurycore.modals.interstitialTimer);
			} else {
				
				if(target == '#SEARCH') {
					if(domain == 'Q'){
						$('#search-site').val('residential_collection');
						$('#proxystylesheet').val('lq_residential_frontend');
						$('#client').val('lq_residential_frontend');
					} else if (domain == 'CTL') {
						$('#search-site').val('residential_collection');
						$('#proxystylesheet').val('ctl_residential_frontend');
						$('#client').val('ctl_residential_frontend');		
					}
					$('#searchTextId').val($('#tpl_search-input').val());
					$('#siteSearch').attr('action', search);
					$('#siteSearch').submit();
					return;
				} else if(target == '#FAQSEARCH') {
					$('#faqSearchField').unbind('submit');
					$('#faqSearchField').submit();
					return;
				} else if(target == '#OOR') {
					$('.modal .page').hide();
					$('#' + modalType + '_oor').show();
					qm.hideInterstitial();
				} else if (target == '#UNAVAILABLE') {
					$('#' + modalType + '-modal').jqmHide();
					$('#unavailable-modal .initial').show();
					$('#unavailable-modal .notonline').hide();
					$('#unavailable-modal').jqmShow();
					$('#unavailable-modal').jqmAddClose($('.upm_close'));
					qm.hideInterstitial();
				} else if (target == '#NOTONLINE') {
					$('#' + modalType + '-modal').jqmHide();
					$('#unavailable-modal .initial').hide();
					$('#unavailable-modal .notonline').show();
					$('#unavailable-modal').jqmShow();
					$('#unavailable-modal').jqmAddClose($('.upm_close'));
					
				} else if(target == '#PCHAT') {
					qm.hideInterstitial();
					if(domain == 'Q') {
						lpAddVars('session','isLegacyQwest',true);
						lpAddVars('session','isLegacyCenturylink',false);
					} else if (domain == 'CTL') {
						lpAddVars('session','isLegacyQwest',false);
						lpAddVars('session','isLegacyCenturylink',true);
					}
					return;
				} else {
					qm.showInterstitial();
					$.centurycore.modals.activeModalType = null;
					window.location = target;
					clearTimeout($.centurycore.modals.interstitialTimer);
				}
			}
		},
		/**
		 * Modals module for the centurycore library.
		 *
		 *@class
		 */
		modals: {
			retries: 0,
			activeModalType: null,
			customerType: 'unknown',
			interstitialTimer:null,
			getCustomerType: function(){
				if(subcookiejar.fetch('customerType','customerType')=='EC' || subcookiejar.fetch('remember_me','accountNumber') || subcookiejar.fetch('remember_me','telephoneNumber') || subcookiejar.fetch('remember_me','userName')) {
					return 'EC';
				} else {
					return 'NC';
				}
			},
			/**
			 * Provides functionality to show the interstitial, and handle timeouts as well as omniture reporting.
			 * @param string domain overrides the customer domain registered for the interstitial hit in omniture.
			 * @param function timeoutCallback Callback function to use in place of the default timeout handling.
			 *
			*/
			showInterstitial:function(domain,timeoutCallback){
			    var frame = 0;
				var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
				if(navigator.userAgent.toLowerCase().indexOf('safari') > -1 && navigator.userAgent.toLowerCase().indexOf('mac') > -1){
					var is_safari_mac=true;
				} else var is_safari_mac=false;
				
				if($.centurycore.modals.interstitialTimer == null && !is_chrome && !is_safari_mac) {
					$.centurycore.modals.interstitialTimer = setInterval(function(){frame++;if(frame > 6) {frame = 1};if (frame >= 1 && frame <= 6) {$('#interstitial-badge-image').eq(0).attr('src','/assets/images/templates/interstitial' + frame + '.bmp');}},500);
				} else {
					frame = 0;
				}

				$('#interstitial').show();
				var dataSource = qm.getBestDataSource(),customerTypePretty,companyPretty;
				switch(dataSource.shoppingDomain) {
					case 'Q':
						companyPretty = "Qwest";
						break;
					case 'CTL':
						companyPretty = "CenturyLink"
						break;
					default:
						companyPretty = "Unknown";
				}
				
				if(dataSource.domainOverlap == 'Y') {
						companyPretty = "Overlapped";
				}
				
				switch($.centurycore.modals.customerType){
					case "NC":
						customerTypePretty = "New Customer";
						break;
					case 'EC':
						customerTypePretty = "Existing Customer: Legacy " + companyPretty;
						break;
					default:
						customerTypePretty = "unknown";
				}
				
				s.manageVars('clearVars');
				s.pageName = "ctl|rsd|" + $.centurycore.modals.activeModalType + "|interstitial";
				s.server="centurylink.com";
				s.prop3=s.eVar24="unknown";
				s.prop38=s.eVar48="modal";
				s.prop39=s.eVar49=$.centurycore.modals.activeModalType + "_modal";
				s.prop52=s.eVar56="ctl";
				s.t();
				//$.centurycore.clearErrors();
				/* If the timeoutCallback parameter was provided and is a function, use it with the setTimeout instead of the default 'handleInterstitialTimeout'
				NOTE:  This does not engage the hideInterstitial function.  If you need the logic in that function, you will need to call it
				       yourself.
				COMMENTED OUT DUE TO FALSE PRESENTATION of ERRORS to customers*/
				if(timeoutCallback != 'undefined' && typeof timeoutCallback == 'function') {
					$.centurycore.modals.interstitialTimer = setTimeout(timeoutCallback,60000);
				} else {
					$.centurycore.modals.interstitialTimer = setTimeout($.centurycore.modals.handleInterstitialTimeout,60000);
				}
				
			},
			hideInterstitial:function(){
			    $('#interstitial').hide();
				/*s.manageVars('clearVars');
				s.pageName = "ctl|rsd|" + $.centurycore.modals.activeModalType + "|interstitial|closed";
				s.server="centurylink.com";
				s.channel=s.eVar41=s.eVar51="rsd";
				s.prop3=s.eVar24="unknown";
				s.prop38=eVar48="static_page";
				s.prop39=eVar49=$.centurycore.modals.activeModalType + "_modal";
				s.prop52=s.eVar56="ctl";
				s.t();*/
				//$.centurycore.clearErrors();
				clearTimeout($.centurycore.modals.interstitialTimer);
			},
			handleInterstitialTimeout: function() {
				if($.centurycore.modals.retries > 4) {
					window.location = 'http://sorry.centurylink.com/';
					return;
				} else {
					$('.interstital-timeout').show();
					$.centurycore.modals.hideInterstitial();
				}
			},
			resetSelectors:function() {
				$('input[name="ctam_company-selector-radio"],input[name="mam_company-selector-radio"],input[name="ctam_nc-company-selector-radio"]').each(function() {$(this).attr('checked',false);})
			},
			destroyAuthorization:function(){
				cookiejar.crumble('profile_cookie');
				cookiejar.crumble('remember_me');
				qm.ignorePreviousAuthData = true;
			},
			determineCompanyByZipCode: function(zip){
				
				getProfileFromZip(zip,'Y',function(data){
					
					qm.latestResponse = data;
					
					if(data.shoppingDomain != '') {
						return data.shoppingDomain;
					} else {
						return false;
					}
				});
				
			},
			getBestDataSource: function(){
				if(qm.latestResponse != null) {
					data = qm.latestResponse;
				} else {
					data = qm.options.cookieJar.fetch('profile_cookie');
				}
				if(data == null) {
					data = {};
				}
				
				return data;
			},
			/**
			 * @var {Object} default settings for the modals
			 */
			defaults: {
				zam  : '#zam-modal',
				mam  : '#mam-modal',
				ctam : '#ctam_modal',
				tam  : '#tam_modal',
				targetRedirect : '#targetRedirect',
				requestor:'EBIZ',
				serviceDomain:'http://webdmzqa2.centurylink.com' //temp change from webdmzqa3 to webdmzqa2 because testing was blocked - ST
			},
			latestResponse: null,
			ignorePreviousAuthData: false,
			loopback: false,
			/**
			 * Initialize the modals for the page
			 * 
			 * @param {Object} options Optional parameters for setting up the modals.
			 *
			 * @return {Object} Returns jquery for a fluent interface.
			 */
			initialize:function(options){
				this.options={};
				$.extend(this.options,this.defaults);
				$.extend(this.options,options);
				this.options.cookieJar = subcookiejar;
				//initialize all jqmModals
				$('.modal').jqm({modal:true});
				var dataSource = qm.getBestDataSource();
				//if the user is authenticated, they get a ctam auth, otherwise, off to the generic page.
				if(dataSource.shoppingDomain != 'undefined') {
					$('.auth-switch-ctam').each(function(){
						$(this).attr("href","#CTAM");
						$(this).addClass("modal-trigger");
					});
					$('.auth-switch-zam').each(function(){
						$(this).attr("href","#ZAM");
						$(this).addClass("modal-trigger");
					});
					$('.auth-switch-mam').each(function(){
						$(this).attr("href","#MAM");
						$(this).addClass("modal-trigger");
					});
				} 
				//attach the click event to all links marked as triggers
				$('a.modal-trigger').live('click',this.onTriggerClick);
				$('area.modal-trigger').live('click',this.onTriggerClick);
				//ZAM internal content setup
				this.zam.initialize();
				//MAM internal Content Setup
				this.mam.initialize();
				//CTAM internal Content Setup
				this.ctam.initialize();
				//UPM internal Content Setup
				this.upm.initialize();
				//TAM internal content setup
				this.tam.initialize();
				
				//Mass Form setup.  This is what makes the enter key work.
				$.centurycore.overrideSubmit('#ctam_nc-form','#ctam_nc-go');
				$.centurycore.overrideSubmit('#ctam_nc-overlap-form','#ctam_nc-overlap-go');
				$.centurycore.overrideSubmit('#ctam_ec-btn','#ctam_ec-go');
				$.centurycore.overrideSubmit('#ctam-mya-zip','#ctam_ec-zip-auth-go');
				//$.centurycore.overrideSubmit('.ctam-myaccount-form','#ctam_ec-go');
				$.centurycore.overrideSubmit('#ctam-oor-form','#ctam_oor-go');
				$.centurycore.overrideSubmit('#mam_ec_form-zipentry','#mam_ec-zip-auth-go');
				$.centurycore.overrideSubmit('#mam-oor-form','#mam_oor-go');
				$.centurycore.overrideSubmit('.myaccount-form','#mam_ec-go');
				
				initializeLocator(this.options.requestor,this.options.serviceDomain);
				//preload interstitial frames
				$.centurycore.utility.preload(
					'/assets/images/templates/interstitial1.bmp',
					'/assets/images/templates/interstitial2.bmp',
					'/assets/images/templates/interstitial3.bmp',
					'/assets/images/templates/interstitial4.bmp',
					'/assets/images/templates/interstitial5.bmp',
					'/assets/images/templates/interstitial6.bmp');
				return jQuery;
			},
			/**
			 * Modal triggering function, binds to all links on the page which have the class defined for the trigger class, defaults to modal-trigger.
			 *
			 * @return {boolean} false to stop link event bubbling
			 */
			onTriggerClick:function(event,proxy){
				if(typeof proxy != 'undefined') {
					var originId  = proxy.id;
					var modalType = proxy.href;
					var existingCustomer = proxy.isExisting;
				} else {
					var originId  = $(this).attr('id');
					var modalType = $(this).attr('href');
					var existingCustomer = $(this).hasClass('already-customer');
				}
				qm.resetSelectors();
				dataSource = qm.getBestDataSource();
				
				rememberMe = subcookiejar.fetch('remember_me');
				switch(modalType){
					case '#ZAM':
						$.centurycore.modals.activeModalType='zam';
						$.centurycore.modals.customerType = 'unknown';

						if(dataSource.shoppingDomain && !qm.ignorePreviousAuthData && (dataSource.domainOverlap != 'Y' || dataSource.shoppingDomainOverride != undefined)) {
							q.redirectSuccessfulAuth(dataSource.shoppingDomain,'zam',originId);
						} else {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|zam";
							s.channel = s.eVar41  = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="zam_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop51=s.eVar51="locator|zam"; // Registry Method 
							s.events="event45";
							s.t();
							$(qm.options.zam).jqmShow();
							$(qm.options.zam).jqmAddClose($('.zam_close'));
							$(qm.options.zam + ' ' + qmz.options.targetRedirect).val(originId);
						};
						break;
					case '#CTAM':
						$.centurycore.modals.activeModalType='ctam';
						if(dataSource.shoppingDomain && $.centurycore.modals.getCustomerType() && !qm.ignorePreviousAuthData && (dataSource.domainOverlap != 'Y' || dataSource.shoppingDomainOverride != 'undefined')) {
							$.centurycore.modals.customerType = $.centurycore.modals.getCustomerType();
							q.redirectSuccessfulAuth(dataSource.shoppingDomain,'ctam',originId,$.centurycore.modals.customerType);
						} else {
							s.manageVars("clearVars");
							s.pageName = "ctl|rsd|ctam";
							s.channel = s.eVar41 = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="ctam_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							//s.prop51=s.eVar51="locator|ctam:address"; // Registry Method 
							s.events="event45";
							s.t();
							if(existingCustomer){qm.ctam.options.mode = 'existing'};
							$(qm.options.ctam).jqmShow();
							$(qm.options.ctam).jqmAddClose($('.ctam_close'));
							$(qm.options.ctam + ' ' + qmc.options.targetRedirect).val(originId);
							if(qm.ctam.options.mode == 'existing') {
								qm.ctam.showExistingCustomerAuth();
								qm.ctam.options.mode = 'new';
							} else {
								//qm.ctam.showNewCustomerAuth();
							}
						};
						break;
					case '#MAM':
						$.centurycore.modals.activeModalType='mam';
						$.centurycore.modals.customerType = 'EC';
						//Omniture hooks
						//TODO: Remove this during refactor to place it in analytics module.
						s.manageVars("clearVars");
						s.pageName = "ctl|rsd|mam";
						s.channel =s.eVar41= "rsd";
						s.prop38=s.eVar48="modal";
						s.prop39=s.eVar49="mam_modal";
						s.prop52=s.eVar56="ctl";
						s.prop3=s.eVar24="unknown";
						s.prop51=s.eVar51="locator|mam";
						s.events="event45";
						s.t();
						$(qm.options.mam).jqmShow();
						$(qm.options.mam).jqmAddClose($('.mam_close'));
						$(qm.options.mam + ' ' + qmm.options.targetRedirect).val(originId);
						$('#mam_myaccount-password').focus();
						break;
					case '#TAM':
						$.centurycore.modals.activeModalType='tam';
						$.centurycore.modals.customerType = 'EC';
						if(dataSource.shoppingDomain && !qm.ignorePreviousAuthData && (dataSource.domainOverlap != 'Y' || dataSource.shoppingDomainOverride != undefined)) {
							q.redirectSuccessfulAuth(dataSource.shoppingDomain,'zam',originId);
						} else {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|tam";
							s.channel =s.eVar41= "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="tam_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop51=s.eVar51="locator|tam"; // Registry Method 
							s.events="event45";
							s.t();
							$(qm.options.tam).jqmShow();
							$(qm.options.tam).jqmAddClose($('.tam_close'));
							$(qm.options.tam + ' ' + qmt.options.targetRedirect).val(originId);
						};
						break;
				}
				return false;
			},
			/**
			 * Zip Authentication Modal(ZAM) - Defines the behaviors and actions of the zip authentication modal used for qualifying customers based upon geographical location within our footprint.
			 *
			 * @class
			 */
			zam:{
				/**
				 * Defaults for options used by this module: 
				 * targetRedirect - Used to mark a field as the field containing the value the user should be redirected to.
				 *
				 *@field
				 */
				defaults:{targetRedirect:'#targetRedirect'},
				/**
				 * After initialize, this field contains the meged hash of passed in arrays and defaults.
				 *
				 * @field
				 */
				options:{},
				
				/**
				 * Initializes the ZAM modal, setting options, passing through defaults, and attaching events to buttons.
				 *
				 * @params {Object} options  Passed in value to override the default values provided for this module.
				 */
				initialize:function(options){
					$.extend(this.options,this.defaults);
					$.extend(this.options,options);
					
					if(subcookiejar.fetch('remember_me','zipCode') != null) {
						$('#zam-zip').val(subcookiejar.fetch('remember_me','zipCode'))
					}
					
					$('#zam_zip-auth-go').live('click',function(){$('#zam-form').submit()});
					$('#zam_needed-link').live('click', function(){$('#zam_needed-content').toggle();});
					$('#zam-form').submit(qmz.authenticateByZip);
					$('#zam_oor-go').click(qmz.handleOor);
					$('#zam_overlap-go').click(qmz.overlapRedirect);
					$('#zam_zip-reset').click(qmz.resetZip);
				},
				resetZip:function(){
					subcookiejar.crumble('customerType');
					$('#zam_zip').show();
					$('#zam_zip-on-file').hide();
					$('#zam_company-selector').hide();
					$('#zam-error-overlap').hide();
					return false;
				},
				authenticateByZip:function(){
					$('.modal-errors').hide();
					var zip = $('#zam_zip-code').val();
					var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
					if (isValid){
					//if(zip != '' && zip.length == 5) {
						qm.showInterstitial();
						getProfileFromZip(zip,'Y',qmz.profile);
					} else if (zip.length < 5 && zip.length > 0) {
						s.manageVars('clearVars');
						s.pageName = "ctl|rsd|oorm";
						s.channel=s.eVar51 = "rsd";
						s.prop38=s.eVar48="modal";
						s.prop39=s.eVar49="oor_modal";
						s.prop52=s.eVar56="ctl";
						s.prop3=s.eVar24="unknown";
						s.prop4=eVar28="zam  - [n/a] - [A zip code must contain 5 digits]";
						s.events="event34";
						s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
						s.prop51=eVar51="locator|zam"; // Registry Method
						s.t();
						$('#zam-error-zip-length').show();
					} else if(isNaN(zip)){
						s.manageVars('clearVars');
						s.pageName = "ctl|rsd|oorm";
						s.channel=s.eVar51 = "rsd";
						s.prop38=s.eVar48="modal";
						s.prop39=s.eVar49="oor_modal";
						s.prop52=s.eVar56="ctl";
						s.prop3=s.eVar24="unknown";
						s.prop4=eVar28="zam  - [n/a] - [A zip code must be numeric]";
						s.events="event34";
						s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
						s.prop51=eVar51="locator|zam"; // Registry Method
						s.t();
						$('#zam-error-zip-numeric').show();
					}else {
						s.manageVars('clearVars');
						s.pageName = "ctl|rsd|oorm";
						s.channel=s.eVar51 = "rsd";
						s.prop38=s.eVar48="modal";
						s.prop39=s.eVar49="oor_modal";
						s.prop52=s.eVar56="ctl";
						s.prop3=s.eVar24="unknown";
						s.prop4=eVar28="zam  - [n/a] - [You must enter a zip code]";
						s.events="event34";
						s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
						s.prop51=eVar51="locator|zam"; // Registry Method
						s.t();
						$('#zam-error-zip-required').show();
					}
					return false;
				},
				handleOor:function(){
					var option = $('#zam_oor input[name="oor_options"]:checked').val();
					switch(option){
						case 'oor_services':
							qm.showInterstitial();
							$.centurycore.modals.activeModalType = 'oor';
							window.location = ctl_url + '/home/oor/index.html';
							clearTimeout($.centurycore.modals.interstitialTimer);
							break;
						case 'oor_nc-address':
							$('#zam-modal').jqmHide();
							qm.onTriggerClick(null,{id:'tpl_res-dd-free-wifi',href:'#CTAM',isExisting:false});
							break;
						case 'oor_try-again':
							$('#zip-error').hide();
							$('#zam-initial').show();
							$('#zam_oor').hide();
							break;
					}
					return false;
				},
				/**
				 * Parses the return value of the locator service call, and creates the profile cookie, while allowing the user to continue.
				 *
				 *@param {Object} locator service profile object, returned from a call to the locator service.
				 */
				profile:function(data){
					var customerData = subcookiejar.fetch('customerType');
					var profileData  = subcookiejar.fetch('profile_cookie');
					if(profileData != null && profileData.shoppingDomainOverride != null) {
						dataSource.shoppingDomain = profileData.shoppingDomainOverride;
					} else if (profileData == null) {
						profileData = {};
					}
					
					if (customerData == null) {
						customerData = {};
					}
					
					if(data.errorCode == 'UNEXPECTED') {
						s.manageVars('clearVars');
						s.pageName = "ctl|rsd|oorm";
						s.channel=s.eVar51 = "rsd";
						s.prop38=s.eVar48="modal";
						s.prop39=s.eVar49="oor_modal";
						s.prop52=s.eVar56="ctl";
						s.prop3=s.eVar24="unknown";
						s.prop4=eVar28="zam - [n/a] - [UNEXPECTED] - [We had an unexpected error, please try again]";
						s.events="event34";
						s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
						s.prop51=eVar51="locator|zam"; // Registry Method
						s.t();
					} else if(data.errorCode == 'INVALID_VALUE' && data.errorMessage == 'zipCode')
					{
						$('#zip-error').show();
						qm.hideInterstitial();
						s.manageVars('clearVars');
						s.pageName = "ctl|rsd|oorm";
						s.channel=s.eVar51 = "rsd";
						s.prop38=s.eVar48="modal";
						s.prop39=s.eVar49="oor_modal";
						s.prop52=s.eVar56="ctl";
						s.prop3=s.eVar24="unknown";
						s.prop4=eVar28="zam  - " + data.errorMessage + " - " + $('#zip-error').text();
						s.events="event34";
						s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
						s.prop51=eVar51="locator|zam"; // Registry Method
						s.t();
					} else if (data.domainOverlap == 'Y' && profileData.shoppingDomainOverride == null) {
						$('#zam_zip').hide();
						$('#zam_stored-zip').text(data.zipForFive);
						$('#zam_zip-on-file').show();
						$('#zam_company-selector').show();
						$('#zam-error-overlap').show();
						qm.hideInterstitial();
					} else if (data.domainOverlap == 'Y' && profileData.shoppingDomainOverride != null) {
						qmz.overlapRedirect(profileData.shoppingDomainOverride);
					} else if(data.shoppingDomain == 'OOR' || data.shoppingDomain == 'UNKNOWN' || data.shoppingDomain == '') {
						$('#zip-error').hide();
						$('#zam-initial').hide();
						qm.hideInterstitial();
						$('#zam_oor').show();
					} else {
						$('#zip-error').hide();
						s.manageVars('clearVars');
						s.prop3=s.eVar24='unknown';
						s.prop51=eVar51="locator|zam"; // Registry Method
						s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
						s.events="event46";
						s.t();
						q.redirectSuccessfulAuth(data.shoppingDomain,'zam',$(qm.options.zam + ' ' + qmz.options.targetRedirect).val());
					}
				},
				overlapRedirect:function(domainOverride){
					var selectedDomain = null;
					if(typeof domainOverride != 'undefined' && typeof domainOverride != 'object') {
						selectedDomain = domainOverride;
					} else {
						selectedDomain = $('input[name="zam_company-selector-radio"]:checked').val();
					}
					
					if(typeof selectedDomain != 'string') {
						$('.zam_instructions').removeClass('error-text');
						$('#zam-company-not-selected').show();
						return;
					}
					
					var profileData = subcookiejar.fetch('profile_cookie');
					if(profileData == null) {
								profileData = {};
							}
					profileData.shoppingDomainOverride = selectedDomain;
					subcookiejar.bake('profile_cookie',profileData,0,"/","centurylink.com");
					q.redirectSuccessfulAuth(selectedDomain,'zam',$(qm.options.zam + ' ' + qmz.options.targetRedirect).val());
				}
			},
			/**
			 * Customer Type Authentication Modal(CTAM) - Defines the behaviors and actions of the customer-type authentication modal used for qualifying customers based upon geographical location within our footprint, telephone or account number, or myaccount credentials.
			 *
			 * @class
			 */			
			 ctam:{
				defaults:{targetRedirect:'#ctam_target-redirect',mode:'new'},
				options:{},
				ctamEcMode:'phone',
				initialize:function(options){
					$.extend(this.options,this.defaults);
					$.extend(this.options,options);
					
					
					
					if(dataSource.zipCode != 'undefined') {
						$('#ctam_ec-stored-zip').text(dataSource.zipCode);
					};
					//New customer submit button
					$('#ctam_nc-go').click(qmc.authenticateNewCustomer);
					//Existing customer submit button
					$('#ctam_ec-go').click(qmc.authenticateExistingCustomer);
					//toggle display of new customer content in modal block
					$('#ctam_current-customer-link').live('click', qmc.showExistingCustomerAuth);
					//toggle display of new customer content in modal block
					$('#ctam_new-customer-link').live('click', qmc.showNewCustomerAuth);
					//Action for the change zip link
					$('#ctam_ec-zip-reset').click(qmc.resetZipPreAuth);
					//PreAuth zip action
					$('#ctam_ec-zip-auth-go').click(qmc.preAuthByZip);
					//Phone/Account and Myaccount switch
					$('input[name="ec_login_type"]').live('change', function(){
						$.centurycore.modals.customerType = "EC";
						$.centurycore.modals.activeModalType = "ctam";
						var radioVal=$('input[name="ec_login_type"]:checked').val();
						if(radioVal=='myaccount'){
							qmc.showMyAccountAuth();
						}else{
							qmc.showPhoneOrAccountAuth();
						}
					});
					
					if(subcookiejar.fetch('remember_me','zipCode') != null) {
						$('#ctam_ec-zip-code').val(subcookiejar.fetch('remember_me','zipCode'));
						$('#ctam_nc-zip').val(subcookiejar.fetch('remember_me','zipCode'));
						$('#ctam_nc-address').val(subcookiejar.fetch('remember_me','streetAddress1'));
						$('#ctam_nc-unit-number').val(subcookiejar.fetch('remember_me','unitNumber'));
						$('#ctam_nc-city').val(subcookiejar.fetch('remember_me','city'));
						$('#ctam_nc-state').val(subcookiejar.fetch('remember_me','state'));
						$('#ctam_nc-unit-type').val(subcookiejar.fetch('remember_me','unitType'));
					} else {
						$('#ctam_ec-zip-code').val('');
						$('#ctam_nc-zip').val('');
						$('#ctam_nc-address').val('');
						$('#ctam_nc-unit-number').val('');
						$('#ctam_nc-city').val('');
						$('#ctam_nc-state').val('');
						$('#ctam_nc-unit-type').val('');
					}
					
					//Populate MyAccount username if we have a remember_me cookie.
					var rememberedUser = subcookiejar.fetch('remember_me','userName');
					if(rememberedUser != null) {
						$('#ctam_ec-myaccount-username').val(rememberedUser);
						$('#ctam_ec-q-ma-remember-me').attr('checked','checked');
					}
					//Show myaccount first
					$('#ctam_ec-myaccount-radio').click();
					$('#ctam_oor-go').click(qmc.handleOor);
					$('input[name="ctam_company-selector-radio"]').change(function(){
						var profileData = subcookiejar.fetch('profile_cookie');
						if(profileData == null) {
								profileData = {};
							}
						profileData.shoppingDomainOverride = $(this).val();
						subcookiejar.bake('profile_cookie',profileData,0,"/","centurylink.com");
						qmc.showMyAccountAuth($(this).val());
					});
					
					$('#ctam_nc-overlap-go').click(function(){
						qmc.ncOverlapRedirect($('input[name=ctam_nc-company-selector-radio]:checked').val());
					})
				},
				authenticateNewCustomer:function(){
					q.clearErrors();
					var street     = $('#ctam_nc-address').val();
					var unit       = $('#ctam_nc-unit-type').val();
					var unitNumber = $('#ctam_nc-unit-number').val();
					var city       = $('#ctam_nc-city').val();
					var state      = $('#ctam_nc-state').val();
					var zip        = $('#ctam_nc-zip').val();

					var rememberMe = 'N';
					if($('#ctam_nc-address-remember-me').is(':checked')) { rememberMe = 'Y';}
					
					if(street == '' || city == '' || state == '' || zip == '' || zip.length < 5) {

						if(street == '') {
							
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|oorm";
							s.channel=s.eVar51 = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="oor_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop4=eVar28="ctam - [n/a] - [A street address is required]";
							s.events="event34";
							s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=eVar51="locator|zam"; // Registry Method
							s.t();
							
							$('#ctam-error-street-required').show();
						}
						
						if(city == '') {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|oorm";
							s.channel=s.eVar51 = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="oor_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop4=eVar28="ctam - [n/a] - [A city is required]";
							s.events="event34";
							s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=eVar51="locator|zam"; // Registry Method
							s.t();
							$('#ctam-error-city-required').show();
						}
						
						if(state == '') {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|oorm";
							s.channel=s.eVar51 = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="oor_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop4=eVar28="ctam - [n/a] - [You must select a state]";
							s.events="event34";
							s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=eVar51="locator|zam"; // Registry Method
							s.t();
							$('#ctam-error-state-required').show();
						}
						
						if(zip == '') {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|oorm";
							s.channel=s.eVar51 = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="oor_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop4=eVar28="ctam - [n/a] - [A zip code is required]";
							s.events="event34";
							s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=eVar51="locator|zam"; // Registry Method
							s.t();
							$('#ctam-error-zip-required').show();
						} else if (zip.length > 0 && zip.length < 5) {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|oorm";
							s.channel=s.eVar51 = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="oor_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop4=eVar28="ctam - [n/a] - [A zip code must contain 5 digits]";
							s.events="event34";
							s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=eVar51="locator|zam"; // Registry Method
							s.t();
							$('#ctam-error-zip-length').show();
						}
						
						return;
					}
					qm.showInterstitial();
					
					getProfileFromAddress(street, unit, unitNumber, city, state, zip, rememberMe, function(data){
						qm.latestResponse = data;
						if(data.domainOverlap == 'Y') {
							$('#ctam_nc-form-container').hide();
							$('#ctam_nc-overlap').show();
							qm.resetSelectors();
							$('#ctam_nc-company-selector').show();
							qm.hideInterstitial();
							return;
						}
						
						if(data.addressRequestValid) {
							s.manageVars('clearVars');
							s.prop3=s.eVar24="unknown";// New Customer or Existing Customer]
							s.prop51=s.eVar51="locator|ctam:address"; // Registry Method
							s.eVar60="ctam:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.events="event46";
							s.t();
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'NC';
							subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
							switch(data.shoppingDomain) {
								case 'Q':
								case 'CTL':
									q.redirectSuccessfulAuth(data.shoppingDomain,'ctam',$(qm.options.ctam + ' ' + qmc.options.targetRedirect).val(),'NC');
									break;
								default:
									$('#ctam_initial').hide();
									qm.hideInterstitial();
									$('#ctam_oor').show();
									s.manageVars('clearVars');
									s.pageName = "ctl|rsd|oorm";
									s.channel=s.eVar51 = "rsd";
									s.prop38=s.eVar48="modal";
									s.prop39=s.eVar49="oor_modal";
									s.prop52=s.Var56="ctl";
									s.prop3=s.eVar24="unknown";
									s.prop4=eVar28="ctam  - " + data.errorMessage + " - ";
									s.events="event34";
									s.eVar60="ctam:" + data.zipForFive; // Registry Type Detail
									s.prop51=eVar51="locator|ctam"; // Registry Method
									s.t();
							}
						}
					});
					return false;
				},
				authenticateExistingCustomer:function(){
					q.clearErrors();
					
					var radioVal=$('input[name="ec_login_type"]:checked').val();
						if(radioVal=='myaccount'){
							
							qmc.authExistingByMyAccount();
						}else{
							
							qmc.authExistingByPhoneOrAccount();
						}
				},
				authExistingByPhoneOrAccount:function(){
					var entry = $('#ctam_ec-phone-or-account').val();
					if(entry == '') {
						s.manageVars('clearVars');
						s.pageName = "ctl|rsd|oorm";
						s.channel=s.eVar51 = "rsd";
						s.prop38=s.eVar48="modal";
						s.prop39=s.eVar49="oor_modal";
						s.prop52=s.eVar56="ctl";
						s.prop3=s.eVar24="unknown";
						s.prop4=eVar28="ctam - [n/a] - [A phone or account number is required]";
						s.events="event34";
						s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
						s.prop51=eVar51="locator|zam"; // Registry Method
						s.t();
						$('#ctam-phonenumber-required-error').show();
						return;
					}
					
					qm.showInterstitial();
					var rememberMe;
					if($('#ctam_ec-phone-remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
					getProfileFromPhoneOrAccount(entry,rememberMe,function(data){
						qm.latestResponse = data;
						if(data.errorCode =="") {
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'EC';
							subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
							q.redirectSuccessfulAuth(data.shoppingDomain,'ctam',$(qm.options.ctam + ' ' + qmc.options.targetRedirect).val(),'EC');
						} else {
							$('#ctam_initial').hide();
							$('#ctam_oor').show();
							qm.hideInterstitial();
						}
					});
					return false;
				},
				authExistingByMyAccount:function(){
					var user = $('#ctam_ec-myaccount-username').val();
					var password = $('#ctam_ec-myaccount-username').val();
					
					if(user == '' || password == '') {
						if(user == '') {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|oorm";
							s.channel=s.eVar51 = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="oor_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop4=eVar28="ctam - mya - [A username is required]";
							s.events="event34";
							s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=eVar51="locator|zam"; // Registry Method
							s.t();
							$('#ctam-username-required-error').show();
						}
						
						if(password == '') {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|oorm";
							s.channel=s.eVar51 = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="oor_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop4=eVar28="ctam - mya - [A password is required]";
							s.events="event34";
							s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=eVar51="locator|zam"; // Registry Method
							s.t();
							$('#ctam-password-required-error').show();
						}
						return;
					}
					if(user != '') {
					var rememberMe;
					if($('#ctam_ec-q-ma-remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
					
					subcookiename='userName|'+user;
					if(rememberMe == 'Y'){cookiejar.bake('remember_me',subcookiename,30,"/","centurylink.com");}
					else{cookiejar.bake('remember_me',subcookiename,0,"/","centurylink.com");}
					}
					
					qm.showInterstitial();
					if(typeof customerData == 'undefined') {
						customerData = {};
					}
					customerData.customerType = 'EC';
					subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
					var endpointId = $(qm.options.ctam + ' ' + qmc.options.targetRedirect).val();
					try {
						var topicRedirect = $.centurycore.utility.getLinkTopicNameById(endpointId);
						qm.options.cookieJar.bake('profile_cookie',{redirectTarget:topicRedirect},0,"/","centurylink.com");
					} catch (err) {
						//this is swallowing the exception generated while we transition.
					}
					
											
					$('#ec-ma-submit').click();
					
					return false;
				},
				preAuthByZip:function(){
					q.clearErrors();
					
					var zip = $('#ctam_ec-zip-code').val();
					if(zip.length > 0 && zip.length < 5) {
						$('#ctam-error-zip-length').show();
						s.manageVars('clearVars');
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=eVar28="ctam - mya - [Please enter a valid zip code]";
						s.events="event34";                                                                                                
						s.prop51=eVar51="locator|ctam"; // Registry Method
						s.eVar60="ctam:unpwd:*****"; // Registry Type Detail
						s.t();
					} else if(zip == '') {
						$('#ctam-error-zip-required').show();
						s.manageVars('clearVars');
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=eVar28="ctam - mya - [Please enter a valid zip code]";
						s.events="event34";                                                                                                
						s.prop51=eVar51="locator|ctam"; // Registry Method
						s.eVar60="ctam:unpwd:*****"; // Registry Type Detail
						s.t();
					} else if(isNaN(zip)) {
						$('#ctam-error-zip-required').show();
						s.manageVars('clearVars');
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=eVar28="ctam - mya - [Please enter a valid zip code]";
						s.events="event34";                                                                                                
						s.prop51=eVar51="locator|ctam"; // Registry Method
						s.eVar60="ctam:unpwd:*****"; // Registry Type Detail
						s.t();
					} else {
						var rememberMe;
						if($('#ctam_remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
						getProfileFromZip(zip,'Y',function(data){
							qm.latestResponse = data;
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'NC';
							subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
							if(data.shoppingDomain == 'OOR') {
								$('#ctam-error-zip-unrecognized').show();
								s.manageVars('clearVars');
								s.prop3=s.eVar24="Existing Customer";
								s.prop4=eVar28="ctam - mya - [Please enter a valid zip code]";
								s.events="event34";                                                                                                
								s.prop51=eVar51="locator|ctam"; // Registry Method
								s.eVar60="ctam:unpwd:*****"; // Registry Type Detail
								s.t();
							} else if(data.shoppingDomain != '') {
								s.manageVars('clearVars');
								s.prop3=s.eVar24='Existing Customer';
								s.prop51=eVar51="locator|ctam"; // Registry Method
								s.eVar60="ctam:zip:" + data.zipForFive; // Registry Type Detail
								s.events="event48";
								s.t();
								$('#ctam_ec-stored-zip').text(qm.latestResponse.zipForFive);
								qmc.showMyAccountAuth();
							};
						});
					}
					return false;
				},
				
				resetZipPreAuth:function(){
					subcookiejar.crumble('customerType');
					$('#ctam_ec-zip').show();
					$('#ctam_ec-zip-on-file').hide();
					$('#ctam_ec-myaccount').hide();
					$('#ctam_ec-submit-tools').hide();
					$('#ctam_company-selector').hide();
					return false;
				},
				showNewCustomerAuth:function(){
					$('#ctam_current-customer-expanded').hide();
					$('#ctam_new-customer-expanded').show();
					$('#ctam_new-customer .modal-block-title').addClass('ctam-active-block');
					$('#ctam_current-customer .modal-block-title').removeClass('ctam-active-block');
					return false;
				},
				showExistingCustomerAuth:function(){
					$('#ctam_new-customer .modal-block-title').removeClass('ctam-active-block');
					$('#ctam_new-customer-expanded').hide();
					$('#ctam_existing-customer .modal-block-title').addClass('ctam-active-block');
					$('#ctam_current-customer-expanded').show();
					//$('#ctam_ec-phonenum').show();
					$('#ctam_ec-myaccount').show();
					$('#ctam_ec-phonenum-radio').show();
					$('#ctam_ec-submit-tools').show();
					if(subcookiejar.fetch('remember_me','userName') != null) {
						$('#ctam_ec-myaccount-password').focus();
					}
				},
				showMyAccountAuth:function(domainOverride) {
					var dataSource = qm.getBestDataSource();
					var profileData = subcookiejar.fetch('profile_cookie');
					
					if(typeof(domainOverride != 'undefined') && domainOverride != null){
						dataSource.shoppingDomain = domainOverride;
					} else if ($('input[name="ctam_company-selector-radio"]:checked').length) {
						dataSource.shoppingDomain = $('input[name="ctam_company-selector-radio"]:checked').val();
						domainOverride = $('input[name="ctam_company-selector-radio"]:checked').val();
					} else if (profileData != null && profileData.shoppingDomainOverride != null) {
						dataSource.shoppingDomain = profileData.shoppingDomainOverride;
						domainOverride = profileData.shoppingDomainOverride;
					}
					
					/* s.manageVars('clearVars');
					s.prop3=s.eVar24='unknown';
					s.prop51=eVar51="locator|ctam"; // Registry Method 
					s.events="event45";
					//s.t();  commented this call as we are getting duplicate call in L CTL  config page for the UAT defect fix
					*/ 
					$('#ctam_ec-phonenum').hide();
					$('#ma-container').show();
						
					ctamEcMode = 'myaccount';
				},
				showPhoneOrAccountAuth:function(){
					s.manageVars('clearVars');
					s.prop3=s.eVar24="unknown";
					s.prop51=eVar51="locator|ctam:phone-account" // Registry Method 
					s.events="event45"
					s.t();
					$('#ctam_ec-phonenum').show();
					$('#ma-container').hide();
					$('#ctam_ec-zip').hide();
					$('#ctam_ec-zip-on-file').hide();
					$('#ctam_ec-submit-tools').show();
					ctamEcMode = 'phone';
				},
				handleOor:function(){
					var option = $('#ctam_oor input[name="oor_options"]:checked').val();
					switch(option){
						case 'oor_services':
							qm.showInterstitial();
							$.centurycore.modals.activeModalType = 'oor';
							window.location = ctl_url + '/home/oor/index.html';
							clearTimeout($.centurycore.modals.interstitialTimer);
							break;
						case 'oor_nc-address':
							$('#ctam-error').hide();
							$('#ctam_initial').show();
							$('#ctam_oor').hide();
							break;
						case 'oor_try-again':
							$('#ctam-error').hide();
							$('#ctam_initial').show();
							$('#ctam_oor').hide();
							break;
					}
					return false;
				},
				ncOverlapRedirect: function(domainOverride){
					qm.showInterstitial();
					var selectedDomain = null;
					if(typeof domainOverride != 'undefined' && typeof domainOverride != 'object') {
						selectedDomain = domainOverride;
					} else {
						selectedDomain = $('input[name="ctam_nc-company-selector-radio"]:checked').val();
					}
					//console.log(selectedDomain);
					if(typeof selectedDomain != 'string') {
						$('.ctam_nc-instructions').removeClass('error-text');
						$('#ctam_nc-company-not-selected').show();
						qm.hideInterstitial();
						return;
					}
					
					var profileData = subcookiejar.fetch('profile_cookie');
					if(profileData == null) {
								profileData = {};
							}
					profileData.shoppingDomainOverride = selectedDomain;
					subcookiejar.bake('profile_cookie',profileData,0,"/","centurylink.com");
					q.redirectSuccessfulAuth(selectedDomain,'ctam',$(qm.options.ctam + ' ' + qmc.options.targetRedirect).val(),'NC');
				}
			},
			/**
			 * MyAccount Authentication Modal(MAM) - Defines the behaviors and actions of the myaccount authentication modal used for qualifying customers based upon myaccount credentials.
			 *
			 * @class
			 */
			mam:{
				defaults:{targetRedirect:'#mam_target-redirect'},
				options:{},
				initialize:function(options){
					dataSource = qm.getBestDataSource();
					$.extend(this.options,this.defaults);
					$.extend(this.options,options);
					var rememberedUser = subcookiejar.fetch('remember_me','userName');
					if(rememberedUser != null) {
						$('#mam_myaccount-username').val(rememberedUser);
						$('#mam_myaccount-password').focus();
						$('#mam_remember-me').attr('checked','checked');
					}
					
					if(qm.options.cookieJar.fetch('profile_cookie','shoppingDomain') != 'undefined') {
						$('#mam_ec-stored-zip').text(qm.options.cookieJar.fetch('profile_cookie','zipCode'));
					};
					$('#mam_needed-content').hide();
					$('#mam_needed-link').live('click', function(){$('#mam_needed-content').toggle();});
					$('#mam_ec-go').click(function(){
						$('#mam-ma-modal-login').submit();
						return false;
					});
					$('#mam-ma-modal-login').submit($.centurycore.modals.mam.validateMyAccountForm);
				},
				validateMyAccountForm:function(){
					$.centurycore.clearErrors();
					var user = $('#mam_myaccount-username').val();
					var password = $('#mam_myaccount-password').val(); 
					if(user == '' || password == '') {
						if(user == '') {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|mam";
							s.channel=s.eVar51 = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="oor_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop4=eVar28="mam - mya - [A username is required]";
							s.events="event34";
							s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=eVar51="locator|zam"; // Registry Method
							s.t();
							$('#mam-username-required-error').show();
						}
						
						if(password == '') {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|mam";
							s.channel=s.eVar51 = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="mam_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop4=eVar28="mam - mya - [A password is required]";
							s.events="event34";
							s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=eVar51="locator|zam"; // Registry Method
							s.t();
							$('#mam-password-required-error').show();
						}
						return false;
					}
					if(user != '') {
					var rememberMe;
					if($('#mam_remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
					
					subcookiename='userName|'+user;
					if(rememberMe == 'Y'){cookiejar.bake('remember_me',subcookiename,30,"/","centurylink.com");}
					else{cookiejar.bake('remember_me',subcookiename,0,"/","centurylink.com");}
					}
					
					return true;
				}
			},
			upm:{
				initialize:function(){
					$('#upm_go').click(qmu.handle);
				},
				handle:function(){
					var dataSource = qm.getBestDataSource();
					var selected = $('input[name="unavailable_product_options"]:checked').val();
					switch(selected){
						case 'upm_directv':
							$.centurycore.modals.activeModalType = 'upm';
							window.location = "/home/tv/";
							clearTimeout($.centurycore.modals.interstitialTimer);
							break;
						case 'upm_hsi':
							$.centurycore.modals.activeModalType = 'upm';
							window.location = "/home/internet/";
							clearTimeout($.centurycore.modals.interstitialTimer);
							break;
						case 'upm_bundles':
							$.centurycore.modals.activeModalType = 'upm';
							window.location = "/home/bundles/";
							clearTimeout($.centurycore.modals.interstitialTimer);
							break;
						case 'upm_phone':
							$.centurycore.modals.activeModalType = 'upm';
							window.location = "/home/phone/";
							clearTimeout($.centurycore.modals.interstitialTimer);
							break;
						case 'upm_home':
							$.centurycore.modals.activeModalType = 'upm';
							window.location = '/';
							clearTimeout($.centurycore.modals.interstitialTimer);
							break;
							
					};
				}
			},
			tam: {
				defaults:{targetRedirect:'#tam-targetRedirect'},
				options:{},
				initialize:function(options) {
					$.extend(this.options,this.defaults);
					$.extend(this.options,options);
					//console.log('tam activated');
					$('#tam-form').submit(function(){qmt.profile();return false;});
					$('#tam-submit-go').click(function(){$('#tam-form').submit();return false;});
				},
				profile:function(){
					$.centurycore.clearErrors();
					var customerData = $('#tam-phone-account').val();
					var unclean = customerData
					var sanitized = unclean.replace(/[\- ]/g,'')
					var error = false;
					
					//console.log(sanitized);
					
					if(customerData.length < 1) {
						qm.hideInterstitial();
						$('#tam-error-empty').show();
						return false;
					}
					
					//Validate customer data
					if(!(/^[A-Za-z0-9].*$/.test(sanitized))) {
						//Show non-alphanum error
						//console.log('Invalid Character');
						error=true;
					}
					
					if(sanitized.length != 9 && sanitized.length != 10 && sanitized.length != 11 && sanitized.length != 13) {
						//Show length error
						//console.log('Length is wrong');
						error = true;
					}
					if(error) {
						qm.hideInterstitial();
						$('#tam-error-valid').show();
						return false;
					}
					getProfileFromPhoneOrAccount(customerData,'Y',function(data){
						qm.latestResponse = data;
						if(data.errorCode ==""  && data.shoppingDomain != "UNKNOWN") {
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'EC';
							subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
							var params = {}
							if(data.shoppingDomain == 'Q' && sanitized.length == 10 && !isNaN(sanitized)) {
								params['form.btn'] = sanitized;
							} else if (data.shoppingDomain == 'CTL' && sanitized.length == 9) {
								params['accountNumber'] = sanitized;
							}
							q.redirectSuccessfulAuth(data.shoppingDomain,'ctam',$(qm.options.tam + ' ' + qmt.options.targetRedirect).val(),'EC',params);
						} else {
							//Error handling here
							//Show OOR
							qm.hideInterstitial();
							
						}
					});
				}
			}
		},
		/**
		* Popups module: Provides ajax modal capabilities for displaying 'popups' as modals on the page, with content from anywhere.
		*
		* @class
		*/
		popups:{
			/**
			 * Default Options:  
			 * closeTrigger: defines the class on the close trigger for a popup (defaults to 'popup-close'),
			 * triggerClass: defines the class on elements that will trigger a popup (defaults to 'popup-trigger'),
			 * ajaxTarget: defines the target for the popup content.  Should be a url. (defaults to '@href', or the href of the trigger link),
			 * makeTop: whether or not to move the modal container to be a child of the body element, helps to ease some of the z-index issues (defaults to 'true')
			 * 
			 * @field
			 */
			defaults:{closeTrigger:'.popup-close',triggerClass:'.popup-trigger',ajaxTarget:'@href',makeTop:true,target:'.modal-content'},
			/**
			 * Used by init to store the merged options and defaults associative arrays.  Provided options take precedence.
			 * 
			 * @field
			 */
			options:{},
			/**
			 * meant to run 'onLoad', this function finds all of the elements with 'triggerClass' class, and attaches event handlers in order to trigger the popups.
			 *
			 * @params {Object} options provided options to override default configurable settings.
			 */
			initialize:function(options){
				$('a.popup-trigger,area.popup-trigger').each(function(){
						var height=500;
						var width=420;
						var left=100;
						var top=50;
						var scroll = 'yes';
						var resize = 'yes';
						
						if($(this).attr('popup-width')) {
							var width=$(this).attr('popup-width');
						}
						
						if($(this).attr('popup-height')) {
							var height=$(this).attr('popup-height');
						}
						
						if($(this).attr('popup-left-offset')) {
							var left=$(this).attr('popup-left-offset');
						}
						
						if($(this).attr('popup-top-offset')) {
							var top=$(this).attr('popup-top-offset');
						}
						
						if($(this).attr('popup-expandable')) {
							var height=$(this).attr('popup-expandable');
						}
						
						if($(this).attr('popup-resizable')) {
							var resize=$(this).attr('popup-resizable');
						}
						
						$(this).click(function(){window.open($(this).attr('href'),'popup','resizable=' + resize + ',scrollbars=' + scroll + ',height=' + height + ',width=' + width + ',left=' + left + ',top=' + top);
						return false;
					});
					
				});
				
			},
			showContent:function(hash){
				
			}
		},
		/**
		 * Module containing code for managing centurylink analytics code and placement
		 *
		 * @class
		 */
		analytics:{
			initialize:function(){
				//Attach link click actions.
				$('a[clicktrack],area[clicktrack]').not('.tab').each(function(){$(this).click(qa.trackAction);});
				
				//Attach tab change tracking.
				$('.ui-tabs').live('tabsselect',$.centurycore.analytics.trackTabChange);
				qa.pageLevelSetup();
			},
			trackAction:function (qLinkName,withImpressions) {
				if(typeof withImpressions != 'undefined'){var withImpressions = false;}
				switch(typeof qLinkName) {
					case 'object':
					case 'undefined':
						qLinkName = $(this).attr('clicktrack');
						break;
				}
				if(!(typeof s_account === "undefined"))
				{
					var s=s_gi(s_account);
					s.templtv=s.linkTrackVars;
					s.templte=s.linkTrackEvents;
					s.manageVars('clearVars') // Kalyani change: New line added
					if(withImpressions) {
						s.linkTrackVars='eVar30,products';
						s.products=";" + qLinkName;
					} else {
						s.linkTrackVars='eVar30';
					}
					s.eVar30=qLinkName;
					s.tl(this,'o',qLinkName); // Kalyani change: removed if and added a new line
					if(s.templtv) s.linkTrackVars=s.templtv;
					if(s.templte)s.linkTrackEvents=s.templte;
				}
					
			},
			trackTabChange:function(event,ui){
				pageName = $(ui.tab).attr('clicktrack');
				s.pageName = pageName;
				s.t();
			},
			submitPageLoad:function(){
				
				
			},
			pageLevelSetup:function(){
				$('meta[name^="eBiz"]').each(function(){
					window[$(this).attr('name')] = $(this).attr('value'); 
				});
			}
		},
		/**
		 * Module for managing tracking pixels, dart tags, and more!
		 *
		 * @class
		 */
		advertising:{},
		/**
		 * Module containing basic utility functions for use at CenturyLink
		 *
		 * @class
		 */
		utility:{
		    preload: function() {
				var images = [];
				for (i = 0; i < arguments.length; i++) {
					images[i] = new Image();
					images[i].src = arguments[i];
				}
			},
			center:function (element) {
				element.css("position","absolute");
				element.css("top", (($(window).height() - element.outerHeight()) / 2) + $(window).scrollTop() + "px");
				element.css("left", (($(window).width() - element.outerWidth()) / 2) + $(window).scrollLeft() + "px");
				return element;
			},
			getLinkById:function(id,customerType){
				modalTypes = ['mam','ctam','zam'];
				var link = null;
				$(modalTypes).each(function(){
					if(link == null) {
						if(typeof customerType != 'undefined' && typeof linkMatrix[this][id] != 'undefined' &&typeof linkMatrix[this][id][customerType] != 'undefined') {
							link = (linkMatrix[this][id][customerType] != 'undefined')?linkMatrix[this][id][customerType]:null;
						} else {
							link = (typeof linkMatrix[this][id] != 'undefined')?linkMatrix[this][id]:null;
						}
					}
				});
				return link;
			},
			getLinkEndpointById:function(id,company,customerType){
				var linkData = q.utility.getLinkById(id,customerType);
				if(linkData[company] != null) {
					return linkData[company];
				} else {
					throw 'LinkNotFoundInMatrix';
				}
			},
			getLinkTopicNameById: function(id) {
				var linkData = $.centurycore.utility.getLinkById(id,'EC');
				if(typeof linkData['topicName'] != 'undefined' && linkData['topicName'] != null) {
					return linkData['topicName'];
				} else {
					throw 'LinkDoesNotContainTopicName:'+id;
				}
			},
			getLinkTypeById:function(id,company,customerType){
				var linkData = q.utility.getLinkById(id,customerType);
				if(linkData.type != null) {
					return linkData.type;
				} else {
					return false
				}
			},
			addUrlParameter: function(currUrl, param, paramVal){
				var url = currUrl
				var newAdditionalURL = "";
				var tempArray = url.split("?");
				var baseURL = tempArray[0];
				var aditionalURL = tempArray[1]; 
				var temp = "";
				if(aditionalURL)
				{
					var tempArray = aditionalURL.split("&");
					for ( i=0; i<tempArray.length; i++ ){
						if( tempArray[i].split('=')[0] != param ){
							newAdditionalURL += temp+tempArray[i];
							temp = "&";
						}
					}
				}	
				var rows_txt = temp+""+param+"="+paramVal;
				var finalURL = baseURL+"?"+newAdditionalURL+rows_txt;
				return finalURL;
			}
		},
		welcomeobject: {
			options: {},
			defaults: { maLoginForm: 'wo_myaccount-login', maLoginButton: 'hp-wo-submit', maUserNameField: 'hp-wo-username', maPasswordField: 'hp-wo-password', maRememberMeField: 'hp-wo-remember-me' },
			initialize: function(options) {
				$.extend(this.options, this.defaults);
				$.extend(this.options, options);

				if(!document.getElementById(qwo.options.maLoginForm))
				{
					return false;
				}

				document.getElementById(qwo.options.maLoginForm).onsubmit = function() { qwo.processSubmission(); };

				// Clear user-name on load
				document.getElementById(this.options.maUserNameField).value = '';
				document.getElementById(this.options.maUserNameField).onblur = function()
				{
					this.className = (this.value == '' ? '' : 'occupied' );
				};
				document.getElementById(this.options.maUserNameField).onclick = function()
				{
					this.className = 'occupied';
				};
				
				document.getElementById(this.options.maPasswordField).onblur = function()
				{
					this.className = (this.value == '' ? '' : 'occupied' );
				};
				document.getElementById(this.options.maPasswordField).onclick = function()
				{
					this.className = 'occupied';
				};

				var rememberedUser = subcookiejar.fetch('remember_me', 'userName');
				if(rememberedUser != null)
				{
					$('#hp-wo-username').val(rememberedUser);
					$('#hp-wo-password').focus();
					$('#hp-wo-remember-me').attr('checked', 'checked');
					$('#hp-wo-username').addClass('occupied');
				}
			},
			processSubmission: function()
			{
				// Force lower-case in user-name on form submission.
				document.getElementById(qwo.options.maUserNameField).value = document.getElementById(qwo.options.maUserNameField).value.toLowerCase();
				
				var user = $('#hp-wo-username').val();
				if(user != '') {
					var rememberMe;
					if($('#hp-wo-remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
					
					subcookiename='userName|'+user;
					if(rememberMe == 'Y'){cookiejar.bake('remember_me',subcookiename,30,"/","centurylink.com");}
					else{cookiejar.bake('remember_me',subcookiename,0,"/","centurylink.com");}
					}
				
				// Show interstitial and redirect if times out
				qm.showInterstitial('', function() { window.location.href = ctleam_url + '/eam/login.do' } );
				return true;
			}
		},
		thirdparty:{
			loadMtagConfig:function(){
				//LivePerson New Monitor Tag
				path = document.location.pathname;
				//look for if mtagconfig is defined
				if(typeof(lpExist) != "undefined" && typeof(lpExist) != null) {
					if(document.location.toString().indexOf("https:") == 0)
						var lpProtocol = "https";
					else {
						var lpProtocol = "http";
					}
				
					var lpNMT = false;
				} else if(path.indexOf("/smallbusiness/") != -1 && path.indexOf("/smallbusiness/orderonline/") == -1){
					var lpNMT = q_url+"/global/includes/c2c/smallbusiness/mtagconfig.js";
				} else if(path.indexOf("/smallbusiness/orderonline/") != -1){
					var lpNMT = q_url+"/global/includes/c2c/smallbusiness/voice-mtagconfig.js";
				} else if(path.indexOf("/pcat/") != -1){
					var lpNMT = q_url+"/global/includes/c2c/smallbusiness/mtagconfig.js";
				} else if(path.indexOf("/oneflex/") != -1){
					var lpNMT = q_url+"/global/includes/c2c/residential/mtagconfig.js";
				} else if(path.indexOf("/residential/movers/") != -1){
					var lpNMT = q_url+"/global/includes/c2c/residential/movers-mtagconfig.js";
				} else{
					var lpNMT = qshop_url+"/global/includes/c2c/residential/mtagconfig.js";
				};
				if(lpNMT) {
					var lpScriptTag = $('<script>');
					lpScriptTag.attr('type','text/javascript');
					lpScriptTag.attr('language','javascript');
					lpScriptTag.attr('src',lpNMT);
					$('head').append(lpScriptTag);
				}
			},
			createClickToChatButton:function(name, pid, targetContainer){
				// Write out button code
				var ctocButton = $('<div>');
				ctocButton.attr('id',pid);
				// Associate button name and skill
				
				if(typeof(lpMTagConfig.dynButton)!="undefined") {
					lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {'name':name,'pid':pid};
				}
				$(targetContainer).append(ctocButton);

			}
		},
		feedback:{
			/**
			 * Default Options:  
			 * triggerClass: defines the class on elements that will trigger a popup (defaults to 'feedback-trigger')
			 **/
			 defaults:{triggerClass:'.feedback-trigger'},
			/**
			 * Used by init to store the merged options and defaults associative arrays.  Provided options take precedence.
			 * 
			 * @field
			 */
			options:{},
			/**
			 * meant to run 'onLoad', this function finds all of the elements with 'triggerClass' class, and attaches event handlers in order to trigger the popups.
			 *
			 * @params {Object} options provided options to override default configurable settings.
			 */
			initialize:function(options){
				$('a.feedback-trigger').each(function(){
					$(this).click(function(){
						try{
							window.keynoteConnectorWindow='primary';
						}
						catch(e){}
						var pn;
						if (s.pageName)
							pn=s.pageName;
						else if ((typeof(s_pageName) !== 'undefined'))
							pn=s_pageName;
						else pn="Unknown";
						var url=q_url+'/global/popups/floatingFeedback.html?refpage='+pn;
						popup=window.open(url,'','resizable=yes,menubar=no,scrollbars=yes,toolbar=no,height=600,width=610,left=100,top=50');
						if(!popup.opener)popup.opener=window;
						if(popup)popup.focus();
						return false;
					});
					
				});
				
			},
			launchFeedback:function(){ 
				try
				{
					window.keynoteConnectorWindow='primary';
				}
				catch(e){}
				var pn;
				if (s.pageName)
					pn=s.pageName;
				else if ((typeof(s_pageName) !== 'undefined'))
					pn=s_pageName;
				else pn="Unknown";
				var url=q_url+'/global/popups/floatingFeedback.html?refpage='+pn;
				popup=window.open(url,'','resizable=yes,menubar=no,scrollbars=yes,toolbar=no,height=600,width=610,left=100,top=50');
				if(!popup.opener)popup.opener=window;
				if(popup)popup.focus();
			}
		},
		bannerRotator:{
			defaults: {
				identifier: '',
				containerId: 'banners',
				bannerBaseClass: 'banner',
				buttonContainerClass: 'banner-buttons',
				displayTime: 10000,
				displaySlideNum: true,
				displayBtnPlay: true
			},
			options:{},
			buttons:[],
			current:null,
			slides:[],
			timer:null,
			playerState: 0,
			container:null,
			userPaused:false,
			initialize: function(options)
			{
				$.extend(br.options, br.defaults);
				$.extend(br.options, options);
				br.container = $('#'+br.options.containerId);
				bannerClass = br.options.bannerBaseClass;
				if(br.options.identifier != '')
				{
					bannerClass = bannerClass + '-' + br.options.identifier;
				}
				var banners = $('#' + br.options.containerId + ' .'+bannerClass);
				$(banners).each(function()
					{
						$(this).mouseover(function(){if(!br.userPaused){br.pause}});
						$(this).mouseout(function(){if(!br.userPaused){br.play}});
						if(br.slides.length==0) { 
							br.current = this;
							$(this).show();
						} else {
							$(this).hide();
						}
						br.slides[br.slides.length] = this;
						br.addButton(this);
					}
				);

				if(br.options.displayBtnPlay)
				{
					playButton = $('<a>');
					playButton.attr('id', 'banner-toggle');
					playButton.attr('class', 'banner-button');
					playButton.css(
						{
							'background-image': 'url(/assets/images/templates/btn_play.gif)',
							'height': '25px',
							'width': '20px',
							'cursor': 'pointer'
						}
					);
					playButton.click(br.toggleRotatorState);
					br.buttons[br.buttons.length] = playButton;
					$('.' + br.options.buttonContainerClass).append(playButton);
				}

				$('#banner-1').addClass('current');
				br.play();
			},
			addButton: function()
			{
				var newButton = $('<a>');
				newButton.attr('id', 'banner-' + br.slides.length);
				newButton.attr('href', '#');
				newButton.attr('class', 'banner-button');
				newButton.click(br.gotoSlide);
				if(br.options.displaySlideNum)
				{
					newButton.text(br.slides.length);
				}
				
				br.buttons[br.buttons.length] = newButton;
				$('.' + br.options.buttonContainerClass).append(newButton);
			},
			addPrevNext: function()
			{
				var btnPrev = document.createElement('a');
				btnPrev.id = 'btnBannerPrev';
				btnPrev.className = 'btnBannerPrevNext';
		
				btnPrev.onclick = function(e)
				{
					br.previousSlide();
					br.pause();
					return false;
				};
		
				br.container.append(btnPrev);
		
				var btnNext = document.createElement('a');
				btnNext.id = 'btnBannerNext';
				btnNext.className = 'btnBannerPrevNext';
		
				btnNext.onclick = function(e)
				{
					br.nextSlide();
					br.pause();
					return false;
				};
		
				br.container.append(btnNext);

				return null;
			},
			gotoSlide:function(e)
			{
				e.preventDefault();
				if(br.options.displayBtnPlay)
				{
					$('#banner-toggle').css('background-image','url(/assets/images/templates/btn_pause.gif)');
				}
				br.userPaused = true;
				br.pause();
				id = $(this).attr('id').substring($(this).attr('id').indexOf('-')+1,$(this).attr('id').length)-1;
				$('.banner-button.current').removeClass('current');
				$(this).addClass('current');
				oldSlide = br.current;
				br.current = br.slides[id];
				if(oldSlide != br.current) {
					$(oldSlide).fadeOut($(br.current).fadeIn());
				}
			},
			nextSlide:function()
			{
				var currentPosition = jQuery.inArray(br.current,$(br.slides));
				var nextPosition = currentPosition + 1;
				$('.banner-button.current').removeClass('current');
				var oldSlide = br.current;
				if(nextPosition <= br.slides.length - 1) {
					br.current = br.slides[nextPosition];
					$('#banner-'+(nextPosition+1)).addClass('current');
				} else {
					br.current = br.slides[0];
					$('#banner-1').addClass('current');
				}
				$(oldSlide).fadeOut($(br.current).fadeIn());
			},
			previousSlide:function()
			{
				var currentPosition = jQuery.inArray(br.current,$(br.slides));
				var nextPosition = currentPosition - 1;
				$('.banner-button.current').removeClass('current');
				$(br.current).hide();
				if(nextPosition >= 0) {
					br.current = br.slides[nextPosition];
					$('#banner-'+(nextPosition+1)).addClass('current');
				} else {
					$('#banner-' + (br.slides.length)).addClass('current');
					br.current = br.slides[br.slides.length - 1];
				}
				$(br.current).show();
			},
			play:function(){
				clearInterval(br.timer);
				br.timer = window.setInterval(br.nextSlide, br.options.displayTime);
				br.playerState = 1;
			},
			pause:function(){
				clearInterval(br.timer);
				br.playerState = 0;
			},
			toggleRotatorState:function(){
				br.playerState = (br.playerState)?0:1;
				if(br.playerState) {
					if(br.options.displayBtnPlay)
					{
						$('#banner-toggle').css('background-image','url(/assets/images/templates/btn_play.gif)');
					}
					br.userPaused = false;
					br.play();
				} else {
					if(br.options.displayBtnPlay)
					{
						$('#banner-toggle').css('background-image','url(/assets/images/templates/btn_pause.gif)');
					}
					br.userPaused = true;
					br.pause();
				}
			}
		}
	}
})(jQuery);

function trackClick(qLinkName) {
	$.centurycore.analytics.trackAction(qLinkName)
}

function track6(qLinkName) {
	$.centurycore.analytics.trackAction(qLinkName)
}

function trackClickWithImpressions(qLinkName) {
	$.centurycore.analytics.trackAction(qLinkName, true)
}
