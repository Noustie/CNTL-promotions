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

/*** Start of Butler Till's DoubleClick Floodlight Tag: Activity name of this tag: CTL HSI Check Availability Page URL of the webpage where the tag is expected to be placed: https://www.centurylink.com/Pages/Personal/Internet/HSI/availability.html Creation Date: 01/22/2010
if(location.pathname=="/Pages/Personal/Internet/HSI/availability.html"){
	if($('h1:contains(Check Internet Access Availability in Your Area)').length>0){
		var axel = Math.random() + "";
		var a = axel * 10000000000000;

		var dblClickFL = $('<iframe>');
		dblClickFL.attr('src',https://fls.doubleclick.net/activityi;src=2417582;type=shopi232;cat=hsict030;ord=1;num=' + a + '?");
		dblClickFL.attr('width','1');
		dblClickFL.attr('height','1');
		dblClickFL.attr('frameborder','0');
		$('body').append(dblClickFL);
	}
}
/*-- End of DoubleClick Floodlight Tag: Please do not remove


/*** Doubleclick onclick tracking
function dblClck_btnClick() {
	/* Start of DoubleClick Floodlight Tag: Activity name of this tag: Embarq CL Universal Check Availability Button. Creation Date: 12/15/2009
	var tag_url="https://fls.doubleclick.net/activityi;src=2417582;type=cavail;cat=embar703;ord=1;num="+Math.floor(Math.random()*999999);
	if(document.getElementById("DCLK_FLDiv")){var flDiv=document.getElementById("DCLK_FLDiv");}
	else{var flDiv=document.body.appendChild(document.createElement("div"));flDiv.id="DCLK_FLDiv";flDiv.style.display="none";}
	var DCLK_FLIframe=document.createElement("iframe");
	DCLK_FLIframe.id="DCLK_FLIframe_"+Math.floor(Math.random()*999999);
	DCLK_FLIframe.src=tag_url;
	flDiv.appendChild(DCLK_FLIframe);
 }

/*** Generic load of Floodlight/DART tag onClick
/*** Use for loading DART tags on buttons, images, etc where click is involved
function genFloodlight_onClick(srcStr) {
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	var tag_url="https://fls.doubleclick.net/activityi;" + srcStr + a + "?";
	if(document.getElementById("genDARTonclick_Div")){var flDiv=document.getElementById("genDARTonclick_Div");}
	else{var flDiv=document.body.appendChild(document.createElement("div"));flDiv.id="genDARTonclick_Div";flDiv.style.display="none";}
	var genDARTiframe=document.createElement("iframe");
	genDARTiframe.id="genDARTonclick_"+Math.floor(Math.random()*999999);
	genDARTiframe.src=tag_url;
	flDiv.appendChild(genDARTiframe);
 }
/*** GLOBAL Floodlight/DART tag

	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	var nowTimestamp = new Date();
	var currDateStr = nowTimestamp.getHours() + ":" + nowTimestamp.getMinutes() + ":" + nowTimestamp.getSeconds() + ":" + nowTimestamp.getMilliseconds();
	var currPage = window.location.pathname;
	if (typeof setU6 == "undefined"){
		var setU6 = "GLOBAL";
	}
	//Start of Rosetta DoubleClick Floodlight Tag: Please do not remove
	//Activity name of this tag: Global Footer Tag
	//URL of the webpage where the tag is expected to be placed: http://www.centurylink.com/
	//This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
	//Creation Date: 12/16/2010
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	var dblClick = $('<iframe>');
	dblClick.attr('src',"https://fls.doubleclick.net/activityi;src=2833013;type=shared;cat=globa539;u7='+currDateStr+';u5='+currPage+';u6='+setU6+';u2=Page;ord=' + a + '?");
	dblClick.attr('width','1');
	dblClick.attr('height','1');
	dblClick.attr('frameborder','0');
	$('body').append(dblClick);

// Variable for ASI */
if ( typeof s_account != 'undefined' ) s.prop6=s_account;

