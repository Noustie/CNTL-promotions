if(typeof(lpExist) == "undefined")
{
	var lpMTagConfig = {
	        'lpServer' : "sales.liveperson.net",
	        'lpNumber' : "86584264",
	        'lpProtocol' : (document.location.toString().indexOf("https:")==0) ? "https" : "http",
			'sendCookies' : "true"
		}
	lpExist = "yes";
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
	
	// This is needed for afterStartPage to work
	if(typeof(lpMTagConfig.ifVisitorCode)=='undefined') {lpMTagConfig.ifVisitorCode = []; }
	//Variables Arrays - By Scope
	
	if (typeof(lpMTagConfig.pageVar)=='undefined') lpMTagConfig.pageVar = new Array();
	if (typeof(lpMTagConfig.sessionVar)=='undefined') lpMTagConfig.sessionVar = new Array();
	if (typeof(lpMTagConfig.visitorVar)=='undefined') lpMTagConfig.visitorVar = new Array();
	
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
		if (typeof(lpUnit)=='undefined')	var lpUnit='residential';
		if (typeof(lpLanguage)=='undefined')	var lpLanguage='english';
		if(typeof(lpAddVars)!="undefined")	{
		lpAddVars('page','unit',lpUnit);
		lpAddVars('session','language', lpLanguage);
		}
		lpMTagConfig.defaultInvite = "chat-" + lpUnit + lpLanguage;
		}catch(e){}
}

// Creating button override object
if (typeof(lpMTagConfig.db1)=='undefined') {
	lpMTagConfig.db1 = new Object();
}

// Button override ///////////////////////////////////////////
lpMTagConfig.db1.dbStart = function (btname)
{
    try{
      //keep the name, so we can destroy it later if needed
	  if(typeof(lpMTagConfig.arrCurrentButtons)=='undefined')
		lpMTagConfig.arrCurrentButtons = [];
	
       	lpMTagConfig.arrCurrentButtons[lpMTagConfig.arrCurrentButtons.length] = btname;
   }catch(e){}
   
   return true;
}
//////////////////////////////////////////////////
/*
This code sample uses JQuery but can be modified to work with other Javascript frameworks
//Prerequisites:
1. Add an id attribute to the mTag.js script tag in lpAddMonitorTag with the value 'lpScriptTag'
2. Save any existing button object in lpMTagConfig.arrCurrentButtons

// Paratmers
vars - JSON object with list of variables to pass to lpAddVar - sample: {'vars' : [ {'scope':'session', 'name':'skill', 'value':'sales'}, {'scope':'session', 'name':'category', 'value':'electronics'} ]}
buttons - array of JSON objects with buttons' definitions - format should be identical to standard button definition
*/
function reloadMTag(vars, buttons){
	var i=0;
	lpMTagConfig.pageVar = new Array();
    lpMTagConfig.sessionVar = new Array();
    lpMTagConfig.visitorVar = new Array();
    lpMTagConfig.dynButton = new Array();
 
    //remove existing buttons
	if(typeof(lpMTagConfig.arrCurrentButtons)!="undefined" && lpMTagConfig.arrCurrentButtons.length>0){
		for(i=0;i<lpMTagConfig.arrCurrentButtons.length;i++){
			internalBt = eval(lpMTagConfig.arrCurrentButtons[i]);
			if(internalBt!=null) {
				 delete internalBt;
			}
		}
	}
    //remove mTag.js
	if ($('#lpScriptTag').length>0) $('#lpScriptTag').remove();
	if (typeof(lpMTag)!='undefined') {
               clearTimeout(lpMTag.lpLoopTimer);             
     }
    
	//recreate button array	
	if(buttons !=null ){
		lpMTagConfig.dynButton = buttons;
	}
	
	//re-populate vars
	if(vars.vars !=null && vars.vars.length>0){
		for(i=0;i<vars.vars.length;i++){
			lpAddVars(vars.vars[i].scope, vars.vars[i].name, vars.vars[i].value);
		}
	}
	
	lpMTagConfig.lpTagLoaded = false;		
    lpAddMonitorTag();
}