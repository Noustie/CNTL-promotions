/* Sarah Tonjes 10/1/13
 *
 * This file controls the automatic zam functionality that is used in the
 * self support (DELPHYNE) application for digital dialogs.
 * Please contact the DELPHYNE support team for questions
*/

function autozam(){
		if(subcookiejar.fetch('profile_cookie','shoppingDomain') && subcookiejar.fetch('profile_cookie','shoppingDomain')!='OOR'){
			if(subcookiejar.fetch('customerType','customerType') || subcookiejar.fetch('remember_me','accountNumber') || subcookiejar.fetch('remember_me','telephoneNumber') || subcookiejar.fetch('remember_me','userName')) {
				var customerType='EC';
			} else {
				var customerType='NC';
			}
			$('a.modal-trigger').each(function(){
				var myId=$(this).attr('id');
				if(myId!='mam-setup-myaccount'){
					var myType=$.centurycore.utility.getLinkTypeById(myId,subcookiejar.fetch('profile_cookie','shoppingDomain'),customerType);
					if(myType=='ajax'){
						target =
						$.centurycore.utility.getLinkEndpointById(myId,subcookiejar.fetch('profile_cookie','shoppingDomain'),customerType);
						$.ajax({
							type: "GET",
							url: target
						}).done(function( msg ) {
							var tip = $('#ajax-content-div_'+myId);
							tip.html(msg);
						});
					}
				}
			}); 
		} else if(subcookiejar.fetch('profile_cookie','shoppingDomain')=='OOR'){ 
			//pop the modal 
			$('#zam_zip-code').val($('#header-zip').val());
			$('#zam-modal').jqmShow();
			$("input[name='targetRedirect']").val('dd_navigation-change-zip-btn');
		}
	}