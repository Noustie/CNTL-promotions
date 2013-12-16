var lpMTagConfig = {
        'lpServer' : "sales.liveperson.net",
        'lpNumber' : "86584264",
        'lpProtocol' : (document.location.toString().indexOf("https:")==0) ? "https" : "http",
		'sendCookies' : "true"
	}
var lpExist = "yes";
function lpAddMonitorTag(src){if(typeof(src)=='undefined'||typeof(src)=='object'){src=lpMTagConfig.lpMTagSrc?lpMTagConfig.lpMTagSrc:'/hcp/html/mTag.js';}if(src.indexOf('http')!=0){src=lpMTagConfig.lpProtocol+"://"+lpMTagConfig.lpServer+src+'?site='+lpMTagConfig.lpNumber;}else{if(src.indexOf('site=')<0){if(src.indexOf('?')<0)src=src+'?';else src=src+'&';src=src+'site='+lpMTagConfig.lpNumber;}};var s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('charset','iso-8859-1');s.setAttribute('src',src);document.getElementsByTagName('head').item(0).appendChild(s);}


if (window.attachEvent) window.attachEvent('onload',lpAddMonitorTag);
else window.addEventListener("load",lpAddMonitorTag,false);

function lpSendDataSession(variable,varname){
if(typeof(lpMTag)!='undefined' && typeof(lpMTag.lpSendData)!='undefined')
  lpMTag.lpSendData('&SESSIONVAR!'+ variable + '=' + varname, true);
}

function lpSendDataPage(variable,varname){
 if(typeof(lpMTag)!='undefined' && typeof(lpMTag.lpSendData)!='undefined'){
  lpMTag.lpSendData('PAGEVAR!'+ variable + '=' + varname, true);}
}

//Dynamic Buttons Array
if(typeof(lpMTagConfig.dynButton)=="undefined") lpMTagConfig.dynButton=new Array();

//Variables Arrays - By Scope
if (typeof(lpMTagConfig.pageVar)=='undefined') lpMTagConfig.pageVar = new Array();
if (typeof(lpMTagConfig.sessionVar)=='undefined') lpMTagConfig.sessionVar = new Array();
if (typeof(lpMTagConfig.visitorVar)=='undefined') lpMTagConfig.visitorVar = new Array();
if (typeof(lpMTagConfig.ifVisitorCode)=='undefined') { lpMTagConfig.ifVisitorCode = []; }

// Function that sends variables to LP - By Scope
function lpAddVars(scope,name,value) 	{
	if (value != 0 && value != "")  //This is optional, depends if client wants to pass 0 or blank values
	{
	switch (scope){
		case "page":
			lpMTagConfig.pageVar[lpMTagConfig.pageVar.length] = escape(name)+"="+escape(value);
			if (name =="OrderTotal"){
				var name2 = lpUnit + '_OrderTotal';
				lpMTagConfig.pageVar[lpMTagConfig.pageVar.length] = escape(name2)+"="+escape(value);
			}
			break;
		case "session":
			lpMTagConfig.sessionVar[lpMTagConfig.sessionVar.length] = escape(name)+"="+escape(value);
			break;
		case "visitor":
			lpMTagConfig.visitorVar[lpMTagConfig.visitorVar.length] = escape(name)+"="+escape(value);
			break;
		}
	}
}

// The unit variable purpose is to route the chat or call to the designated skill. <LOB> should be replaced with the skill name, i.e. : sales
try{
	if (typeof(lpUnit)=='undefined')	var lpUnit='smallbusiness-voice';
	if (typeof(lpLanguage)=='undefined')	var lpLanguage='english';
	if(typeof(lpAddVars)!="undefined")	{
	lpAddVars('page','unit',lpUnit);
	lpAddVars('session','language', lpLanguage);
	}
	lpMTagConfig.defaultInvite = lpUnit+ "-" +lpLanguage;
	}catch(e){}


if ( location.href.match('soho/lq/promos') ) {
	lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {'name':'voice-smallbusiness-english-promo-1','pid':'lpVoiceButtonDivSmallBizPromo1','afterStartPage': true};
}
if ( location.href.match('soho/lc/promos') ) {
	lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {'name':'voice-smallbusiness-english-centurylink-promo-1','pid':'lpVoiceButtonDivSmallBizCLPromo1','afterStartPage': true};
}