/*** Omniture SiteCatalyst ***/
if(typeof pageName != 'undefined' && pageName ) s.pageName=pageName;
if(typeof eBiz_pageName != 'undefined' && eBiz_pageName)s.pageName=eBiz_pageName;
if(typeof eBiz_server != 'undefined' && eBiz_server)s.server=eBiz_server
if(typeof eBiz_channel != 'undefined' && eBiz_channel)s.channel=eBiz_channel;
if(typeof eBiz_hier1 != 'undefined' && eBiz_hier1)s.hier1=eBiz_hier1;
if(typeof eBiz_prop3 != 'undefined' && eBiz_prop3)s.prop3=eBiz_prop3;
if(typeof eBiz_prop6 != 'undefined' && eBiz_prop6)s.prop6=eBiz_prop6;
if(typeof eBiz_prop8 != 'undefined' && eBiz_prop8)s.prop8=eBiz_prop8;
if(typeof eBiz_prop20 != 'undefined' && eBiz_prop20)s.prop20=eBiz_prop20;
if(typeof eBiz_prop24 != 'undefined' && eBiz_prop24)s.prop24=eBiz_prop24;
if(typeof eBiz_prop25 != 'undefined' && eBiz_prop25)s.prop25=eBiz_prop25;
if(typeof eBiz_prop26 != 'undefined' && eBiz_prop26)s.prop26=eBiz_prop26;
if(typeof eBiz_prop27 != 'undefined' && eBiz_prop27)s.prop27=eBiz_prop27;
if(typeof eBiz_prop38 != 'undefined' && eBiz_prop38)s.prop38=eBiz_prop38;
if(typeof eBiz_prop39 != 'undefined' && eBiz_prop39)s.prop39=eBiz_prop39;
if(typeof eBiz_prop51 != 'undefined' && eBiz_prop51)s.prop51=eBiz_prop51;
if(typeof eBiz_prop52 != 'undefined' && eBiz_prop52)s.prop52=eBiz_prop52;
if(typeof eBiz_evar24 != 'undefined' && eBiz_evar24)s.eVar24=eBiz_evar24;
if(typeof eBiz_evar27 != 'undefined' && eBiz_evar27)s.eVar27=eBiz_evar27;
if(typeof eBiz_evar35 != 'undefined' && eBiz_evar35)s.eVar35=eBiz_evar35;
if(typeof eBiz_evar41 != 'undefined' && eBiz_evar41)s.eVar41=eBiz_channel;
if(typeof eBiz_evar48 != 'undefined' && eBiz_evar48)s.eVar48=eBiz_evar48;
if(typeof eBiz_evar49 != 'undefined' && eBiz_evar49)s.eVar49=eBiz_evar49;
if(typeof eBiz_evar51 != 'undefined' && eBiz_evar51)s.eVar51=eBiz_evar51;
if(typeof eBiz_evar53 != 'undefined' && eBiz_evar53)s.eVar53=eBiz_evar53;
if(typeof eBiz_evar54 != 'undefined' && eBiz_evar54)s.eVar54=eBiz_evar54;
if(typeof eBiz_evar55 != 'undefined' && eBiz_evar55)s.eVar55=eBiz_evar55;
if(typeof eBiz_evar56 != 'undefined' && eBiz_evar56)s.eVar56=eBiz_evar56;
if(typeof eBiz_evar59 != 'undefined' && eBiz_evar59)s.eVar59=eBiz_evar59;
if(typeof eBiz_evar60 != 'undefined' && eBiz_evar60)s.eVar60=eBiz_evar60;
if(typeof eBiz_evar66 != 'undefined' && eBiz_evar66)s.eVar66=eBiz_evar66;
if(typeof eBiz_events != 'undefined' && eBiz_events)s.events=eBiz_events;

s_code=s.t();

//$('head').append(s_code);
/*
if( !s_code ) {
	scode = $('<script>');
	scode.attr('type','text/javascript');
	scode.attr('src','/soho/assets/js/third-party/metrics/s_code.js');
	$('head').append(scode);
}
*/

//document.write('<script type="text/javascript" src="/assets/js/third-party/metrics/s_code.js"></'+'script>');

/*** iCROSSING i2a global tracking code ***/
//document.write('<script type="text/javascript" src="/static/Common/Includes/Lib/Metrix/CTL/i2a.js"></'+'script>');

var i2a = $('<script>');
i2a.attr('type','text/javascript');
i2a.attr('src','/soho/assets/js/third-party/metrics/i2a.js');
$('head').append(i2a);

/*** Opinionlab - Inject the Opinionlab Feedback link into the global footer ***/
//document.write('<script language="javascript" src="/static/Common/Includes/Lib/Metrix/CTL/oo_engine.js"></'+'script>');
//$('#footer>.support>.nav>li:first').removeClass('first').parent().prepend('<li class="first"><a href="javascript:O_LC();">Feedback<img src="/static/Common/Includes/Lib/Metrix/CTL/sm_oo.gif" style="margin-left:6px;border:0"/></a></li>');

/** This appears to fix a jquery-ui problem. Your guess is as good as anybody's. **/
//document.write('&nbsp;');
/*** Foresee Trigger code ***/
//document.write('<script type="text/javascript" src="/static/Common/Includes/Lib/Metrix/Common/foresee/foresee-trigger.js"></script>');
