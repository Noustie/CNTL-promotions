/*** Omniture SiteCatalyst Unique PageName Tagging ***/

for(i=0;i<document.forms.length;i++){
if(location.pathname=="/Pages/Personal/Television/index.html"){if(typeof(pageNameExt)=='undefined'&&!document.getElementById('location'))var pageNameExt="_PRE"}
else if(typeof(pageNameExt)=='undefined'&&document.forms[i].id.match(/availForm|newCustomers|continueForm/))var pageNameExt="_PRE"};
function tagAddressSelect(){$('#address').change(function(){trackAvailCheck('NOrder_Address');this.form.submit()});}
function trackAvailCheck(cType){
	s.linkTrackVars='eVar12,events';
	s.linkTrackEvents='event8';
	s.events='event8';
	s.eVar12='CheckAvail_'+cType;
	void(s.tl());//alert('CheckAvail_'+cType);
	void(pixel_conversion('2034')); //icrossing tracking call
}
function makePOSTRequest(http_request, url, parameters, destination) {
	if (http_request) {
		if(typeof(destination)=="string") destination = document.getElementById(destination);
		http_request.open('POST', url, true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.setRequestHeader("Content-length", parameters.length);
		http_request.setRequestHeader("Connection", "close");
		http_request.send(parameters);
		http_request.onreadystatechange = function() {
			if (http_request.readyState == 4) {
				if (http_request.status == 200) {
					result = http_request.responseText;
					destination.innerHTML = result;
					tagAddressSelect();
					return true;
				} else {
					if (http_request.readyState == 4) {
						if (http_request.status == 200) {
							result = http_request.responseText;
							destination.innerHTML = result;
							tagAddressSelect();
							return true;
						} else {
							destination.innerHTML = 'An error has occurred - please try again later.';
							return false;
						}
					}
				}
			}
		}
	} else {
	   return false;
	}
}
$('form#newCustomers').submit(function(){trackAvailCheck('New_Zip');});
$('form#continueForm').submit(function(){trackAvailCheck('Existing_Phone');});

if ( typeof s_account != 'undefined' ) s.prop6=s_account;

/*** Omniture SiteCatalyst ***/
if(typeof pageName != 'undefined' && pageName ) s.pageName=pageName;
if(typeof eBiz_pageName != 'undefined' && eBiz_pageName) s.pageName=eBiz_pageName;
if(typeof eBiz_server != 'undefined' && eBiz_server) s.server=eBiz_server
if(typeof eBiz_channel != 'undefined' && eBiz_channel) s.channel=eBiz_channel;
if(typeof eBiz_hier1 != 'undefined' && eBiz_hier1) s.hier1=eBiz_hier1;
if(typeof eBiz_prop3 != 'undefined' && eBiz_prop3) s.prop3=eBiz_prop3;
if(typeof eBiz_prop6 != 'undefined' && eBiz_prop6) s.prop6=eBiz_prop6;
if(typeof eBiz_prop8 != 'undefined' && eBiz_prop8) s.prop8=eBiz_prop8;
if(typeof eBiz_prop20 != 'undefined' && eBiz_prop20) s.prop20=eBiz_prop20;
if(typeof eBiz_prop24 != 'undefined' && eBiz_prop24) s.prop24=eBiz_prop24;
if(typeof eBiz_prop25 != 'undefined' && eBiz_prop25) s.prop25=eBiz_prop25;
if(typeof eBiz_prop26 != 'undefined' && eBiz_prop26) s.prop26=eBiz_prop26;
if(typeof eBiz_prop27 != 'undefined' && eBiz_prop27) s.prop27=eBiz_prop27;
if(typeof eBiz_prop38 != 'undefined' && eBiz_prop38) s.prop38=eBiz_prop38;
if(typeof eBiz_prop39 != 'undefined' && eBiz_prop39) s.prop39=eBiz_prop39;
if(typeof eBiz_prop51 != 'undefined' && eBiz_prop51) s.prop51=eBiz_prop51;
if(typeof eBiz_prop52 != 'undefined' && eBiz_prop52) s.prop52=eBiz_prop52;
if(typeof eBiz_evar24 != 'undefined' && eBiz_evar24) s.eVar24=eBiz_evar24;
if(typeof eBiz_evar27 != 'undefined' && eBiz_evar27) s.eVar27=eBiz_evar27;
if(typeof eBiz_evar35 != 'undefined' && eBiz_evar35) s.eVar35=eBiz_evar35;
if(typeof eBiz_evar41 != 'undefined' && eBiz_evar41) s.eVar41=eBiz_channel;
if(typeof eBiz_evar48 != 'undefined' && eBiz_evar48) s.eVar48=eBiz_evar48;
if(typeof eBiz_evar49 != 'undefined' && eBiz_evar49) s.eVar49=eBiz_evar49;
if(typeof eBiz_evar51 != 'undefined' && eBiz_evar51) s.eVar51=eBiz_evar51;
if(typeof eBiz_evar53 != 'undefined' && eBiz_evar53) s.eVar53=eBiz_evar53;
if(typeof eBiz_evar54 != 'undefined' && eBiz_evar54) s.eVar54=eBiz_evar54;
if(typeof eBiz_evar55 != 'undefined' && eBiz_evar55) s.eVar55=eBiz_evar55;
if(typeof eBiz_evar56 != 'undefined' && eBiz_evar56) s.eVar56=eBiz_evar56;
if(typeof eBiz_evar59 != 'undefined' && eBiz_evar59) s.eVar59=eBiz_evar59;
if(typeof eBiz_evar60 != 'undefined' && eBiz_evar60) s.eVar60=eBiz_evar60;
if(typeof eBiz_evar66 != 'undefined' && eBiz_evar66) s.eVar66=eBiz_evar66;
if(typeof eBiz_events != 'undefined' && eBiz_events) s.events=eBiz_events;

s_code=s.t();

