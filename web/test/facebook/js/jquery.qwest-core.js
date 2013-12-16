
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
		redirectSuccessfulAuth : function(domain, modalType, redirId, customerType) {
			var target = '';
			var useJumpPage = '';
			var jumpTarget  = '';
			
			qm.ignorePreviousAuthData = false;
			
			if(qm.loopback) {
				qm.loopback = false;
				location.reload(true);
				return true;
			}
			
			if(domain == 'UNKNOWN' || domain == 'OOR' || typeof domain == 'undefined' || domain == '') {
				window.location = q_url + '/residential/ld/index_oor.html';
				return;
			}
			
			if(q.utility.getLinkTypeById(redirId,domain,customerType) == 'popup') {
				window.open(q.utility.getLinkEndpointById(redirId,domain,customerType),'popup','scrollbars=yes,height=500,width=420');
				$('#interstitial').hide();
				$('#zam-modal').jqmHide();
				return false;
			}
			
			if(typeof customerType == 'undefined') {
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
			
			var subcookie = {redirectTarget:target};
			qm.options.cookieJar.bake('profile_cookie',subcookie,0,"/","centurylink.com");

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
				targetRedirect : '#targetRedirect',
				requestor:'EBIZ',
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
				
				//ZAM internal content setup
				this.zam.initialize();
				//MAM internal Content Setup
				this.mam.initialize();
				//CTAM internal Content Setup
				this.ctam.initialize();
				//UPM internal Content Setup
				this.upm.initialize();
				
				initializeLocator(this.options.requestor,this.options.serviceDomain);
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
						if(dataSource.shoppingDomain && !qm.ignorePreviousAuthData) {
							q.redirectSuccessfulAuth(dataSource.shoppingDomain,'zam',originId);
						} else {
							s.manageVars('clearVars');
							s.pageName = "ctl|rsd|zam";
							s.channel = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="zam_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop51=eVar51="locator|zam"; // Registry Method 
							s.events="event45";
							s.t();
							$(qm.options.zam).jqmShow();
							$(qm.options.zam).jqmAddClose($('.zam_close'));
							$(qm.options.zam + ' ' + qmz.options.targetRedirect).val(originId);
						};
						break;
					case '#CTAM':
						if(dataSource.shoppingDomain && qm.options.cookieJar.fetch('customerType','customerType') != null && !qm.ignorePreviousAuthData) {
							if(qm.options.cookieJar.fetch('customerType','customerType') == 'NC') {
								var customerType = 'NC';
							} else if (qm.options.cookieJar.fetch('customerType','customerType') == 'EC') {
								var customerType = 'EC';
							}
							q.redirectSuccessfulAuth(dataSource.shoppingDomain,'ctam',originId,customerType);
						} else {
							s.manageVars("clearVars");
							s.pageName = "ctl|rsd|ctam";
							s.channel = "rsd";
							s.prop38=s.eVar48="modal";
							s.prop39=s.eVar49="ctam_modal";
							s.prop52=s.eVar56="ctl";
							s.prop3=s.eVar24="unknown";
							s.prop51=eVar51="locator|ctam:address"; // Registry Method 
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
						//Omniture hooks
						//TODO: Remove this during refactor to place it in analytics module.
						s.manageVars("clearVars");
						s.pageName = "ctl|rsd|mam";
						s.channel = "rsd";
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
					if(zip != '' && zip.length == 5) {
						$('#interstitial').show();
						getProfileFromZip(zip,'Y',qmz.profile);
					} else if (zip.length < 5 && zip.length > 0) {
						$('#zam-error-zip-length').show();
					} else {
						$('#zam-error-zip-required').show();
					}
					return false;
				},
				handleOor:function(){
					var option = $('#zam_oor input[name="oor_options"]:checked').val();
					switch(option){
						case 'oor_services':
							$('#interstitial').show();
							window.location = q_url + '/residential/ld/index_oor.html';
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
					if(customerData != null && customerData.overlapCompany != null) {
						dataSource.shoppingDomain = customerData.overlapCompany;
					} else if (customerData == null) {
						customerData = {};
					}
					
					if(data.errorCode == 'INVALID_VALUE' && data.errorMessage == 'zipCode')
					{
						$('#zip-error').show();
						$('#interstitial').hide();
						s.manageVars('clearVars');
						s.pageName = "ctl|rsd|oorm";
						s.channel = "rsd";
						s.prop38=s.eVar48="modal";
						s.prop39=s.eVar49="oor_modal";
						s.prop52=s.eVar56="ctl";
						s.prop3=s.eVar24="unknown";
						s.prop4=eVar28="zam  - " + data.errorMessage + " - " + $('#zip-error').text();
						s.events="event34";
						s.eVar60="zam:" + data.zipForFive; // Registry Type Detail
						s.prop51=eVar51="locator|zam"; // Registry Method
						s.t();
					} else if (data.domainOverlap == 'Y' && customerData.overlapCompany == null) {
						$('#zam_zip').hide();
						$('#zam_stored-zip').text(data.zipForFive);
						$('#zam_zip-on-file').show();
						$('#zam_company-selector').show();
						$('#zam-error-overlap').show();
						$('#interstitial').hide();
					} else if (data.domainOverlap == 'Y' && customerData.overlapCompany != null) {
						qmz.overlapRedirect(customerData.overlapCompany);
					} else if(data.shoppingDomain == 'OOR' || data.shoppingDomain == 'UNKNOWN' || data.shoppingDomain == '') {
						$('#zip-error').hide();
						$('#zam-initial').hide();
						$('#interstitial').hide();
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
					
					var customerData = subcookiejar.fetch('customerType');
					if(customerData == null) {
								customerData = {};
							}
					customerData.overlapCompany = selectedDomain;
					subcookiejar.bake('customerType',customerData);
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
					
					//$('#qwest-ma-modal-login').submit(qmc.authenticateExistingCustomer);
					//$('#ctl_ctam-ec-ma-form').submit(qmc.authenticateExistingCustomer);
					$('#ctam_nc-form').submit(qmc.authenticateExistingCustomer);
					//$('#ctam_ec-go').click(qmc.authenticateExistingCustomer);
					$('#ctam_ec-phonenum-radio').click();
					$('#ctam_oor-go').click(qmc.handleOor);
					$('input[name="ctam_company-selector-radio"]').change(function(){
						var customerData = subcookiejar.fetch('customerType');
						if(customerData == null) {
								customerData = {};
							}
						customerData.overlapCompany = $(this).val();
						subcookiejar.bake('customerType',customerData);
						qmc.showMyAccountAuth($(this).val());
					});
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
							$('#ctam-error-street-required').show();
						}
						
						if(city == '') {
							$('#ctam-error-city-required').show();
						}
						
						if(state == '') {
							$('#ctam-error-state-required').show();
						}
						
						if(zip == '') {
							$('#ctam-error-zip-required').show();
						} else if (zip.length > 0 && zip.length < 5) {
							$('#ctam-error-zip-length').show();
						}
						return;
					}
					$('#interstitial').show();
					
					getProfileFromAddress(street, unit, unitNumber, city, state, zip, rememberMe, function(data){
						qm.latestResponse = data;
						if(data.addressRequestValid) {
							s.manageVars('clearVars');
							s.prop3=s.eVar24="unknown";// New Customer or Existing Customer]”
							s.prop51=eVar51="locator|ctam:address"; // Registry Method
							s.eVar60="ctam:" + street + unit + unitNumber + city + state + zip; // Registry Type Detail
							s.events="event46";
							s.t();
							subcookiejar.crumble('customerType');
							var customerData = subcookiejar.fetch('customerType');
							if(customerData == null) {
								customerData = {};
							}
							customerData.customerType = 'NC';
							subcookiejar.bake('customerType',customerData);
							switch(data.shoppingDomain) {
								case 'Q':
								case 'CTL':
									q.redirectSuccessfulAuth(data.shoppingDomain,'ctam',$(qm.options.ctam + ' ' + qmc.options.targetRedirect).val(),'NC');
									break;
								default:
									$('#ctam_initial').hide();
									$('#interstitial').hide();
									$('#ctam_oor').show();
									s.manageVars('clearVars');
									s.pageName = "ctl|rsd|oorm";
									s.channel = "rsd";
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
						$('#ctam-phonenumber-required-error').show();
						return;
					}
					
					$('#interstitial').show();
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
							customerData.overlapCompany = 'EC';
							subcookiejar.bake('customerType',customerData);
							q.redirectSuccessfulAuth(data.shoppingDomain,'ctam',$(qm.options.ctam + ' ' + qmc.options.targetRedirect).val(),'EC');
						} else {
							$('#ctam_initial').hide();
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
							$('#ctam-username-required-error').show();
						}
						
						if(password == '') {
							$('#ctam-password-required-error').show();
						}
						return;
					}
					$('#interstitial').show();
					dataSource = qm.getBestDataSource();
					if(typeof dataSource.shoppingDomain != 'undefined') {
						subcookiejar.crumble('customerType');
						var customerData = subcookiejar.fetch('customerType');
						if(customerData == null) {
								customerData = {};
							}
						customerData.customerType = 'EC';
						subcookiejar.bake('customerType',customerData);
						qm.options.cookieJar.bake('profile_cookie',{redirectTarget:$(qm.options.ctam + ' ' + qmc.options.targetRedirect).val()},0,"/","centurylink.com");
						switch(dataSource.shoppingDomain){
							case 'Q':
								if(typeof linkMatrix['ctam'][$('#ctam_target-redirect').val()]['EC']['Q'] != 'undefined') {
									var linkForRedirect = linkMatrix['ctam'][$('#ctam_target-redirect').val()]['EC']['Q'];
								} else {
									var linkForRedirect = linkMatrix['ctam'][$('#ctam_target-redirect').val()]['Q'];
								}
								qm.options.cookieJar.bake('profile_cookie',{redirectTarget:linkForRedirect},0,"/","centurylink.com");
								var maForm = $('#qwest-ma-modal-login');
								maForm.attr('action',generalUrls['shop']['Q']);
								$('#qwest-ma-login-redirectUrl').val(linkForRedirect);
								maForm.submit();
								qm.resetSelectors();
								$('#interstitial').show();
								break;
							case 'CTL':
								if(typeof linkMatrix['ctam'][$('#ctam_target-redirect').val()]['EC']['CTL'] != 'undefined') {
									var linkForRedirect = linkMatrix['ctam'][$('#ctam_target-redirect').val()]['EC']['CTL'];
								} else {
									var linkForRedirect = linkMatrix['ctam'][$('#ctam_target-redirect').val()]['CTL'];
								}
								qm.options.cookieJar.bake('profile_cookie',{redirectTarget:linkForRedirect},0,"/","centurylink.com");
								var maForm = $('#ctl_ctam-ec-ma-form');
								maForm.attr('action',generalUrls['myaccount']['CTL']);
								
								maForm.submit();
								qm.resetSelectors();
								$('#interstitial').show();
								break;
						}
					}			
					return false;
				},
				preAuthByZip:function(){
					q.clearErrors();
					
					var zip = $('#ctam_ec-zip-code').val();
					if(zip.length > 0 && zip.length < 5) {
						$('#ctam-error-zip-length').show();
						s.manageVars('clearVars');
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=eVar28="ctam|myaccount - " + data.errorMessage + " - " + $('#ctam-error-zip-length').text();
						s.events="event34";                                                                                                
						s.prop51=eVar51="locator|ctam"; // Registry Method
						s.eVar60="ctam:unpwd:*****"; // Registry Type Detail
						s.t();
					} else if(zip == '') {
						$('#ctam-error-zip-required').show();
						s.manageVars('clearVars');
						s.prop3=s.eVar24="Existing Customer";
						s.prop4=eVar28="ctam|myaccount - " + data.errorMessage + " - " + $('#ctam-error-zip-required').text();
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
							subcookiejar.bake('customerType',customerData);
							if(data.shoppingDomain != '') {
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
					$('#ctam_ec-myaccount').show();
					$('#ctam_ec-phonenum-radio').show();
					$('#ctam_ec-submit-tools').show();
				},
				showMyAccountAuth:function(domainOverride) {
					var dataSource = qm.getBestDataSource();
					var customerData = subcookiejar.fetch('customerType');
					
					if(typeof(domainOverride != 'undefined') && domainOverride != null){
						dataSource.shoppingDomain = domainOverride;
					} else if ($('input[name="ctam_company-selector-radio"]:checked').length) {
						dataSource.shoppingDomain = $('input[name="ctam_company-selector-radio"]:checked').val();
						domainOverride = $('input[name="ctam_company-selector-radio"]:checked').val();
					} else if (customerData != null && customerData.overlapCompany != null) {
						dataSource.shoppingDomain = customerData.overlapCompany;
						domainOverride = customerData.overlapCompany;
					}
					
					
					
					s.manageVars('clearVars');
					s.prop3=s.eVar24='unknown';
					s.prop51=eVar51="locator|ctam"; // Registry Method 
					s.events="event45";
					s.t();
					if((dataSource.zipCode == null || typeof dataSource.shoppingDomain == 'undefined') && typeof domainOverride == 'undefined') {
						$('#ctam_ec-zip').show();
						$('#ctam_ec-zip-on-file').hide();
						$('#ctam_ec-phonenum').hide();
						$('#ctam_ec-myaccount').hide();
						$('#ctam_ec-submit-tools').hide();
					} else {
						$('#ctam_ec-zip').hide();
						$('#ctam_ec-zip-on-file').show();
						$('#ctam_mya-instructions').show();
						if(typeof dataSource.domainOverlap != 'undefined' && dataSource.domainOverlap == "Y"  && typeof domainOverride == 'undefined') {
							$('#ctam_mya-instructions .select-company').show();
							$('#ctam_mya-instructions .enter-info').hide();
							$('#ctam_company-selector').show();
						} else {
							$('#ctam_mya-instructions .select-company').hide();
							$('#ctam_mya-instructions .enter-info').show();
						}
						$('#ctam_ec-phonenum').hide();
						$('#ctam_ec-myaccount').show();
						$('#ctam_ec-submit-tools').show();
						if((typeof dataSource.domainOverlap == 'undefined' || dataSource.domainOverlap == "N") || typeof domainOverride == 'undefined'){
							switch(dataSource.shoppingDomain){
								case 'Q':
									$('#ctl_ma-container').hide();
									$('#qwest_ma-container').show();
									$('#ctam_company-selector-q').attr('checked','checked');
									$('#ctam_company-selector-ctl').attr('checked',false);
									break;
								case 'CTL':
									$('#qwest_ma-container').hide();
									$('#ctl_ma-container').show();
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
					s.prop51=eVar51="locator|ctam:phone-account" // Registry Method 
					s.events="event45"
					s.t();
					$('#ctam_ec-phonenum').show();
					$('#ctam_ec-myaccount').hide();
					$('#ctam_ec-zip').hide();
					$('#ctam_ec-zip-on-file').hide();
					$('#ctam_ec-submit-tools').show();
					ctamEcMode = 'phone';
				},
				handleOor:function(){
					var option = $('#ctam_oor input[name="oor_options"]:checked').val();
					switch(option){
						case 'oor_services':
							$('#interstitial').show();
							window.location = q_url + '/residential/ld/index_oor.html';
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
					
					if(qm.options.cookieJar.fetch('profile_cookie','shoppingDomain') != 'undefined') {
						$('#mam_ec-stored-zip').text(qm.options.cookieJar.fetch('profile_cookie','zipCode'));
					};
					//Existing customer submit button
					$('#mam_ec-go').click(qmm.authExistingByMyAccount);
					//Action for the change zip link
					$('#mam_ec-zip-reset').click(qmm.resetZipPreAuth);
					//PreAuth zip action
					$('#mam_ec-zip-auth-go').click(qmm.preAuthByZip);
					if(dataSource.zipCode != '') {
							$('#mam_ec-stored-zip').text(dataSource.zipCode);
							$('#mam_ec-stored-zip').show();
							//$('#mam_ec-zip').hide();
					}
					
					if(subcookiejar.fetch('remember_me','zipCode') != null) {
						$('#mam_ec-zip-code').val(subcookiejar.fetch('remember_me','zipCode'))
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
						subcookiejar.bake('customerType',customerData);
						$('#mam-company-not-selected').hide();
						qmm.showMyAccountAuth($(this).val());
					});
					$('#mam_oor-go').click(qmm.handleOor);
				},
				resetZipPreAuth:function(){
					$('#mam_ec-zip').show();
					$('#mam_ec-zip-on-file').hide();
					$('#mam_ec-myaccount').hide();
					$('#mam_auth-instructions').hide();
					$('#mam_zip-instructions').show();
					
				},
				showMyAccountAuth:function(domainOverride) {
					var dataSource = qm.getBestDataSource();
					var customerData = subcookiejar.fetch('customerType');
					
					if(typeof domainOverride != 'undefined' && domainOverride != null){
						dataSource.shoppingDomain = domainOverride;
					} else if ($('input[name="mam_company-selector-radio"]:checked').length) {
						dataSource.shoppingDomain = $('input[name="mam_company-selector-radio"]:checked').val();
						domainOverride = $('input[name="mam_company-selector-radio"]:checked').val();
					} else if (customerData != null && customerData.overlapCompany != null) {
						dataSource.shoppingDomain = customerData.overlapCompany;
						domainOverride = customerData.overlapCompany;
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
								break;
							case 'CTL':
								$('#mam_ctl-ma-container').show();
								$('#mam_qwest-links').hide();
								$('#mam_qwest-ma-container').hide();
								$('#mam_ctl-links').show();
								break;
							}
						}
						
						
					}
					mamEcMode = 'myaccount';
				},
				preAuthByZip:function(){
					q.clearErrors();
					var zip = $('#mam_ec-zip-code').val();
					if(zip.length > 0 && zip.length < 5) {
						$('#mam-error-zip-length').show();
					} else if (zip.length == 0) {
						$('#mam-error-zip-required').show();
					} else {
						var rememberMe;
						if($('#ctam_remember-me').is(':checked')) { rememberMe = 'Y'} else {rememberMe = 'N'};
						getProfileFromZip(zip,'Y',function(data){
							
							qm.latestResponse = data;
							if(data.shoppingDomain != '' && data.shoppingDomain != 'UNKNOWN' && data.shoppingDomain != 'OOR') {
								s.manageVars('clearVars');
								s.prop3=s.eVar24='Existing Customer';
								s.prop51=eVar51="locator|mam"; // Registry Method
								s.eVar60="mam:zip:"+data.zipForFive; // Registry Type Detail
								s.events="event47";
								s.t();
								$('#mam_ec-stored-zip').text(data.zipForFive);
								qmm.showMyAccountAuth();
								$('#mam_zip-instructions').hide();
								$('#mam_auth-instructions').show();
							} else if (data.shoppingDomain == 'OOR'){
								$('#zip-error').hide();
								$('#mam-initial').hide();
								$('#interstitial').hide();
								$('#mam_oor').show();
							}
						});
					}
					
					return false;
				},
				authExistingByMyAccount:function(){
				    //alert("authExistingByMyAccount");
					dataSource = qm.getBestDataSource();
					var customerData = subcookiejar.fetch('customerType');
					if(customerData == null) {
						customerData = {};
					}
					
					if(dataSource.domainOverlap == 'Y' && customerData.overlapCompany == null) {
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
							if(typeof linkMatrix['mam'][$('#mam_target-redirect').val()]['Q'] != 'undefined') {
									var linkForRedirect = linkMatrix['mam'][$('#mam_target-redirect').val()]['Q'];
								} else {
								  //alert("authExistingByMyAccount3");
									var linkForRedirect = linkMatrix['mam'][$('#mam_target-redirect').val()]['Q'];
								}
								qm.options.cookieJar.bake('profile_cookie',{redirectTarget:linkForRedirect},0,"/","centurylink.com");
								var maForm = $('#mam_ec_form');
								//alert("authExistingByMyAccount4");
								
								maForm.attr('action',generalUrls['myaccount']['Q']);
								$('#qwest-ma-login-redirectUrl').val(linkForRedirect);
								$('#mam_ctl-ma-container').remove();
								//alert("authExistingByMyAccount5");
								maForm.submit();
								qm.resetSelectors();
								$('#interstitial').show();
								break;
							case 'CTL':
								if(typeof linkMatrix['mam'][$('#mam_target-redirect').val()]['CTL'] != 'undefined') {
									var linkForRedirect = linkMatrix['mam'][$('#mam_target-redirect').val()]['CTL'];
								} else {
									var linkForRedirect = linkMatrix['mam'][$('#mam_target-redirect').val()]['CTL'];
								}
								qm.options.cookieJar.bake('profile_cookie',{redirectTarget:linkForRedirect},0,"/","centurylink.com");
								var maForm = $('#mam_ec_form');
								maForm.attr('action',generalUrls['myaccount']['CTL']);
								$('#mam_qwest-ma-container').remove();
								maForm.submit();
								qm.resetSelectors();
								$('#interstitial').show();
								break;
						}
					}			
					return false;
				},
				handleOor:function(){
					var option = $('#mam_oor input[name="oor_options"]:checked').val();
					switch(option){
						case 'oor_services':
							$('#interstitial').show();
							window.location = q_url + '/residential/ld/index_oor.html';
							break;
						case 'oor_try-again':
							$('#mam-error').hide();
							$('#mam-initial').show();
							$('#mam_oor').hide();
							break;
					}
					return false;
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
			getLinkTypeById:function(id,company,customerType){
				var linkData = q.utility.getLinkById(id,customerType);
				if(linkData.type != null) {
					return linkData.type;
				} else {
					return false
				}
			}
		},
		welcomeobject:{
			options:{},
			defaults:{zipAuthField:'#wo_zip-code',zipAuthForm:'#wo_zip',zipDisplay:'#wo_zip-on-file',zipSubmit:'#wo_zip-auth-go',companySpecific:'#wo_company-specific',qwestAuthForm:'#wo_qwest-ma',centuryAuthForm:'#wo_ctl-ma'},
			initialize:function(options) {
				$.extend(this.options,this.defaults);
				$.extend(this.options,options);
				$(qwo.options.zipSubmit).live('click',qwo.handleZipAuthentication);
			},
			validateZipAuthentication:function(){
				var valid = ($(qwo.options.zipAuthField).val() != '');
				
				if(!valid) {
					q.markAsError('#wo_zip-empty-error',qwo.options.zipAuthField)
				}
				
				return valid;
			},
			handleZipAuthentication: function(){
				
				if(qwo.validateZipAuthentication()) {
					qm.determineCompanyByZipCode($(qwo.options.zipAuthField).val());
					setTimeout(qwo.handleZipDisplay,1000)
				}
				
				return false;
			},
			handleZipDisplay:function(){
				if(qm.latestResponse.zipCode) {
					$(qwo.options.zipAuthForm).hide();
					$('#wo_stored-zip').text(qm.latestResponse.zipCode);
					$(qwo.options.zipDisplay).show();
					
					switch(qm.latestResponse.shoppingDomain) {
						case 'Q':
							$(qwo.options.qwestAuthForm).show();
							$(qwo.options.centuryAuthForm).hide();
							$('#wo_myaccount-login').attr('action',generalUrls['myaccount']['Q']);
							break;
						case 'CTL':
							$(qwo.options.centuryAuthForm).show();
							$(qwo.options.qwestAuthForm).hide();
							$('#wo_myaccount-login').attr('action',generalUrls['myaccount']['CTL']);
							break;
					}
					$(qwo.options.companySpecific).show();
				} else {
					q.markAsError(qwo.options.zipAuthField);
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
				$.extend(br.options,br.defaults);
				$.extend(br.options,options);
				br.container = $('#'+br.options.containerId);
				bannerClass = br.options.bannerBaseClass;
				if(br.options.identifier != '') {
					bannerClass = bannerClass + '-' + br.options.identifier;
				}
				//$(br.container).css('position','relative');
				var banners = $('#' + br.options.containerId + ' .'+bannerClass);
				$(banners).each(function(){
					//$(this).css('position','absolute').css('top','0');
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
				});
				
				playButton = $('<a>');
				playButton.attr('id','banner-toggle');
				playButton.attr('href','#');
				playButton.attr('class','banner-button');
				playButton.css('background-image','url(/assets/images/templates/btn_play.gif)').css('height','25px').css('width','20px');
				playButton.click(br.toggleRotatorState);
				br.buttons[br.buttons.length] = playButton;
				$('.' + br.options.buttonContainerClass).append(playButton);
				$('#banner-1').addClass('current');
				br.play();
			},
			addButton:function(){
				var newButton = $('<a>');
				newButton.attr('id','banner-' + br.slides.length);
				newButton.attr('href','#');
				newButton.attr('class','banner-button');
				newButton.click(br.gotoSlide);
				//newButton.click(br.trackSelection());
				newButton.text(br.slides.length);
				
				br.buttons[br.buttons.length] = newButton;
				$('.' + br.options.buttonContainerClass).append(newButton);
			},
			gotoSlide:function(){
				$('#banner-toggle').css('background-image','url(/assets/images/templates/btn_pause.gif)');
				br.userPaused = true
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
			nextSlide:function(){
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
			previousSlide:function(){
				var currentPosition = jQuery.inArray(br.current,$(br.slides));
				var nextPosition = currentPosition - 1;
				$('.banner-button.current').removeClass('current');
				$(br.current).hide();
				if(nextPosition >= 0) {
					br.current = br.slides[nextPosition];
					$('#banner-'+(nextPosition+1)).addClass('current');
				} else {
					br.current = br.slides[br.slides.length - 1];
				}
				$(br.current).show();
			},
			play:function(){
				br.timer = window.setInterval(br.nextSlide,br.options.displayTime);
				br.playerState = 1;
			},
			pause:function(){
				clearInterval(br.timer);
				br.playerState = 0;
			},
			toggleRotatorState:function(){
				br.playerState = (br.playerState)?0:1;
				if(br.playerState) {
					$('#banner-toggle').css('background-image','url(/assets/images/templates/btn_play.gif)');
					br.userPaused = false;
					br.play();
				} else {
					$('#banner-toggle').css('background-image','url(/assets/images/templates/btn_pause.gif)');
					br.userPaused = true;
					br.pause();
				}
			}
		}
	}
})(jQuery);

q=$.centurycore;
qm = $.centurycore.modals;
qmz = $.centurycore.modals.zam;
qmc = $.centurycore.modals.ctam;
qmm = $.centurycore.modals.mam;
qmu = $.centurycore.modals.upm;
qp = $.centurycore.popups;
qa = $.centurycore.analytics;
qwo = $.centurycore.welcomeobject;
br = $.centurycore.bannerRotator;
function trackClick(qLinkName) {
	$.centurycore.analytics.trackAction(qLinkName)
}

function track6(qLinkName) {
	$.centurycore.analytics.trackAction(qLinkName)
}

function trackClickWithImpressions(qLinkName) {
	$.centurycore.analytics.trackAction(qLinkName, true)
}