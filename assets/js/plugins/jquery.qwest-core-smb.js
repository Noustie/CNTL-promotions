(
/**
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
		redirectSuccessfulAuth : function(domain, modalType, redirId, customerType) {
			var target = '';
			var useJumpPage = '';
			var jumpTarget  = '';
			
			$.centurycore.modals.ignorePreviousAuthData = false;
			
			if($.centurycore.modals.loopback) {
				$.centurycore.modals.loopback = false;
				location.reload(true);
				return true;
			}
			
			if(domain == 'UNKNOWN' || domain == 'OOR' || typeof domain == 'undefined' || domain == '') {				
				if(modalType == "zam") {					
					$('#zam-modal').jqmShow();
					$('#zam-initial').hide();
					$('#interstitial').hide();
					$('#captionForZamModals').html("Try Again");
					$('#zam_oor').show();					
				} else {
					$('#ctam_modal').jqmShow();
					$('#ctam_initial').hide();
					$('#interstitial').hide();
					$('#captionForCtamModals').html("Try Again");
					$('#ctam_oor').show();
				}				
				return;
			}
			
			//if redirect id is missing, set the target to the same url from where user is coming from
			
				
			if(redirId == "") {
				target = qshop_url + document.location.pathname;
				var subcookie = {redirectTarget:target};
				$.centurycore.modals.options.cookieJar.bake('profile_cookie',subcookie,0,"/","centurylink.com");
				window.location = generalUrls['smb'][domain];
			}
			var tcatNW=false;
			if($.centurycore.utility.getLinkTypeById(redirId,domain,customerType) == 'TCAT|newwindow'){
				tcatNW=true;
			}
			if($.centurycore.utility.getLinkTypeById(redirId,domain,customerType) == 'popup') {
				window.open($.centurycore.utility.getLinkEndpointById(redirId,domain,customerType),'popup','scrollbars=yes,height=500,width=420');
				$('#interstitial').hide();
				$('#zam-modal').jqmHide();
				return false;
			} else if(q.utility.getLinkTypeById(redirId,domain,customerType) == 'newwindow'){
				window.open($.centurycore.utility.getLinkEndpointById(redirId,domain,customerType),'_blank');
				$('#interstitial').hide();
				$('#zam-modal').jqmHide();
				return false;
			}
			
				
			if(typeof customerType == 'undefined') {
				target = $.centurycore.utility.getLinkEndpointById(redirId,domain,customerType);
				
				if(($.centurycore.utility.getLinkTypeById(redirId,domain,customerType) == 'TCATSMB' || tcatNW==true) && domain == "$.centurycore") {
					useJumpPage = true;
					jumpTarget = generalUrls['smb'][domain];
				}
			} else {
				target = $.centurycore.utility.getLinkEndpointById(redirId,domain,customerType);
				if(($.centurycore.utility.getLinkTypeById(redirId,domain,customerType) == 'TCATSMB' || tcatNW==true) && domain == "Q") {
					useJumpPage = true;
					jumpTarget = generalUrls['smb'][domain];
				} else if($.centurycore.utility.getLinkTypeById(redirId,domain,customerType) == 'TCATSMB' && domain == "CTL") {
					var rememberMeCookie = subcookiejar.fetch('remember_me');
					if(rememberMeCookie && rememberMeCookie.hsiSpeed) {
						useJumpPage = false;
					} else {
						useJumpPage = true;
						jumpTarget = generalUrls['smb'][domain];
					}
				}
			}
			//alert("jumptarget: "+jumpTarget+" redirId: "+redirId+" target: "+target);
			if(target != '#NOREDIRECT') {
				var subcookie = {redirectTarget:target};
				$.centurycore.modals.options.cookieJar.bake('profile_cookie',subcookie,0,"/","centurylink.com");
			} else {
				target = qshop_url + document.location.pathname;
			}
		
			if(useJumpPage) {	
				if(tcatNW){
					$('#interstitial').hide();
					$('#zam-modal').jqmHide();
					window.open(jumpTarget,'_blank');
					return false;
				}else{					
					window.location = jumpTarget;
				}
			} else {				
				if(target == '#SEARCH') {
					if(domain == 'Q'){
						$('#search-site').val('ThunderCatProducts');
					} else if (domain == 'CTL') {
						$('#search-site').val('ctl');		
					}
					$('#searchTextId').val($('#tpl_search-input').val());
					$('#siteSearch').attr('action', search);
					$('#siteSearch').submit();
					return;
				} else if(target == '#OOR') {
					$('.modal .page').hide();
					$('#' + modalType + '_oor').show();
					$('#interstitial').hide();
				} else if (target == '#UNAVAILABLE') {
					$('#' + modalType + '-modal').jqmHide();
					$('#unavailable-modal').jqmShow();
					$('#unavailable-modal').jqmAddClose($('.upm_close'));
					$('#interstitial').hide();
				} else {
					if(tcatNW){
						$('#interstitial').hide();
						$('#zam-modal').jqmHide();
						window.open(target,'_blank');
						return false;
					}else{					
						$('#interstitial').show();
						window.location = target;
					}
					
				}
			}
		},
		/**
		 * Modals module for the centurycore library.
		 *
		 *@class
		 */
		modals: {						
			resetSelectors:function() {
				$('input[name="ctam_company-selector-radio"],input[name="mam_company-selector-radio"]').each(function() {$(this).attr('checked',false);})
			},
			destroyAuthorization:function(){
				cookiejar.crumble('profile_cookie');
				cookiejar.crumble('remember_me');
				$.centurycore.modals.ignorePreviousAuthData = true;
			},
			determineCompanyByZipCode: function(zip){
				
				getProfileFromZip(zip,'Y',function(data){
					
					$.centurycore.modals.latestResponse = data;
					
					if(data.shoppingDomain != '') {
						return data.shoppingDomain;
					} else {
						return false;
					}
				});
				
			},
			getBestDataSource: function(){
				if($.centurycore.modals.latestResponse != null) {
					data = $.centurycore.modals.latestResponse;
				} else {
					data = $.centurycore.modals.options.cookieJar.fetch('profile_cookie');
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
				chctam : '#chctam_modal',
				targetRedirect : '#targetRedirect',
				requestor:'TCATSMB',
				serviceDomain:'http://webdmzqa3.centurylink.com'
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
				var dataSource = $.centurycore.modals.getBestDataSource();
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
					$('.auth-switch-chctam').each(function(){
						$(this).attr("href","#CHCTAM");
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
				//Change CTAM internal Content Setup
				this.chctam.initialize();
				//UPM internal Content Setup
				this.upm.initialize();
				
				//Mass Form setup.  This is what makes the enter key work. commenting not required ones.
				$.centurycore.overrideSubmit('#ctam_nc-form','#ctam_nc-go');
				//$.centurycore.overrideSubmit('#ctam_nc-overlap-form','#ctam_nc-overlap-go');
				$.centurycore.overrideSubmit('#ctam_ec-phone-or-account','#ctam_ec-go');
				//$.centurycore.overrideSubmit('#ctam-mya-zip','#ctam_ec-zip-auth-go');
				//$.centurycore.overrideSubmit('.ctam-myaccount-form','#ctam_ec-go');
				//$.centurycore.overrideSubmit('#ctam-oor-form','#ctam_oor-go');
				//$.centurycore.overrideSubmit('#mam_ec_form-zipentry','#mam_ec-zip-auth-go');
				//$.centurycore.overrideSubmit('#mam-oor-form','#mam_oor-go');
				//$.centurycore.overrideSubmit('.myaccount-form','#mam_ec-go');
				
				initializeLocator(this.options.requestor,this.options.serviceDomain);
				SORRY_URL=qshop_url+"/MasterWebPortal/qCmsRepository/FreeRange/SmallBusiness/callToAction/smbSorry.vm";
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
				
				$.centurycore.modals.resetSelectors();
				dataSource = $.centurycore.modals.getBestDataSource();
				
				
				rememberMe = subcookiejar.fetch('remember_me');
				switch(modalType){
					case '#ZAM':
						if(dataSource.shoppingDomain && !$.centurycore.modals.ignorePreviousAuthData) {									
							if(dataSource.specialFlags && data.specialFlags!='' && data.specialFlags!='undefined' && data.specialFlags.toString().indexOf("shopClec") != -1)  {
														var finalUrl = q_url+"/small-business/CLEC/";											
														window.location = finalUrl;
														break;
							}
							$.centurycore.redirectSuccessfulAuth(dataSource.shoppingDomain,'zam',originId);
						} else {
							s.manageVars('clearVars');
							s.pageName = "ctl|smb|zam";
							s.channel = s.eVar41 = "Small Business";
							s.prop24=s.eVar53="ctl|smb|zam";
							s.prop25=s.eVar54="ctl|smb|zam";
							s.prop26=s.eVar55="ctl|smb|zam";
							s.prop27="ctl|smb|zam";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="zam_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop51=s.eVar51="locator|smb_zam"; // Registry Method 
							s.events="event45";
							s.t();
							$($.centurycore.modals.options.zam).jqmShow();
							$($.centurycore.modals.options.zam).jqmAddClose($('.zam_close'));						
							$($.centurycore.modals.options.zam + ' ' + $.centurycore.modals.zam.options.targetRedirect).val(originId);
						};
						break;
					case '#CTAM':
						if(dataSource.shoppingDomain && $.centurycore.modals.options.cookieJar.fetch('customerType','customerType') != null && !$.centurycore.modals.ignorePreviousAuthData) {
							if($.centurycore.modals.options.cookieJar.fetch('customerType','customerType') == 'NC') {
								var customerType = 'NC';
							} else if ($.centurycore.modals.options.cookieJar.fetch('customerType','customerType') == 'EC') {
								var customerType = 'EC';
							}
							if(dataSource.specialFlags && data.specialFlags!='' && data.specialFlags!='undefined' && data.specialFlags.toString().indexOf("shopClec") != -1)  {
								var finalUrl = q_url+"/small-business/CLEC/";											
								window.location = finalUrl;
								break;
							}							
							$.centurycore.redirectSuccessfulAuth(dataSource.shoppingDomain,'ctam',originId,customerType);
						} else if (rememberMe && rememberMe.telephoneNumber) {											
							$('input[id=ctam_ec-phone-or-account]').val(rememberMe.telephoneNumber); 
							$('#ctam_ec-phone-remember-me').attr('checked', true); 
							$.centurycore.modals.ctam.authExistingByPhoneOrAccount();
						} else if (rememberMe && rememberMe.streetAddress1) {
							$('input[id=ctam_nc-address]').val(rememberMe.streetAddress1); 
							$('input[id=ctam_nc-unit-type]').val(rememberMe.unitType);
							$('input[id=ctam_nc-unit-number]').val(rememberMe.unitNumber);
							$('input[id=ctam_nc-city]').val(rememberMe.city);
							$('input[id=ctam_nc-state]').val(rememberMe.state);
							$('input[id=ctam_nc-zip]').val(rememberMe.zipCode);
							$('#ctam_nc-address-remember-me').attr('checked', true); 
							$.centurycore.modals.ctam.authenticateNewCustomer();
						} 
						else {							 
							s.manageVars("clearVars");
							s.pageName = "ctl|smb|ctam";
							s.channel = s.eVar41 = "Small Business";
							s.prop24=s.eVar53="ctl|smb|ctam";
							s.prop25=s.eVar54="ctl|smb|ctam";
							s.prop26=s.eVar55="ctl|smb|ctam";
							s.prop27="ctl|smb|ctam";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="ctam_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method 
							s.events="event45";
							s.t();
							
							if(existingCustomer){$.centurycore.modals.ctam.options.mode = 'existing'};
							$($.centurycore.modals.options.ctam).jqmShow();													
							$($.centurycore.modals.options.ctam).jqmAddClose($('.ctam_close'));
							$($.centurycore.modals.options.ctam + ' ' + $.centurycore.modals.ctam.options.targetRedirect).val(originId);
							if($.centurycore.modals.ctam.options.mode == 'existing') {
								$.centurycore.modals.ctam.showExistingCustomerAuth();
								$.centurycore.modals.ctam.options.mode = 'new';
							} else {
								//$.centurycore.modals.ctam.showNewCustomerAuth();
							}
						}
						break;
					case '#CHCTAM':				
							s.manageVars("clearVars");
							s.pageName = "ctl|smb|ctam";
							s.channel = s.eVar41 = "Small Business";
							s.prop24=s.eVar53="ctl|smb|ctam";
							s.prop25=s.eVar54="ctl|smb|ctam";
							s.prop26=s.eVar55="ctl|smb|ctam";
							s.prop27="ctl|smb|ctam";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="ctam_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method 
							s.events="event45";
							s.t();
							if(existingCustomer){$.centurycore.modals.chctam.options.mode = 'existing'};
							
							var rememberMe = subcookiejar.fetch('remember_me');
							
							if(rememberMe && rememberMe.telephoneNumber) {								
								var ph = rememberMe.telephoneNumber;
								var ph_str = "Business Telephone Number: "+ph.substring(0,3)+'-'+ph.substring(3,6)+'-'+ph.substring(6,10);	
								$('#chctam_ch_prf_ph_info').html(ph_str);								
								$('input[id=chctam_ec-phone-or-account]').val(ph); 
								$.centurycore.modals.chctam.showExistingCustomerChange();
							} else if(rememberMe && rememberMe.streetAddress1) {								
								var addr_str = "Address: "+rememberMe.streetAddress1+'<br/>'+rememberMe.city+' '+rememberMe.state+' '+rememberMe.zipCode;
								$('#chctam_ch_prf_addr_info').html(addr_str);								
								$.centurycore.modals.chctam.showNewCustomerChange();
							} else {
								$.centurycore.modals.chctam.showNewCustomerChange();
							}
						    
							
							$($.centurycore.modals.options.chctam).jqmShow();													
							$($.centurycore.modals.options.chctam).jqmAddClose($('.ctam_close'));
							$($.centurycore.modals.options.chctam + ' ' + $.centurycore.modals.ctam.options.targetRedirect).val(originId);
							if($.centurycore.modals.chctam.options.mode == 'existing') {
								$.centurycore.modals.chctam.showExistingCustomerAuth();
								$.centurycore.modals.chctam.options.mode = 'new';
							} else {
							//	$.centurycore.modals.chctam.showNewCustomerChange();
							}					
						break;
					case '#MAM':
						//Omniture hooks
						//TODO: Remove this during refactor to place it in analytics module.
						s.manageVars("clearVars");
						s.pageName = "ctl|smb|mam";
						s.channel = s.eVar41 = "Small Business";
						s.prop24=s.eVar53="ctl|smb|mam";
						s.prop25=s.eVar54="ctl|smb|mam";
						s.prop26=s.eVar55="ctl|smb|mam";
						s.prop27="ctl|smb|mam";
						s.prop38=s.eVar48="modal";
						s.prop39=s.eVar49="mam_modal";
						s.prop52=s.eVar56="ctl";
						s.prop3=s.eVar24="unknown";
						s.prop51=s.eVar51="locator|smb_mam";
						s.events="event45";
						s.t();
						$($.centurycore.modals.options.mam).jqmShow();
						$($.centurycore.modals.options.mam).jqmAddClose($('.mam_close'));
						$($.centurycore.modals.options.mam + ' ' + $.centurycore.modals.mam.options.targetRedirect).val(originId);
						break;
					case '#LINK':
						var domain = 'Q';
						if(dataSource.shoppingDomain && dataSource.shoppingDomain == "CTL") {
							domain = dataSource.shoppingDomain;
						} 
						var target = $.centurycore.utility.getLinkEndpointById(originId,domain,customerType);
						window.location = target;
						//$.centurycore.redirectSuccessfulAuth(dataSource.shoppingDomain,'ctam',originId);					
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
					$('#zam-form').submit($.centurycore.modals.zam.authenticateByZip);
					$('#zam_oor-go').click($.centurycore.modals.zam.handleOor);
					$('#zam_overlap-go').click($.centurycore.modals.zam.overlapRedirect);
					$('#zam_zip-reset').click($.centurycore.modals.zam.resetZip);
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
					if(zip != '' && zip.length == 5) {
						$('#interstitial').show();
						getProfileFromZip(zip,'Y',$.centurycore.modals.zam.profile);
					} else if (zip.length < 5 && zip.length > 0) {
						s.prop3=s.eVar24="unknown";
						s.prop4=s.eVar28="smb_zam - A zip code must contain 5 digits";
						s.events="event34";
						s.eVar60="smb_zam:" + zip; // Registry Type Detail
						s.prop51=s.eVar51="locator|smb_zam"; // Registry Method
						s.t();
						$('#zam-error-zip-length').show();
					} else {
						s.prop3=s.eVar24="unknown";
						s.prop4=s.eVar28="smb_zam  - You must enter a zip code";
						s.events="event34";
						s.eVar60="smb_zam:" + zip; // Registry Type Detail
						s.prop51=s.eVar51="locator|smb_zam"; // Registry Method
						s.t();
						$('#zam-error-zip-required').show();
					}
					return false;
				},
				handleOor:function(){
					$('#zam-initial').show();
					$('#interstitial').hide();
					$('#captionForZamModals').html("CustomerInfo");
					$('#zam_oor').hide();
					return;
				},
				/**
				 * Parses the return value of the locator service call, and creates the profile cookie, while allowing the  to continue.
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
						s.prop3=s.eVar24="unknown";
						s.prop4=s.eVar28="locator - registry - smb_zam - [UNEXPECTED] - [n/a]";
						s.events="event34";
						s.eVar60="smb_zam:" + data.zipForFive; // Registry Type Detail
						s.prop51=s.eVar51="locator|smb_zam"; // Registry Method
						s.t();
					} else if(data.errorCode == 'INVALID_VALUE' && data.errorMessage == 'zipCode') {
						$('#zip-error').show();
						$('#interstitial').hide();
						s.prop3=s.eVar24="unknown";
						s.prop4=s.eVar28="smb_zam  - " + data.errorMessage + " - " + $('#zip-error').text();
						s.events="event34";
						s.eVar60="smb_zam:" + data.zipForFive; // Registry Type Detail
						s.prop51=s.eVar51="locator|smb_zam"; // Registry Method
						s.t();
					} else if (data.domainOverlap == 'Y' && profileData.shoppingDomainOverride == null) {
						$('#zam_zip').hide();
						$('#zam_stored-zip').text(data.zipForFive);
						$('#zam_zip-on-file').show();
						$('#zam_company-selector').show();
						$('#zam-error-overlap').show();
						$('#interstitial').hide();
					} else if (data.domainOverlap == 'Y' && profileData.shoppingDomainOverride != null) {
						$.centurycore.modals.zam.overlapRedirect(profileData.shoppingDomainOverride);
					} else if(data.shoppingDomain == 'OOR') {
						$('#zip-error').hide();
						$('#zam-initial').hide();
						$('#interstitial').hide();
						$('#captionForZamModals').html("Try Again");
						$('#zam_oor').show();
					} else if(data.shoppingDomain == 'UNKNOWN' || data.shoppingDomain == '') {
						$('#interstitial').hide();
						$('#zam-error-zip-oor').show();
					} else {
						$('#zip-error').hide();
						s.manageVars('clearVars');
						s.prop3=s.eVar24='unknown';
						s.prop51=s.eVar51="locator|smb_zam"; // Registry Method
						s.eVar60="smb_zam:" + data.zipForFive; // Registry Type Detail
						s.events="event46";
						s.t();
						switch(data.shoppingDomain) {
								case 'Q':	$.centurycore.redirectSuccessfulAuth(data.shoppingDomain,'zam',$($.centurycore.modals.options.zam + ' ' + $.centurycore.modals.zam.options.targetRedirect).val());
											break;
											
								case 'CTL': if(data.specialFlags && data.specialFlags!='' && data.specialFlags!='undefined' && data.specialFlags.toString().indexOf("shopClec") != -1)  {
												var finalUrl = q_url+"/small-business/CLEC/";											
												window.location = finalUrl;
												
											} else {
											    $.centurycore.redirectSuccessfulAuth(data.shoppingDomain,'zam',$($.centurycore.modals.options.zam + ' ' + $.centurycore.modals.zam.options.targetRedirect).val());
											}
											break;
						}
						
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
					$.centurycore.redirectSuccessfulAuth(selectedDomain,'zam',$($.centurycore.modals.options.zam + ' ' + $.centurycore.modals.zam.options.targetRedirect).val());
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
					$('#ctam_nc-go').click($.centurycore.modals.ctam.authenticateNewCustomer);
					//Existing customer submit button
					$('#ctam_ec-go').click($.centurycore.modals.ctam.authenticateExistingCustomer);
					//toggle display of new customer content in modal block
					$('#ctam_current-customer-link').live('click', $.centurycore.modals.ctam.showExistingCustomerAuth);
					//toggle display of new customer content in modal block
					$('#ctam_new-customer-link').live('click', $.centurycore.modals.ctam.showNewCustomerAuth);
					//Action for the change zip link
					$('#ctam_ec-zip-reset').click($.centurycore.modals.ctam.resetZipPreAuth);
					//PreAuth zip action
					$('#ctam_ec-zip-auth-go').click($.centurycore.modals.ctam.preAuthByZip);
										
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
					
					$('#ctam_nc-form').submit($.centurycore.modals.ctam.authenticateExistingCustomer);

					$('#ctam_oor-go').click($.centurycore.modals.ctam.handleOor);
					$('input[name="ctam_company-selector-radio"]').change(function(){
						var profileData = subcookiejar.fetch('profile_cookie');
						if(profileData == null) {
								profileData = {};
							}
						profileData.shoppingDomainOverride = $(this).val();
						subcookiejar.bake('profile_cookie',profileData,0,"/","centurylink.com");
						$.centurycore.modals.ctam.showMyAccountAuth($(this).val());
					});
					
					$('#ctam_nc-overlap-go').click(function(){
						$.centurycore.modals.ctam.ncOverlapRedirect($('input[name=ctam_nc-company-selector-radio]:checked').val());
					});
				},
				authenticateNewCustomer:function(){
					try{
					$.centurycore.clearErrors();
					}catch(e){}
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
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam|address - A street address is required";
							s.events="event34";
							s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
							s.t();
							$('#ctam-error-street-required').show();
						}
						
						if(city == '') {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam|address - A city is required";
							s.events="event34";
							s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
							s.t();
							$('#ctam-error-city-required').show();
						}
						
						if(state == '') {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam|address - A state is required";
							s.events="event34";
							s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
							s.t();
							$('#ctam-error-state-required').show();
						}
						
						if(zip == '') {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam|address - Please enter a valid zip code";
							s.events="event34";
							s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
							s.t();
							$('#ctam-error-zip-required').show();
						} else if (zip.length > 0 && zip.length < 5) {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam|address - Please enter a valid zip code";
							s.events="event34";
							s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
							s.t();
							$('#ctam-error-zip-length').show();
						}
						return;
					}
					$('#interstitial').show();
					
					getProfileFromAddress(street, unit, unitNumber, city, state, zip, rememberMe, function(data){
						$.centurycore.modals.latestResponse = data;
						/*if(data.domainOverlap == 'Y') {
							$('#ctam_nc-form-container').hide();
							$('#ctam_nc-overlap').show();
							$('#ctam_nc-company-selector').show();
							$('#interstitial').hide();
							return;
						}*/
						
						if(data.addressRequestValid) {
							setOmnitureRegistryCookie('smb_ctam', 'address', street+" "+unit+" "+unitNumber+" "+city+" "+state+" "+zip);
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'NC';
							subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
							switch(data.shoppingDomain) {
								case 'Q': 
										var currentUrl = location.href.toString();
										if(currentUrl.indexOf("CLEC/")!=-1){
											var finalUrl = q_url+"/small-business/";
											window.location = finalUrl;
											
										}else{
											$.centurycore.redirectSuccessfulAuth(data.shoppingDomain,'ctam',$($.centurycore.modals.options.ctam + ' ' + $.centurycore.modals.ctam.options.targetRedirect).val(),'NC');
											
										}
										break;
								case 'CTL': if(data.specialFlags && data.specialFlags!='' && data.specialFlags!='undefined' && data.specialFlags.toString().indexOf("shopClec") != -1) {
												var finalUrl = q_url+"/small-business/CLEC/";	
                                                window.location = finalUrl;
												break;
											} else {
											
										$.centurycore.redirectSuccessfulAuth(data.shoppingDomain,'ctam',$($.centurycore.modals.options.ctam + ' ' + $.centurycore.modals.ctam.options.targetRedirect).val(),'NC');
									}
									break;
								default:
									$('#ctam_initial').hide();
									$('#interstitial').hide();
									$('#captionForCtamModals').html("Try Again");
									$('#ctam_oor').show();
									s.manageVars("clearVars");
									s.pageName = "ctl|smb|oorm";
									s.channel = s.eVar41 = "Small Business";
									s.prop24=s.eVar53="ctl|smb|oorm";
									s.prop25=s.eVar54="ctl|smb|oormm";
									s.prop26=s.eVar55="ctl|smb|oorm";
									s.prop27="ctl|smb|oorm";
									s.prop38=s.eVar48="modal";
									s.prop39=s.eVar49="oor_modal";
									s.prop52=s.eVar56="ctl";
									s.prop3=s.eVar24='unknown';
									s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
									s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip;  // Registry Type Detail
									s.prop4=s.eVar28="smb_ctam|zip:CenturyLink service is not available at this time";
									s.events="event34";
									s.t();
							}
						}
					});
					return false;
				},
				authenticateExistingCustomer:function(){
					try{
					$.centurycore.clearErrors();
					}catch(e){}
					
					var radioVal=$('input[name="ec_login_type"]:checked').val();
						if(radioVal=='myaccount'){
							
							$.centurycore.modals.ctam.authExistingByMyAccount();
						}else{
							
							$.centurycore.modals.ctam.authExistingByPhoneOrAccount();
						}
				},
				authExistingByPhoneOrAccount:function(){
					var entry = $('#ctam_ec-phone-or-account').val();
					if(entry == '') {
						s.prop3=s.eVar24="unknown";
						s.prop4=s.eVar28="smb_ctam|tn - A phone or account number is required";
						s.events="event34";
						s.eVar60="smb_ctam:tn:" + entry; // Registry Type Detail
						s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
						s.t();
						$('#ctam-phonenumber-required-error').show();
						return;
					}
					
					$('#interstitial').show();
					var rememberMe;
					if($('#ctam_ec-phone-remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
					getProfileFromPhoneOrAccount(entry,rememberMe,function(data){					
						$.centurycore.modals.latestResponse = data;
						
						if(data.errorCode =="") {
							if(entry.length == 10){
								setOmnitureRegistryCookie('smb_ctam', 'tn', entry);
							}else{
								setOmnitureRegistryCookie('smb_ctam', 'ban', entry);
							}
							
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'EC';
							subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
							$.centurycore.redirectSuccessfulAuth(data.shoppingDomain,'ctam',$($.centurycore.modals.options.ctam + ' ' + $.centurycore.modals.ctam.options.targetRedirect).val(),'EC');
						} else {
							$('#ctam_initial').hide();	
							$('#captionForCtamModals').html("Try Again");
							$('#ctam_oor').show();
							$('#interstitial').hide();
						}
					});
					return false;
				},
				authExistingByMyAccount:function(){
					var user = ($('#ctam_qwest-ec-myaccount-username').val())?$('#ctam_qwest-ec-myaccount-username').val():$('#ctam_ctl-ec-myaccount-username').val();
					var password = ($('#ctam_qwest-ec-myaccount-password').val())?$('#ctam_qwest-ec-myaccount-password').val():$('#ctam_ctl-ec-myaccount-password').val();
					if(user == '' || password == '') {
						if(user == '') {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam - mya - [A username is required]";
							s.events="event34";
							s.eVar60="smb_zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_zam"; // Registry Method
							s.t();
							$('#ctam-username-required-error').show();
						}
						
						if(password == '') {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam - mya - [A password is required]";
							s.events="event34";
							s.eVar60="smb_zam:" + data.zipForFive; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_zam"; // Registry Method
							s.t();
							$('#ctam-password-required-error').show();
						}
						return;
					}
					$('#interstitial').show();
					dataSource = $.centurycore.modals.getBestDataSource();
					if(typeof dataSource.shoppingDomain != 'undefined') {
						subcookiejar.crumble('customerType');
						var customerData = subcookiejar.fetch('customerType');
						if(customerData == null) {
								customerData = {};
							}
						customerData.customerType = 'EC';
						subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
						$.centurycore.modals.options.cookieJar.bake('profile_cookie',{redirectTarget:$($.centurycore.modals.options.ctam + ' ' + $.centurycore.modals.ctam.options.targetRedirect).val()},0,"/","centurylink.com");
						switch(dataSource.shoppingDomain){
							case 'Q':
								if(typeof linkMatrix['ctam'][$('#ctam_target-redirect').val()]['EC']['Q'] != 'undefined') {
									var linkForRedirect = linkMatrix['ctam'][$('#ctam_target-redirect').val()]['EC']['Q'];
								} else {
									var linkForRedirect = linkMatrix['ctam'][$('#ctam_target-redirect').val()]['Q'];
								}
								$.centurycore.modals.options.cookieJar.bake('profile_cookie',{redirectTarget:linkForRedirect},0,"/","centurylink.com");
								var maForm = $('#qwest-ma-modal-login');
								maForm.attr('action',generalUrls['shop']['Q']);
								$('#qwest-ma-login-redirectUrl').val(linkForRedirect);
								maForm.submit();
								$.centurycore.modals.resetSelectors();
								$('#interstitial').show();
								break;
							case 'CTL':
								if(typeof linkMatrix['ctam'][$('#ctam_target-redirect').val()]['EC']['CTL'] != 'undefined') {
									var linkForRedirect = linkMatrix['ctam'][$('#ctam_target-redirect').val()]['EC']['CTL'];
								} else {
									var linkForRedirect = linkMatrix['ctam'][$('#ctam_target-redirect').val()]['CTL'];
								}
								$.centurycore.modals.options.cookieJar.bake('profile_cookie',{redirectTarget:linkForRedirect},0,"/","centurylink.com");
								var maForm = $('#ctl_ctam-ec-ma-form');
								maForm.attr('action',generalUrls['myaccount']['CTL']);
								
								maForm.submit();
								$.centurycore.modals.resetSelectors();
								$('#interstitial').show();
								break;
						}
					}			
					return false;
				},
				preAuthByZip:function(){
					try{
					$.centurycore.clearErrors();
					}catch(e){}
					
					var zip = $('#ctam_ec-zip-code').val();
					if(zip.length > 0 && zip.length < 5) {
						$('#ctam-error-zip-length').show();
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=s.eVar28="smb_ctam - mya - [Please enter a valid zip code]";
						s.events="event34";                                                                                                
						s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
						s.eVar60="smb_ctam:unpwd:*****"; // Registry Type Detail
						s.t();
					} else if(zip == '') {
						$('#ctam-error-zip-required').show();
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=s.eVar28="smb_ctam - mya - [Please enter a valid zip code]";
						s.events="event34";                                                                                                
						s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
						s.eVar60="smb_ctam:unpwd:*****"; // Registry Type Detail
						s.t();
					} else if(isNaN(zip)) {
						$('#ctam-error-zip-required').show();
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=s.eVar28="smb_ctam - mya - [Please enter a valid zip code]";
						s.events="event34";                                                                                                
						s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
						s.eVar60="smb_ctam:unpwd:*****"; // Registry Type Detail
						s.t();
					} else {
						var rememberMe;
						if($('#ctam_remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
						getProfileFromZip(zip,'Y',function(data){
							$.centurycore.modals.latestResponse = data;
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'NC';
							subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
							if(data.shoppingDomain == 'OOR') {
								$('#ctam-error-zip-unrecognized').show();
								s.prop3=s.eVar24="Existing Customer";
								s.prop4=s.eVar28="smb_ctam - mya - [Please enter a valid zip code]";
								s.events="event34";                                                                                                
								s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
								s.eVar60="smb_ctam:unpwd:*****"; // Registry Type Detail
								s.t();
							} else if(data.shoppingDomain != '') {
								s.manageVars('clearVars');
								s.prop3=s.eVar24='Existing Customer';
								s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
								s.eVar60="smb_ctam:zip:" + data.zipForFive; // Registry Type Detail
								s.events="event48";
								s.t();
								$('#ctam_ec-stored-zip').text($.centurycore.modals.latestResponse.zipForFive);
								$.centurycore.modals.ctam.showMyAccountAuth();
							};
						});
					}
					return false;
				},
				
				resetZipPreAuth:function(){
					subcookiejar.crumble('customerType');
					$('#ctam_ec-zip').show();
					$('#ctam_ec-zip-on-file').hide();
				//	$('#ctam_ec-myaccount').hide();
					$('#ctam_ec-submit-tools').hide();
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
					$('#ctam_ec-phonenum').show();
				//	$('#ctam_ec-myaccount').show();
					$('#ctam_ec-phonenum-radio').show();
					$('#ctam_ec-submit-tools').show();
				},
				showMyAccountAuth:function(domainOverride) {
					var dataSource = $.centurycore.modals.getBestDataSource();
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
					
					s.manageVars('clearVars');
					s.prop3=s.eVar24='unknown';
					s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method 
					s.events="event45";
					s.t();
					if((dataSource.zipCode == null || typeof dataSource.shoppingDomain == 'undefined') && typeof domainOverride == 'undefined') {
						$('#ctam_ec-zip').show();
						$('#ctam_ec-zip-on-file').hide();
						$('#ctam_ec-phonenum').hide();
					//	$('#ctam_ec-myaccount').hide();
						$('#ctam_ec-submit-tools').hide();
					} else {
						$('#ctam_ec-zip').hide();
						$('#ctam_ec-zip-on-file').show();
						$('#ctam_mya-instructions').show();
						/*if(typeof dataSource.domainOverlap != 'undefined' && dataSource.domainOverlap == "Y"  && typeof domainOverride == 'undefined') {
							$('#ctam_mya-instructions .select-company').show();
							$('#ctam_mya-instructions .enter-info').hide();
							$('#ctam_company-selector').show();
						} else {*/
							$('#ctam_mya-instructions .select-company').hide();
							$('#ctam_mya-instructions .enter-info').show();
						/*}*/
						$('#ctam_ec-phonenum').hide();
					//	$('#ctam_ec-myaccount').show();
						$('#ctam_ec-submit-tools').show();
						if(/*(typeof dataSource.domainOverlap == 'undefined' || dataSource.domainOverlap == "N") ||*/ typeof domainOverride == 'undefined'){
							switch(dataSource.shoppingDomain){
								case 'Q':
									//$('#ctl_ma-container').hide();
									//$('#qwest_ma-container').show();
									$('#ctam_company-selector-q').attr('checked','checked');
									$('#ctam_company-selector-ctl').attr('checked',false);
									break;
								case 'CTL':
									//$('#qwest_ma-container').hide();
								//	$('#ctl_ma-container').show();
									$('#ctam_company-selector-ctl').attr('checked','checked');
									$('#ctam_company-selector-q').attr('checked',false);
									break;
							}
						}
					}
					ctamEcMode = 'myaccount';
				},
				showPhoneOrAccountAuth:function(){
					s.manageVars('clearVars');
					s.prop3=s.eVar24="unknown";
					s.prop51=s.eVar51="locator|smb_ctam:phone-account" // Registry Method 
					s.events="event45"
					s.t();
					$('#ctam_ec-phonenum').show();
				//	$('#ctam_ec-myaccount').hide();
					$('#ctam_ec-zip').hide();
					$('#ctam_ec-zip-on-file').hide();
					$('#ctam_ec-submit-tools').show();
					ctamEcMode = 'phone';
				},
				handleOor:function(){
					//var option = $('#ctam_oor input[name="oor_options"]:checked').val();				
					$('#ctam_initial').show();
					$('#captionForCtamModals').html("Customer Info");
					$('#ctam_oor').hide();
					return;
				},
				ncOverlapRedirect: function(domainOverride){
					$('#interstitial').show();
					var selectedDomain = null;
					if(typeof domainOverride != 'undefined' && typeof domainOverride != 'object') {
						selectedDomain = domainOverride;
					} else {
						selectedDomain = $('input[name="ctam_nc-company-selector-radio"]:checked').val();
					}
					
					if(typeof selectedDomain != 'string') {
						$('.ctam_nc-instructions').removeClass('error-text');
						$('#ctam_nc-company-not-selected').show();
						return;
					}
					
					var profileData = subcookiejar.fetch('profile_cookie');
					if(profileData == null) {
								profileData = {};
							}
					profileData.shoppingDomainOverride = selectedDomain;
					subcookiejar.bake('profile_cookie',profileData,0,"/","centurylink.com");
					$.centurycore.redirectSuccessfulAuth(selectedDomain,'ctam',$($.centurycore.modals.options.ctam + ' ' + $.centurycore.modals.ctam.options.targetRedirect).val(),'NC');
				}
			},
			/**
			 * Customer Type Authentication Modal(Change CTAM) - Defines the behaviors and actions of the customer-type authentication modal used for qualifying customers based upon geographical location within our footprint, telephone or account number, or myaccount credentials.
			 *
			 * @class
			 */			
			 chctam:{
				defaults:{targetRedirect:'#chctam_target-redirect',mode:'new'},
				options:{},
				ctamEcMode:'phone',
				initialize:function(options){
					$.extend(this.options,this.defaults);
					$.extend(this.options,options);					
					
					if(dataSource.zipCode != 'undefined') {
						$('#chctam_ec-stored-zip').text(dataSource.zipCode);
					};
					//New customer submit button
					$('#chctam_nc-go').click($.centurycore.modals.chctam.authenticateNewCustomer);
					//Existing customer submit button
					$('#chctam_ec-go').click($.centurycore.modals.chctam.authenticateExistingCustomer);									
					
					//Show phone div
					$('#chcatm_show_ph').click($.centurycore.modals.chctam.showExistingCustomerChange);
					//Show address div
					$('#chctam_show_addr').click($.centurycore.modals.chctam.showNewCustomerChange);					
					
					if(subcookiejar.fetch('remember_me','zipCode') != null) {
						$('#chctam_ec-zip-code').val(subcookiejar.fetch('remember_me','zipCode'));
						$('#chctam_nc-zip').val(subcookiejar.fetch('remember_me','zipCode'));
						$('#chctam_nc-address').val(subcookiejar.fetch('remember_me','streetAddress1'));
						$('#chctam_nc-unit-number').val(subcookiejar.fetch('remember_me','unitNumber'));
						$('#chctam_nc-city').val(subcookiejar.fetch('remember_me','city'));
						$('#chctam_nc-state').val(subcookiejar.fetch('remember_me','state'));
						var unitType = subcookiejar.fetch('remember_me','unitType');
						if(unitType != "" && unitType == "UNT") {
							unitType = "UNIT";
						}
						$('#chctam_nc-unit-type').val(unitType);
					} else {
						$('#chctam_ec-zip-code').val('');
						$('#chctam_nc-zip').val('');
						$('#chctam_nc-address').val('');
						$('#chctam_nc-unit-number').val('');
						$('#chctam_nc-city').val('');
						$('#chctam_nc-state').val('');
						$('#chctam_nc-unit-type').val('');
					}
					
					//$('#qwest-ma-modal-login').submit($.centurycore.modals.ctam.authenticateExistingCustomer);
					//$('#ctl_ctam-ec-ma-form').submit($.centurycore.modals.ctam.authenticateExistingCustomer);
					$('#chctam_nc-form').submit($.centurycore.modals.ctam.authenticateExistingCustomer);
					//$('#ctam_ec-go').click($.centurycore.modals.ctam.authenticateExistingCustomer);
					$('#chctam_ec-phonenum-radio').click();
					$('#chctam_oor-go').click($.centurycore.modals.chctam.handleOor);				
					
					$('#chctam_nc-overlap-go').click(function(){
						$.centurycore.modals.chctam.ncOverlapRedirect($('input[name=chctam_nc-company-selector-radio]:checked').val());
					});
				},
				authenticateNewCustomer:function(){
					try{
					$.centurycore.clearErrors();
					}catch(e){}
					var street     = $('#chctam_nc-address').val();
					var unit       = $('#chctam_nc-unit-type').val();
					var unitNumber = $('#chctam_nc-unit-number').val();
					var city       = $('#chctam_nc-city').val();
					var state      = $('#chctam_nc-state').val();
					var zip        = $('#chctam_nc-zip').val();
					
					var rememberMe = 'N';
					if($('#chctam_nc-address-remember-me').is(':checked')) { rememberMe = 'Y';}
					
					if(street == '' || city == '' || state == '' || zip == '' || zip.length < 5) {
						if(street == '') {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam|address - A street address is required";
							s.events="event34";
							s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
							s.t();
							$('#chctam-error-street-required').show();
						}
						
						if(city == '') {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam|address - A city is required";
							s.events="event34";
							s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
							s.t();
							$('#chctam-error-city-required').show();
						}
						
						if(state == '') {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam|address - You must select a state";
							s.events="event34";
							s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
							s.t();
							$('#chctam-error-state-required').show();
						}
						
						if(zip == '') {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam|address - Please enter a valid zip code";
							s.events="event34";
							s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
							s.t();
							$('#chctam-error-zip-required').show();
						} else if (zip.length > 0 && zip.length < 5) {
							s.prop3=s.eVar24="unknown";
							s.prop4=s.eVar28="smb_ctam|address - Please enter a valid zip code";
							s.events="event34";
							s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
							s.t();
							$('#chctam-error-zip-length').show();
						}
						return;
					}
					$('#interstitial').show();
					
					getProfileFromAddress(street, unit, unitNumber, city, state, zip, rememberMe, function(data){
						$.centurycore.modals.latestResponse = data;
						/*if(data.domainOverlap == 'Y') {
							$('#ctam_nc-form-container').hide();
							$('#ctam_nc-overlap').show();
							$('#ctam_nc-company-selector').show();
							$('#interstitial').hide();
							return;
						}*/
						
						if(data.addressRequestValid) {
							setOmnitureRegistryCookie('smb_ctam', 'address', street+" "+unit+" "+unitNumber+" "+city+" "+state+" "+zip);
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'NC';
							subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
							switch(data.shoppingDomain) {
							    case 'Q': var currentUrl = location.href.toString();
									      if(currentUrl.indexOf("CLEC/")!=-1){
											 var finalUrl = q_url+"/small-business/";
											 window.location = finalUrl;
											}else{
												$.centurycore.modals.chctam.redirectSuccessfulAuth(data.shoppingDomain,'chctam',$($.centurycore.modals.options.chctam + ' ' + $.centurycore.modals.chctam.options.targetRedirect).val(),'NC');
											}
											break;
								case 'CTL': if(data.specialFlags && data.specialFlags !='' && data.specialFlags!='undefined' && data.specialFlags.toString().indexOf("shopClec") != -1)  {
												var finalUrl = q_url+"/small-business/CLEC/";											
												window.location = finalUrl;
												} else {
													var currentUrl = location.href.toString();			
													if(currentUrl.indexOf("CLEC/")!=-1){
														var finalUrl = ctl_url+"/smallbusiness/products/bundles/";
														window.location = finalUrl;														
													}											
													else{
														var postProdString = currentUrl.substring(currentUrl.indexOf("products/"),currentUrl.length);
														postProdString = postProdString.replace("products/", "");
														postProdString = postProdString.substring(0,postProdString.indexOf("/"));														
														var finalUrl = "";
														if(postProdString == "internet-data" || postProdString == "business-internet-data") {															
															postProdString = "business-internet-data";
															finalUrl = qshop_url+"/small-business/products/"+postProdString;
														} else {															
															if(postProdString == "http:" || postProdString == "https:") {
																finalUrl = qshop_url+"/small-business";
															} else {
																finalUrl = qshop_url+"/smallbusiness/products/"+postProdString;	
															}															
														}
														var subcookie = {redirectTarget:finalUrl};
														$.centurycore.modals.options.cookieJar.bake('profile_cookie',subcookie,0,"/","centurylink.com");
														jumpTarget = generalUrls['smb'][data.shoppingDomain];
														window.location = jumpTarget;														
													}									
											}
											break;
								default:
									$('#chctam_initial').hide();
									$('#interstitial').hide();
									$('#captionForChctamModals').html("Try Again");
									$('#chctam_oor').show();
									s.manageVars("clearVars");
									s.pageName = "ctl|smb|oorm";
									s.channel = s.eVar41 = "Small Business";
									s.prop24=s.eVar53="ctl|smb|oorm";
									s.prop25=s.eVar54="ctl|smb|oormm";
									s.prop26=s.eVar55="ctl|smb|oorm";
									s.prop27="ctl|smb|oorm";
									s.prop38=s.eVar48="modal";
									s.prop39=s.eVar49="oor_modal";
									s.prop52=s.eVar56="ctl";
									s.prop3=s.eVar24='unknown';
									s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
									s.eVar60="smb_ctam:address:" + street + unit + unitNumber + city + state + zip;  // Registry Type Detail
									s.prop4=s.eVar28="smb_ctam|zip:CenturyLink service is not available at this time";
									s.events="event34";
									s.t();
							}
						}
					});
					return false;
				},
				authenticateExistingCustomer:function(){
					try{
					$.centurycore.clearErrors();
					}catch(e){}			
					$.centurycore.modals.chctam.authExistingByPhoneOrAccount();
				},
				authExistingByPhoneOrAccount:function(){
					var entry = $('#chctam_ec-phone-or-account').val();
					if(entry == '') {
						s.prop3=s.eVar24="unknown";
						s.prop4=s.eVar28="smb_ctam|tn - A phone or account number is required";
						s.events="event34";
						s.eVar60="smb_ctam:tn:" + data.zipForFive; // Registry Type Detail
						s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
						s.t();
						$('#chctam-phonenumber-required-error').show();
						return;
					}
					
					$('#interstitial').show();
					var rememberMe;
					if($('#chctam_ec-phone-remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
					getProfileFromPhoneOrAccount(entry,rememberMe,function(data){
						$.centurycore.modals.latestResponse = data;					
						if(data.errorCode =="") {
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'EC';
							subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
							switch(data.shoppingDomain) {
								case 'Q': var currentUrl = location.href.toString();
									      if(currentUrl.indexOf("CLEC/")!=-1){
											 var finalUrl = q_url+"/small-business/";
											 window.location = finalUrl;
											}else{
												$.centurycore.modals.chctam.redirectSuccessfulAuth(data.shoppingDomain,'chctam',$($.centurycore.modals.options.chctam + ' ' + $.centurycore.modals.chctam.options.targetRedirect).val(),'NC');
											}
										  break;
								case 'CTL': var currentUrl = location.href.toString();	
											if(currentUrl.indexOf("CLEC/")!=-1){
											 var finalUrl = ctl_url+"/small-business/";
											 window.location = finalUrl;
											}else{
												var postProdString = currentUrl.substring(currentUrl.indexOf("products/"),currentUrl.length);												
												postProdString = postProdString.replace("products/", "");
												postProdString = postProdString.substring(0,postProdString.indexOf("/"));												
												var finalUrl = "";
												if(postProdString == "internet-data" || postProdString == "business-internet-data") {
													postProdString = "business-internet-data";
													finalUrl = qshop_url+"/small-business/products/"+postProdString;
												} else {
													if(postProdString == "http:" || postProdString == "https:") {
														finalUrl = qshop_url+"/small-business";
													} else {
														finalUrl = qshop_url+"/smallbusiness/products/"+postProdString;	
													}													
												}
												var subcookie = {redirectTarget:finalUrl};
												$.centurycore.modals.options.cookieJar.bake('profile_cookie',subcookie,0,"/","centurylink.com");
												jumpTarget = generalUrls['smb'][data.shoppingDomain];
												window.location = jumpTarget;
											}
											break;
								default:
									$('#chctam_initial').hide();
									$('#interstitial').hide();
									$('#captionForChctamModals').html("Try Again");
									$('#chctam_oor').show();
									s.prop3=s.eVar24="unknown";
									s.prop4=s.eVar28="smb_ctam  - " + data.errorMessage + " - ";
									s.events="event34";
									s.eVar60="smb_ctam:" + data.zipForFive; // Registry Type Detail
									s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
									s.t();
							}
						//	$.centurycore.modals.chctam.redirectSuccessfulAuth(data.shoppingDomain,'chctam',$($.centurycore.modals.options.ctam + ' ' + $.centurycore.modals.ctam.options.targetRedirect).val(),'EC');
						} else {
							$('#chctam_initial').hide();
							$('#captionForChctamModals').html("Try Again");
							$('#chctam_oor').show();
							$('#interstitial').hide();
						}
					});
					return false;
				},
				
				preAuthByZip:function(){
					try{
					$.centurycore.clearErrors();
					}catch(e){}
					
					var zip = $('#chctam_ec-zip-code').val();
					if(zip.length > 0 && zip.length < 5) {
						$('#chctam-error-zip-length').show();
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=s.eVar28="smb_ctam - mya - [Please enter a valid zip code]";
						s.events="event34";                                                                                                
						s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
						s.eVar60="smb_ctam:unpwd:*****"; // Registry Type Detail
						s.t();
					} else if(zip == '') {
						$('#chctam-error-zip-required').show();
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=s.eVar28="smb_ctam - mya - [Please enter a valid zip code]";
						s.events="event34";                                                                                                
						s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
						s.eVar60="smb_ctam:unpwd:*****"; // Registry Type Detail
						s.t();
					} else if(isNaN(zip)) {
						$('#chctam-error-zip-required').show();
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=s.eVar28="smb_ctam - mya - [Please enter a valid zip code]";
						s.events="event34";                                                                                                
						s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
						s.eVar60="smb_ctam:unpwd:*****"; // Registry Type Detail
						s.t();
					} else {
						var rememberMe;
						if($('#chctam_remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
						getProfileFromZip(zip,'Y',function(data){
							$.centurycore.modals.latestResponse = data;
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'NC';
							subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
							if(data.shoppingDomain == 'OOR') {
								$('#chctam-error-zip-unrecognized').show();
								s.prop3=s.eVar24="Existing Customer";
								s.prop4=s.eVar28="smb_ctam - mya - [Please enter a valid zip code]";
								s.events="event34";                                                                                                
								s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
								s.eVar60="smb_ctam:unpwd:*****"; // Registry Type Detail
								s.t();
							} else if(data.shoppingDomain != '') {
								s.manageVars('clearVars');
								s.prop3=s.eVar24='Existing Customer';
								s.prop51=s.eVar51="locator|smb_ctam"; // Registry Method
								s.eVar60="smb_ctam:zip:" + data.zipForFive; // Registry Type Detail
								s.events="event48";
								s.t();
								$('#chctam_ec-stored-zip').text($.centurycore.modals.latestResponse.zipForFive);								
							};
						});
					}
					return false;
				},			
				
				showNewCustomerAuth:function(){
					$('#chctam_current-customer-expanded').hide();
					$('#chctam_new-customer-expanded').show();
					$('#chctam_new-customer').show();
					$('#modal-bottom-nc').show();
					$('#modal-top-nc').show();
					$('#chctam_new-customer .modal-block-title').addClass('ctam-active-block');
					$('#chctam_current-customer .modal-block-title').removeClass('ctam-active-block');
					return false;
				},
				showExistingCustomerAuth:function(){
					$('#chctam_new-customer .modal-block-title').removeClass('ctam-active-block');
					$('#chctam_new-customer-expanded').hide();
					$('#chctam_existing-customer .modal-block-title').addClass('ctam-active-block');
					$('#chctam_current-customer-expanded').show();
					$('#chctam_ec-phonenum').show();					
					$('#chctam_ec-phonenum-radio').show();
					$('#chctam_ec-submit-tools').show();
					return false;
				},
				showExistingCustomerChange:function(){				
					$('#chctam-ch-prf-ph-info').show();					
					$('#chctam_existing-customer').show();
					$('#chctam_ec-phonenum').show();
					$('#chctam_current-customer-expanded').show();
					$('#chctam_new-customer-expanded').hide();
					$('#chctam_new-customer').hide();			
					$('#modal-top-nc').hide();
					$('#modal-bottom-nc').hide();					
					$('#modal-top-ec').show();
					$('#modal-bottom-ec').show();
					return false;
				},
				
				showNewCustomerChange:function(){
				    $('#chctam-ch-prf-addr-info').show();      
					$('#chctam_new-customer').show();									 
					$('#chctam_new-customer-expanded').show();
					$('#chctam_existing-customer').hide();
					$('#chctam_nc-overlap').hide();
					$('#modal-top-ec').hide();
					$('#modal-bottom-ec').hide();
					$('#modal-top-nc').show();
					$('#modal-bottom-nc').show();
					$('#chctam_nc-overlap').hide();
					return false;
				},
				
				showPhoneOrAccountAuth:function(){
					s.manageVars('clearVars');
					s.prop3=s.eVar24="unknown";
					s.prop51=s.eVar51="locator|smb_ctam:phone-account" // Registry Method 
					s.events="event45"
					s.t();
					$('#chctam_ec-phonenum').show();															
					$('#chctam_ec-submit-tools').show();
					ctamEcMode = 'phone';
				},
				redirectSuccessfulAuth: function(domain, modalType, redirId, customerType) {
					var target = '';
					var useJumpPage = '';
					var jumpTarget  = '';
					
					$.centurycore.modals.ignorePreviousAuthData = false;
				
					if($.centurycore.modals.loopback) {
						$.centurycore.modals.loopback = false;
						location.reload(true);
						return true;
					}
					
					if(domain == 'UNKNOWN' || domain == 'OOR' || typeof domain == 'undefined' || domain == '') {
					//	window.location = q_url + '/residential/ld/index_oor.html';
						$('#captionForChctamModals').html("Try Again");
						$('#chctam_oor').show();
						$('#chctam_initial').hide();
						$('#interstitial').hide();
						return;
					}						
					
					if(typeof customerType == 'undefined') {
						target = location.href;	
						var length = target.length;
						var substr = target.substring(length-1, length);					
						if(substr == "#"){
							target = target.substring(0, length-1);
						}
						useJumpPage = true;
						jumpTarget = generalUrls['smb'][domain];
						
					} else {
						target = location.href;						
						var length = target.length;
						var substr = target.substring(length-1, length);					
						if(substr == "#"){
							target = target.substring(0, length-1);
						}	
						
						useJumpPage = true;
						jumpTarget = generalUrls['smb'][domain];
					}
				
					if(target != '#NOREDIRECT') {
						var subcookie = {redirectTarget:target};
						$.centurycore.modals.options.cookieJar.bake('profile_cookie',subcookie,0,"/","centurylink.com");
					}
				
					if(useJumpPage) {						
						window.location = jumpTarget;
					} else {
					
						if(target == '#SEARCH') {
							if(domain == 'Q'){
								$('#search-site').val('ThunderCatProducts');
							} else if (domain == 'CTL') {
								$('#search-site').val('ctl');		
							}
							$('#searchTextId').val($('#tpl_search-input').val());
							$('#siteSearch').attr('action', search);
							$('#siteSearch').submit();
							return;
						} else if(target == '#OOR') {
							$('.modal .page').hide();
							$('#' + modalType + '_oor').show();
							$('#interstitial').hide();
						} else if (target == '#UNAVAILABLE') {
							$('#' + modalType + '-modal').jqmHide();
							$('#unavailable-modal').jqmShow();
							$('#unavailable-modal').jqmAddClose($('.upm_close'));
							$('#interstitial').hide();
						} else {
							$('#interstitial').show();
							window.location = target;
						}
					}
				},
				handleOor:function(){
					$('#chctam_initial').show();
					$('#captionForChctamModals').html("Customer Info");
					$('#chctam_oor').hide();
					return false;
				},
				
				ncOverlapRedirect: function(domainOverride){
					$('#interstitial').show();
					var selectedDomain = null;
					if(typeof domainOverride != 'undefined' && typeof domainOverride != 'object') {
						selectedDomain = domainOverride;
					} else {
						selectedDomain = $('input[name="chctam_nc-company-selector-radio"]:checked').val();
					}
					
					if(typeof selectedDomain != 'string') {
						$('.ctam_nc-instructions').removeClass('error-text');
						$('#chctam_nc-company-not-selected').show();
						return;
					}
					
					var profileData = subcookiejar.fetch('profile_cookie');
					if(profileData == null) {
								profileData = {};
							}
					profileData.shoppingDomainOverride = selectedDomain;
					subcookiejar.bake('profile_cookie',profileData,0,"/","centurylink.com");
					$.centurycore.modals.chctam.redirectSuccessfulAuth(selectedDomain,'ctam',$($.centurycore.modals.options.ctam + ' ' + $.centurycore.modals.chctam.options.targetRedirect).val(),'NC');
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
					dataSource = $.centurycore.modals.getBestDataSource();
					$.extend(this.options,this.defaults);
					$.extend(this.options,options);
					
					if($.centurycore.modals.options.cookieJar.fetch('profile_cookie','shoppingDomain') != 'undefined') {
						$('#mam_ec-stored-zip').text($.centurycore.modals.options.cookieJar.fetch('profile_cookie','zipCode'));
					};
					//Existing customer submit button
					$('#mam_ec-go').click($.centurycore.modals.mam.authExistingByMyAccount);
					//Action for the change zip link
					$('#mam_ec-zip-reset').click($.centurycore.modals.mam.resetZipPreAuth);
					//PreAuth zip action
					$('#mam_ec-zip-auth-go').click($.centurycore.modals.mam.preAuthByZip);
					if(dataSource.zipCode != '') {
							$('#mam_ec-stored-zip').text(dataSource.zipCode);
							$('#mam_ec-stored-zip').show();
							//$('#mam_ec-zip').hide();
					}
					
					if(subcookiejar.fetch('remember_me','zipCode') != null) {
						$('#mam_ec-zip-code').val(subcookiejar.fetch('remember_me','zipCode'))
					}
					/* check to see if there is a MYA/MyAccount remember_me.  If there is, populate the username fields. */
					/* TODO: Should this be upgraded to use EAM like the residential version does?  Can it use EAM SSO? */
					if(subcookiejar.fetch('remember_me','userName') != null) {
						$('#mam_qwest-ec-myaccount-username').val(subcookiejar.fetch('remember_me','userName'));
						$('#mam_ctl-ec-myaccount-username').val(subcookiejar.fetch('remember_me','userName'));
					}
					$('#mam_needed-content').hide();
					$('#mam_needed-link').live('click', function(){$('#mam_needed-content').toggle();});
					$('#mam_auth-instructions').hide();
					$('#mam_zip-instructions').show();
					
					$('input[name="mam_company-selector-radio"]').change(function(){
						var customerData = subcookiejar.fetch('customerType');
						if(customerData == null) {
								customerData = {};
							}
						customerData.overlapCompany = $(this).val();
						subcookiejar.bake('customerType',customerData,0,"/","centurylink.com");
						$('#mam-company-not-selected').hide();
						$.centurycore.modals.mam.showMyAccountAuth($(this).val());
					});
					$('#mam_oor-go').click($.centurycore.modals.mam.handleOor);
				},
				resetZipPreAuth:function(){
					$('#mam_ec-zip').show();
					$('#mam_ec-zip-on-file').hide();
					$('#mam_ec-myaccount').hide();
					$('#mam_auth-instructions').hide();
					$('#mam_zip-instructions').show();
					
				},
				setQPortalCookie:function(name, value, expires, path, domain, secure) {
					var today = new Date();
					today.setTime( today.getTime() );
					if (expires) {
						expires = expires * 1000 * 60 * 60 * 24;
					}
					var expires_date = new Date( today.getTime() + (expires) );

			        document.cookie = name + "=" +escape( value ) +
			        ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
			        ( ( path ) ? ";path=" + path : "" ) +
			        ( ( domain ) ? ";domain=" + domain : "" ) +
			        ( ( secure ) ? ";secure" : "" );
					
				},
				showMyAccountAuth:function(domainOverride) {
					var dataSource = $.centurycore.modals.getBestDataSource();
					var profileData = subcookiejar.fetch('profile_cookie');
					
					if(typeof domainOverride != 'undefined' && domainOverride != null){
						dataSource.shoppingDomain = domainOverride;
					} else if ($('input[name="mam_company-selector-radio"]:checked').length) {
						dataSource.shoppingDomain = $('input[name="mam_company-selector-radio"]:checked').val();
						domainOverride = $('input[name="mam_company-selector-radio"]:checked').val();
					} else if (profileData != null && profileData.shoppingDomainOverride != null) {
						dataSource.shoppingDomain = profileData.shoppingDomainOverride;
						domainOverride = profileData.shoppingDomainOverride;
					}

					if(dataSource.zipCode == null || dataSource.shoppingDomain == null) {
						$('#mam_ec-zip').show();
						$('#mam_ec-zip-on-file').hide();
						$('#mam_ec-phonenum').hide();
						$('#mam_ec-myaccount').hide();
					} else {
						$('#mam_ec-zip').hide();
						$('#mam_ec-zip-on-file').show();
						$('#mam_ec-phonenum').hide();
						$('#mam_ec-myaccount').show();
						
						if(typeof dataSource.domainOverlap != 'undefined' && dataSource.domainOverlap == "Y" && typeof domainOverride == 'undefined') {
							$('#mam_mya-instructions .select-company').show();
							$('#mam_mya-instructions .enter-info').hide();
							$('#mam_company-selector').show();
						} else {
							$('#mam_mya-instructions .select-company').hide();
							$('#mam_mya-instructions .enter-info').show();
						}
						if((typeof dataSource.domainOverlap == 'undefined' || dataSource.domainOverlap == "N") || typeof domainOverride != 'undefined'){
							switch(dataSource.shoppingDomain){
							case 'Q':
								$('#mam_ctl-ma-container').hide();
								$('#mam_ctl-links').hide();
								$('#mam_qwest-ma-container').show();
								$('#mam_qwest-links').show();
								if(subcookiejar.fetch('remember_me','userName') != null) {
									$('#mam_qwest-ec-myaccount-password').focus();
									$('.remember-me').attr('checked','checked');
								}
								break;
							case 'CTL':
								$('#mam_ctl-ma-container').show();
								$('#mam_qwest-links').hide();
								$('#mam_qwest-ma-container').hide();
								$('#mam_ctl-links').show();
							    if(subcookiejar.fetch('remember_me','userName') != null) {
									$('#mam_ctl-ec-myaccount-password').focus();
									$('.remember-me').attr('checked','checked');
								}
								break;
							}
						}
						
						
					}
					mamEcMode = 'myaccount';
				},
				preAuthByZip:function(){
					try{
					$.centurycore.clearErrors();
					}catch(e){}
					var zip = $('#mam_ec-zip-code').val();
					if(zip.length > 0 && zip.length < 5) {
						s.prop3=s.eVar24="unknown";
						s.prop4=s.eVar28="smb_mam|zip - A zip code must contain five digits";
						s.events="event34";
						s.eVar60="smb_mam:zip:" + zip; // Registry Type Detail
						s.prop51=s.eVar51="locator|smb_mam"; // Registry Method
						s.t();
						$('#mam-error-zip-length').show();
					} else if (zip.length == 0) {
						s.prop3=s.eVar24="unknown";
						s.prop4=s.eVar28="smb_mam|zip - A zip code is required";
						s.events="event34";
						s.eVar60="smb_mam:zip:" + zip; // Registry Type Detail
						s.prop51=s.eVar51="locator|smb_mam"; // Registry Method
						s.t();
						$('#mam-error-zip-required').show();
					} else {
						var rememberMe;
						if($('#ctam_remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
						getProfileFromZip(zip,'Y',function(data){
							
							$.centurycore.modals.latestResponse = data;
							if(data.shoppingDomain != '' && data.shoppingDomain != 'UNKNOWN' && data.shoppingDomain != 'OOR') {
								s.manageVars("clearVars");
								s.pageName = "ctl|smb|mam";
								s.channel = s.eVar41 = "Small Business";
								s.prop24=s.eVar53="ctl|smb|mam";
								s.prop25=s.eVar54="ctl|smb|mam";
								s.prop26=s.eVar55="ctl|smb|mam";
								s.prop27="ctl|smb|mam";
								s.prop38=s.eVar48="modal";
								s.prop39=s.eVar49="mam_modal";
								s.prop52=s.eVar56="ctl";
								s.prop3=s.eVar24='Existing Customer';
								s.prop51=s.eVar51="locator|smb_mam"; // Registry Method
								s.eVar60="smb_mam:zip:"+data.zipForFive; // Registry Type Detail
								s.events="event47";
								s.t();
								$('#mam_ec-stored-zip').text(data.zipForFive);
								$.centurycore.modals.mam.showMyAccountAuth();
								$('#mam_zip-instructions').hide();
								$('#mam_auth-instructions').show();
							} else if (data.shoppingDomain == 'OOR'){
								$('#zip-error').hide();
								$('#mam-initial').show();
								$('#interstitial').hide();
							//	$('#mam_oor').show();
								$('#mam-error-zip-oor').show();
								s.manageVars("clearVars");
								s.pageName = "ctl|smb|oorm";
								s.channel = s.eVar41 = "Small Business";
								s.prop24=s.eVar53="ctl|smb|oorm";
								s.prop25=s.eVar54="ctl|smb|oormm";
								s.prop26=s.eVar55="ctl|smb|oorm";
								s.prop27="ctl|smb|oorm";
								s.prop38=s.eVar48="modal";
								s.prop39=s.eVar49="oor_modal";
								s.prop52=s.eVar56="ctl";
								s.prop3=s.eVar24='unknown';
								s.prop51=s.eVar51="locator|smb_mam"; // Registry Method
								s.eVar60="smb_mam:zip:"+zip; // Registry Type Detail
								s.prop4=s.eVar28="smb_mam|zip:The zip code you entered is not recognized";
								s.events="event34";
								s.t();
							} else {
								$('#zip-error').hide();
								$('#mam-initial').hide();
								$('#interstitial').hide();
								$('#captionForMamModals').html("Try Again");
								$('#mam_oor').show();
								s.manageVars("clearVars");
								s.pageName = "ctl|smb|oorm";
								s.channel = s.eVar41 = "Small Business";
								s.prop24=s.eVar53="ctl|smb|oorm";
								s.prop25=s.eVar54="ctl|smb|oormm";
								s.prop26=s.eVar55="ctl|smb|oorm";
								s.prop27="ctl|smb|oorm";
								s.prop38=s.eVar48="modal";
								s.prop39=s.eVar49="oor_modal";
								s.prop52=s.eVar56="ctl";
								s.prop3=s.eVar24='unknown';
								s.prop51=s.eVar51="locator|smb_mam"; // Registry Method
								s.eVar60="smb_mam:zip:"+zip; // Registry Type Detail
								s.prop4=s.eVar28="smb_mam|zip:CenturyLink service is not available at this time";
								s.events="event34";
								s.t();
							}
						});
					}
					
					return false;
				},
				authExistingByMyAccount:function(){
					$('.modal .error').hide();
					var user = ($('#mam_qwest-ec-myaccount-username').val())?$('#mam_qwest-ec-myaccount-username').val():$('#mam_ctl-ec-myaccount-username').val();
					var password = ($('#mam_qwest-ec-myaccount-password').val())?$('#mam_qwest-ec-myaccount-password').val():$('#mam_ctl-ec-myaccount-password').val();
					if(user == '' || password == '') {
						if(user == '') {
							s.prop3=s.eVar24="Existing Customer";
							s.prop4=s.eVar28="smb_mam|userId - Username is required";
							s.events="event34";
							s.eVar60="smb_mam:userId:" + user; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_mam"; // Registry Method
							s.t();
							$('#mam-username-required-error').show();
						}
						
						if(password == '') {
							s.prop3=s.eVar24="Existing Customer";
							s.prop4=s.eVar28="smb_mam|userId - Password is required";
							s.events="event34";
							s.eVar60="smb_mam:userId:" + user; // Registry Type Detail
							s.prop51=s.eVar51="locator|smb_mam"; // Registry Method
							s.t();
							$('#mam-password-required-error').show();
						}
						return;
					}
				
				
				    //alert("authExistingByMyAccount");
					dataSource = $.centurycore.modals.getBestDataSource();
					var profileData = subcookiejar.fetch('profile_cookie');
					if(profileData == null) {
						profileData = {};
					}
					
					if($('input[name="mam_company-selector-radio"]:checked').val() != 'undefined' && $('input[name="mam_company-selector-radio"]:checked').val() != null && profileData.shoppingDomainOverride == null) {
						profileData.shoppingDomainOverride = $('input[name="mam_company-selector-radio"]:checked').val();
						$.centurycore.modals.options.cookieJar.bake('profile_cookie',profileData,0,"/","centurylink.com");
					}
					
					if(dataSource.domainOverlap == 'Y' && profileData.shoppingDomainOverride == null) {
						$('#mam-company-not-selected').show();
						$('.mam_instructions').removeClass('error-text');
						return;
					}				
					
					if(typeof dataSource.shoppingDomain != 'undefined') {
						//alert("authExistingByMyAccount1");
						switch(dataSource.shoppingDomain){
							case 'Q':
							//alert("authExistingByMyAccount2");
							//alert("checking for mam_target_redirect element "+document.getElementById('mam_target-redirect'));
						/*	if(typeof linkMatrix['mam'][$('#mam_target-redirect').val()]['Q'] != 'undefined') {
									var linkForRedirect = linkMatrix['mam'][$('#mam_target-redirect').val()]['Q'];
								} else {
								  //alert("authExistingByMyAccount3");
									var linkForRedirect = linkMatrix['mam'][$('#mam_target-redirect').val()]['Q'];
								}*/
							//	profileData.redirectTarget = linkForRedirect;
							//	$.centurycore.modals.options.cookieJar.bake('profile_cookie',profileData,0,"/","centurylink.com");
								
								$.centurycore.modals.mam.setQPortalCookie('QportalUser',user+qPortalUserPostFix,0, '/','centurylink.com', 'true');
								$.centurycore.modals.mam.setQPortalCookie('QportalPassword',password,0, "/",'centurylink.com', 'true' );
								
								$('input[id=mam_qwest-ec-myaccount-username]').val(user+qPortalUserPostFix); 
								var maForm = $('#mam_ec_form');
								//alert("authExistingByMyAccount4");
								
								maForm.attr('action',generalUrls['myaccount']['Q']);
							//	$('#qwest-ma-login-redirectUrl').val(linkForRedirect);
								$('#mam_ctl-ma-container').remove();
								//alert("authExistingByMyAccount5");
								maForm.submit();
								$.centurycore.modals.resetSelectors();
								$('#interstitial').show();
								break;
							case 'CTL':
							/*	if(typeof linkMatrix['mam'][$('#mam_target-redirect').val()]['CTL'] != 'undefined') {
									var linkForRedirect = linkMatrix['mam'][$('#mam_target-redirect').val()]['CTL'];
								} else {
									var linkForRedirect = linkMatrix['mam'][$('#mam_target-redirect').val()]['CTL'];
								}
								profileData.redirectTarget = linkForRedirect;
								$.centurycore.modals.options.cookieJar.bake('profile_cookie',profileData,0,"/","centurylink.com"); */
							
								$('input[id=USER]').val(user); 
								$('input[id=PASSWORD]').val(password); 
								var maForm = $('#mam_ec_form');
								maForm.attr('action',generalUrls['myaccount']['CTL']);
								$('#mam_qwest-ma-container').remove();
								maForm.submit();
								$.centurycore.modals.resetSelectors();
								$('#interstitial').show();
								break;
						}
					}			
					return false;
				},
				handleOor:function(){
					$('#mam-initial').show();
					$('#interstitial').hide();
					$('#captionForZamModals').html("Customer Info");
					$('#mam_oor').hide();
					return;
					//return false;
				}
			},
			upm:{
				initialize:function(){
					$('#upm_go').click($.centurycore.modals.upm.handle);
				},
				handle:function(){
					var dataSource = $.centurycore.modals.getBestDataSource();
					var selected = $('input[name="unavailable_product_options"]:checked').val();
					switch(selected){
						case 'upm_directv':
							window.location = "/home/tv/";
							break;
						case 'upm_hsi':
							window.location = "/home/internet/";
							break;
						case 'upm_bundles':
							window.location = "/home/bundles/";
							break;
						case 'upm_phone':
							window.location = "/home/phone/";
							break;
						case 'upm_home':
							window.location = '/';
							break;
							
					};
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
						var scroll = 'yes';
						var resize = 'yes';
						
						if($(this).attr('popup-width')) {
							var width=$(this).attr('popup-width');
						}
						
						if($(this).attr('popup-height')) {
							var height=$(this).attr('popup-height');
						}
						
						if($(this).attr('popup-expandable')) {
							var height=$(this).attr('popup-expandable');
						}
						
						if($(this).attr('popup-resizable')) {
							var resize=$(this).attr('popup-resizable');
						}
						
						$(this).click(function(){window.open($(this).attr('href'),'popup','resizable=' + resize + ',scrollbars=' + scroll + ',height=' + height + ',width='+width);
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
				$('a[clicktrack],area[clicktrack]').not('.tab').each(function(){$(this).click($.centurycore.analytics.trackAction);});
				
				//Attach tab change tracking.
				$('.ui-tabs').live('tabsselect',$.centurycore.analytics.trackTabChange);
				$.centurycore.analytics.pageLevelSetup();
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
					s.manageVars('clearVars'); // Kalyani change: New line added
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
			center:function (element) {
				element.css("position","absolute");
				element.css("top", (($(window).height() - element.outerHeight()) / 2) + $(window).scrollTop() + "px");
				element.css("left", (($(window).width() - element.outerWidth()) / 2) + $(window).scrollLeft() + "px");
				return element;
			},
			getLinkById:function(id,customerType){
				modalTypes = ['mam','ctam','zam','chctam'];
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
				var linkData = $.centurycore.utility.getLinkById(id,customerType);
				if(linkData[company] != null) {
					return linkData[company];
				} else {
					throw 'LinkNotFoundInMatrix';
				}
			},
			getLinkTypeById:function(id,company,customerType){
				var linkData = $.centurycore.utility.getLinkById(id,customerType);
				if(linkData.type != null) {
					return linkData.type;
				} else {
					return false;
				}
			}
		},
		welcomeobject:{
			options:{},
			defaults:{zipAuthField:'#wo_zip-code',zipAuthForm:'#wo_zip',zipDisplay:'#wo_zip-on-file',zipSubmit:'#wo_zip-auth-go',companySpecific:'#wo_company-specific',qwestAuthForm:'#wo_qwest-ma',centuryAuthForm:'#wo_ctl-ma'},
			initialize:function(options) {
				$.extend(this.options,this.defaults);
				$.extend(this.options,options);
				$($.centurycore.welcomeobject.options.zipSubmit).live('click',$.centurycore.welcomeobject.handleZipAuthentication);
			},
			validateZipAuthentication:function(){
				var valid = ($($.centurycore.welcomeobject.options.zipAuthField).val() != '');
				
				if(!valid) {
					$.centurycore.markAsError('#wo_zip-empty-error',$.centurycore.welcomeobject.options.zipAuthField)
				}
				
				return valid;
			},
			handleZipAuthentication: function(){
				
				if($.centurycore.welcomeobject.validateZipAuthentication()) {
					$.centurycore.modals.determineCompanyByZipCode($($.centurycore.welcomeobject.options.zipAuthField).val());
					setTimeout($.centurycore.welcomeobject.handleZipDisplay,1000)
				}
				
				return false;
			},
			handleZipDisplay:function(){
				if($.centurycore.modals.latestResponse.zipCode) {
					$($.centurycore.welcomeobject.options.zipAuthForm).hide();
					$('#wo_stored-zip').text($.centurycore.modals.latestResponse.zipCode);
					$($.centurycore.welcomeobject.options.zipDisplay).show();
					
					switch($.centurycore.modals.latestResponse.shoppingDomain) {
						case 'Q':
							$($.centurycore.welcomeobject.options.qwestAuthForm).show();
							$($.centurycore.welcomeobject.options.centuryAuthForm).hide();
							$('#wo_myaccount-login').attr('action',generalUrls['myaccount']['Q']);
							break;
						case 'CTL':
							$($.centurycore.welcomeobject.options.centuryAuthForm).show();
							$($.centurycore.welcomeobject.options.qwestAuthForm).hide();
							$('#wo_myaccount-login').attr('action',generalUrls['myaccount']['CTL']);
							break;
					}
					$($.centurycore.welcomeobject.options.companySpecific).show();
				} else {
					$.centurycore.markAsError($.centurycore.welcomeobject.options.zipAuthField);
				}
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
				
					var lpNMT = q_url+"/global/includes/blank.js";
				} else if(path.indexOf("/small-business/products/business-tv/") != -1){
					var lpNMT = q_url+"/global/includes/c2c/smallbusiness/c2c_mtagconfig.js";
				} else if(path.indexOf("/small-business/") != -1 || path.indexOf("/MasterWebPortal/freeRange/shop/SMB")  != -1){
					var lpNMT = q_url+"/global/includes/c2c/smallbusiness/mtagconfig.js";
				} else if(path.indexOf("/smallbusiness/") != -1){
					var lpNMT = q_url+"/global/includes/c2c/smallbusiness/c2c_mtagconfig.js";
				} else if(path.indexOf("/smallbusiness/orderonline/") != -1){
					var lpNMT = q_url+"/global/includes/c2c/smallbusiness/voice-mtagconfig.js";
				} else if(path.indexOf("/pcat/") != -1){
					var lpNMT = q_url+"/global/includes/c2c/smallbusiness/mtagconfig.js";
				} else if(path.indexOf("/oneflex/") != -1){
					var lpNMT = q_url+"/global/includes/c2c/residential/mtagconfig.js";
				} else if(path.indexOf("/residential/movers/") != -1){
					var lpNMT = q_url+"/global/includes/c2c/residential/movers-mtagconfig.js";
				};
				var lpScriptTag = $('<script>');
				lpScriptTag.attr('type','text/javascript');
				lpScriptTag.attr('language','javascript');
				lpScriptTag.attr('src',lpNMT);
				$('head').append(lpScriptTag);
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
			defaults:{identifier:'',containerId:'banners',bannerBaseClass:'banner',buttonContainerClass:'banner-buttons',displayTime:10000},
			options:{},
			buttons:[],
			current:null,
			slides:[],
			timer:null,
			playerState: 0,
			container:null,
			userPaused:false,
			initialize: function(options){
				$.extend($.centurycore.bannerRotator.options,$.centurycore.bannerRotator.defaults);
				$.extend($.centurycore.bannerRotator.options,options);
				$.centurycore.bannerRotator.container = $('#'+$.centurycore.bannerRotator.options.containerId);
				bannerClass = $.centurycore.bannerRotator.options.bannerBaseClass;
				if($.centurycore.bannerRotator.options.identifier != '') {
					bannerClass = bannerClass + '-' + $.centurycore.bannerRotator.options.identifier;
				}
				//$($.centurycore.bannerRotator.container).css('position','relative');
				var banners = $('#' + $.centurycore.bannerRotator.options.containerId + ' .'+bannerClass);
				$(banners).each(function(){
					//$(this).css('position','absolute').css('top','0');
					$(this).mouseover(function(){if(!$.centurycore.bannerRotator.userPaused){$.centurycore.bannerRotator.pause}});
					$(this).mouseout(function(){if(!$.centurycore.bannerRotator.userPaused){$.centurycore.bannerRotator.play}});
					if($.centurycore.bannerRotator.slides.length==0) { 
						$.centurycore.bannerRotator.current = this;
						$(this).show();
					} else {
						$(this).hide();
					}
					$.centurycore.bannerRotator.slides[$.centurycore.bannerRotator.slides.length] = this;
					$.centurycore.bannerRotator.addButton(this);
				});
				
				playButton = $('<a>');
				playButton.attr('id','banner-toggle');
				playButton.attr('href','#');
				playButton.attr('class','banner-button');
				playButton.css('background-image','url(/assets/images/templates/btn_play.gif)').css('height','25px').css('width','20px');
				playButton.click($.centurycore.bannerRotator.toggleRotatorState);
				$.centurycore.bannerRotator.buttons[$.centurycore.bannerRotator.buttons.length] = playButton;
				$('.' + $.centurycore.bannerRotator.options.buttonContainerClass).append(playButton);
				$('#banner-1').addClass('current');
				$.centurycore.bannerRotator.play();
			},
			addButton:function(){
				var newButton = $('<a>');
				newButton.attr('id','banner-' + $.centurycore.bannerRotator.slides.length);
				newButton.attr('href','#');
				newButton.attr('class','banner-button');
				newButton.click($.centurycore.bannerRotator.gotoSlide);
				//newButton.click($.centurycore.bannerRotator.trackSelection());
				newButton.text($.centurycore.bannerRotator.slides.length);
				
				$.centurycore.bannerRotator.buttons[$.centurycore.bannerRotator.buttons.length] = newButton;
				$('.' + $.centurycore.bannerRotator.options.buttonContainerClass).append(newButton);
			},
			gotoSlide:function(){
				$('#banner-toggle').css('background-image','url(/assets/images/templates/btn_pause.gif)');
				$.centurycore.bannerRotator.userPaused = true
				$.centurycore.bannerRotator.pause();
				id = $(this).attr('id').substring($(this).attr('id').indexOf('-')+1,$(this).attr('id').length)-1;
				$('.banner-button.current').removeClass('current');
				$(this).addClass('current');
				oldSlide = $.centurycore.bannerRotator.current;
				$.centurycore.bannerRotator.current = $.centurycore.bannerRotator.slides[id];
				if(oldSlide != $.centurycore.bannerRotator.current) {
					$(oldSlide).fadeOut($($.centurycore.bannerRotator.current).fadeIn());
				}
			},
			nextSlide:function(){
				var currentPosition = jQuery.inArray($.centurycore.bannerRotator.current,$($.centurycore.bannerRotator.slides));
				var nextPosition = currentPosition + 1;
				$('.banner-button.current').removeClass('current');
				var oldSlide = $.centurycore.bannerRotator.current;
				if(nextPosition <= $.centurycore.bannerRotator.slides.length - 1) {
					$.centurycore.bannerRotator.current = $.centurycore.bannerRotator.slides[nextPosition];
					$('#banner-'+(nextPosition+1)).addClass('current');
				} else {
					$.centurycore.bannerRotator.current = $.centurycore.bannerRotator.slides[0];
					$('#banner-1').addClass('current');
				}
				$(oldSlide).fadeOut($($.centurycore.bannerRotator.current).fadeIn());
			},
			previousSlide:function(){
				var currentPosition = jQuery.inArray($.centurycore.bannerRotator.current,$($.centurycore.bannerRotator.slides));
				var nextPosition = currentPosition - 1;
				$('.banner-button.current').removeClass('current');
				$($.centurycore.bannerRotator.current).hide();
				if(nextPosition >= 0) {
					$.centurycore.bannerRotator.current = $.centurycore.bannerRotator.slides[nextPosition];
					$('#banner-'+(nextPosition+1)).addClass('current');
				} else {
					$.centurycore.bannerRotator.current = $.centurycore.bannerRotator.slides[$.centurycore.bannerRotator.slides.length - 1];
				}
				$($.centurycore.bannerRotator.current).show();
			},
			play:function(){
				$.centurycore.bannerRotator.timer = window.setInterval($.centurycore.bannerRotator.nextSlide,$.centurycore.bannerRotator.options.displayTime);
				$.centurycore.bannerRotator.playerState = 1;
			},
			pause:function(){
				clearInterval($.centurycore.bannerRotator.timer);
				$.centurycore.bannerRotator.playerState = 0;
			},
			toggleRotatorState:function(){
				$.centurycore.bannerRotator.playerState = ($.centurycore.bannerRotator.playerState)?0:1;
				if($.centurycore.bannerRotator.playerState) {
					$('#banner-toggle').css('background-image','url(/assets/images/templates/btn_play.gif)');
					$.centurycore.bannerRotator.userPaused = false;
					$.centurycore.bannerRotator.play();
				} else {
					$('#banner-toggle').css('background-image','url(/assets/images/templates/btn_pause.gif)');
					$.centurycore.bannerRotator.userPaused = true;
					$.centurycore.bannerRotator.pause();
				}
			}
		}
	}
})(jQuery);

try { 
	q=$.centurycore; 
	qm = $.centurycore.modals;
	qmz = $.centurycore.modals.zam;
	qmc = $.centurycore.modals.ctam;
	qmch = $.centurycore.modals.chctam;
	qmm = $.centurycore.modals.mam;
	qp = $.centurycore.popups;
	qmu = $.centurycore.modals.upm;
	qa = $.centurycore.analytics;
	qwo = $.centurycore.welcomeobject;
	br = $.centurycore.bannerRotator;
}catch(e) {}


function trackClick(qLinkName) {
	$.centurycore.analytics.trackAction(qLinkName)
}

function track6(qLinkName) {
	$.centurycore.analytics.trackAction(qLinkName)
}

function trackClickWithImpressions(qLinkName) {
	$.centurycore.analytics.trackAction(qLinkName, true)
}

//Sets an Omniture Cookie to be used on the success and failure pages
function setOmnitureRegistryCookie(modal, registryType, registryDetail) {
    try{
	var registryCookieValue = "";
	
	if (modal != "" || modal != null) {
		registryCookieValue = registryCookieValue + "modal:" + modal + "~";
	}
	if (registryType != "" || registryType != null) {
		registryCookieValue = registryCookieValue + "registryType:" + registryType + "~";
	}
	if (registryDetail != "" || registryDetail != null) {
		registryCookieValue = registryCookieValue + "registryDetail:" + registryDetail + "~";
	}

	var domains = document.domain;
	var lastIndex = domains.lastIndexOf(".");	
	var lastPart = domains.substring(lastIndex+1, domains.length);
	var domainsRemovedLast = domains.substring(0,lastIndex);
	var secondLastIndex = domainsRemovedLast.lastIndexOf(".");
	var secontLastPart = domainsRemovedLast.substring(secondLastIndex+1, domainsRemovedLast.length);
	var cookieDomains = secontLastPart + "." + lastPart;
	
	if (registryCookieValue != "") {
		//Cookie "OmnitureRegistryCookie" expires after one day
		var date = new Date();
		date.setTime(date.getTime()+(1*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
		var domains = "domain="+cookieDomains;
		document.cookie = "OmnitureRegistryCookie="+registryCookieValue+expires+"; path=/;"+domains;
	}
    }catch(err){}
}