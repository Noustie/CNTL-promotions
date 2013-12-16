		var refType = "";
		function loadModal(file,refParm){
			refType = refParm;
			$("#modalDialog").load(file, function(){
				$("#modalDialog").modal({
					overlayClose:true,
					autoPosition:true,
					opacity:60,
					onClose: function(dialog){
						refType = "";
						$.modal.close();
						$("#modalDialog").html("");
					}
				});
			});
		}
		function openPopup(pageURL,title,w,h) {
			var left = (screen.width/2)-(w/2);
			var top = (screen.height/2)-(h/2) - 75;
			var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
		}
		function reloadModal(url,height){
			$("#simplemodal-container").fadeOut("fast", function(){
				$('#simplemodal-container').height(height);
				$("#modalContent").load(url);
				$('#simplemodal-container').fadeIn("slow", function(){});
					$.modal.setPosition();
			});
		}

		function setOmnitureVars(){
			s.linkTrackVars= "pageName,server,channel,eVar41,prop3,eVar24,prop6,prop38,eVar48,prop39,eVar49,prop52,eVar56";
			s.pageName="ctl|rsd|smb_cam";
			s.server="centurylink.com";
			s.channel=s.eVar41="smb";
			s.prop3=s.eVar24="Unknown";
			s.prop6="clinkbusiness,clinkcompany,clinkCTLdomain";
			s.prop38=s.eVar48="modal";
			s.prop39=s.eVar49="smb_cam_modal";
			s.prop52=s.eVar56="ctl";
			void(s.t());
		}
		function setModalOmnitureVars(parm_PageName,parm_channel,parm_custType,parm_modalType,parm_event,parm_registryMethod,parm_registryDetail,parm_sysError){
			s.linkTrackVars = "pageName,server,channel,eVar51,prop3,eVar24,prop6,prop38,eVar48,prop39,eVar49,prop52,eVar56,prop51,eVar60,events";
			s.linkTrackEvents = parm_event;
			s.server = "centurylink.com";
			s.prop6 = "clinkbusiness,clinkcompany,clinkCTLdomain";
			s.prop38=s.eVar48 = "modal";
			s.prop52=s.eVar56 = "ctl";
			s.pageName = parm_PageName; //ie. ctl|corp|zam
			s.channel=s.eVar51 = parm_channel; //ie. corp
			s.prop3=s.eVar24 = parm_custType; //ie. unknown
			s.prop39=s.eVar49 = parm_modalType; //ie. zam_modal
			s.prop51=s.eVar51 = parm_registryMethod; //ie. locator|zam
			s.eVar60 = parm_registryDetail; //ie. zam:[zipcode]
			s.prop4=s.eVar28 = parm_sysError; //ie. zam - [system error text] - [modal display text]
			s.events = parm_event;
			void(s.t());
			setTimeout("return",2500); //
		}


		function toggleDisabled(elem){
			if ( $(elem).is(":visible") ){
				$(elem).hide();
				$(elem).after('<button id="loading" class="disabled" disabled="disabled">Loading</button>');
			} else {
				$("#loading").remove();
				$(elem).show();
			}
		}

		$(document).ready(function() {
			//add modal container to page
			if ($("#modalDialog").length == 0) {$("#main").after('<div id="modalDialog" style="display:block"></div>');}

			//handle removal of search backgrounds on focus (not needed on real page)
			$('#searchText').focus(function() {
				$(this).prev("label").css("background-image","none");
				$(this).prev("label").html("");
			});

			//add click events for ZAM
			$.each($(".loadZAMmodal"), function(i,thisElem) {
				var modalType = "Support";
				if ( $(thisElem).html() == "Customer Support" ) {
					modalType = "Support";
				} else if ( $(thisElem).html() == "Contact Us" ) {
					modalType = "ContactUs";
				} else if ( $(thisElem).html() == "Find a Store" ) {
					modalType = "storeLocator";
				} else if ( $(thisElem).hasClass('search') ) {
					modalType = "Search";
				}
				$(thisElem).attr("href","#");
				$(thisElem).click(function() {
					loadModal('http://www.centurylink.com/static/Pages/Modals/ZAM.txt',modalType);
					return false;
				});
			});

			//add click events for CTAM
			$.each($(".loadCTAMmodal"), function(i,thisElem) {
				$(thisElem).attr("href","#");
				$(thisElem).click(function() {
					loadModal('http://www.centurylink.com/static/Pages/Modals/CTAM.txt','Change');
					setOmnitureVars();
					return false;
				});
			});

			//add click events for MAM
			$.each($(".loadMAMmodal"), function(i,thisElem) {
				if ( $(thisElem).parent().hasClass('aboutSectn') ){
					$(thisElem).attr("href","#");
					$(thisElem).click(function() {
						loadModal('http://www.centurylink.com/static/Pages/Modals/MAM.txt','MyAcct');
						return false;
					});
				}
			});

		});
