var AJAX_TIMEOUT=8000;
var SERVICE_DOMAIN="";
var LOCATE_BY_ZIP_URL="/locate/locateByZip.html";
var LOCATE_BY_ADDRESS_URL="/locate/locateByAddress.html";
var LOCATE_BY_PHONE_URL="/locate/locateByPhone.html";
var LOCATE_BY_PHONE_ACCOUNT_URL="/locate/locateByPhoneOrAccount.html";
var LOCATE_BY_REMEMBER_ME_URL="/locate/locateByRememberMe.html";
var SORRY_URL="http://sorry.centurylink.com";
var RETRY=true;
var locatorClient;
var requestorId;
var attempt = 1;
var startTm = new Date();

/*
 * Public function to initialize ajax and other locator functionality.  This function must be called from $document.ready
*/
function initializeLocator(requestor, serviceDomain) {
  //set the client timeout on all ajax calls to 15 seconds
  $.ajaxSetup({timeout:AJAX_TIMEOUT, cache:false});
  //register the handleAjaxError method to be invoked on all ajaxErrors
    $(document).ajaxError(function(event, xhr, options){ handleAjaxError(event, xhr, options);});
  //handle same origin issue for javascript subdomains
  $(document).domain="centurylink.com";
  // load and initialize locatorClient
  requestorId=requestor;
  if(serviceDomain) {
    SERVICE_DOMAIN=serviceDomain;
  }
  locatorClient = new LocatorClient();
}
function getProfileFromZip(zipCode, rememberMe, callback) {
    locatorClient.locateByZip(zipCode, requestorId, rememberMe, callback, RETRY);
}
function getProfileFromAddress(streetAddress, unitType, unitNumber, city, state, zipCode, rememberMe, callback){
    locatorClient.locateByAddress(streetAddress, unitType, unitNumber, city, state, zipCode, requestorId, rememberMe, callback, RETRY);
}
function getProfileFromPhone(phoneNumber, rememberMe, callback){
  locatorClient.locateByPhone(phoneNumber, requestorId, rememberMe, callback, RETRY);
}
function getProfileFromPhoneOrAccount(entryValue, rememberMe, callback){
  locatorClient.locateByPhoneOrAccount(entryValue, requestorId, rememberMe, callback, RETRY);
}
function getProfileFromRememberMe(callback) {
  locatorClient.locateByRememberMe(requestorId, callback, RETRY);
}
/*******************************************************************************************
 *  FUNCTIONS DEFINED BELOW ARE INTENDED ONLY TO BE USED INTERNAL TO THIS FILE
 *  USE AT YOUR OWN RISK.  DO NOT MODIFY.
 *******************************************************************************************/
function LocatorClient(){
  var available=true;
  var locatorResponse;
  var clientCallbackFunction;
  var acquireLock= function() { available=false; }
  var releaseLock= function() {available=true;}
  
  var buildZipRequest = function(zipCode, requestorId, rememberMe) {
    if(!rememberMe) {
      rememberMe="N";
    }
    var request = new Object();
    request.requestorId=requestorId;
    request.rememberMe=rememberMe;
    request.zipCode=zipCode;
    return request;
  }
  var buildAddressRequest = function(streetAddress, unitType, unitNumber, city, state, zipCode, requestorId, rememberMe) {
    if(!rememberMe) {
      rememberMe="N";
    }
    var request = new Object();
    request.streetAddress1=streetAddress;
    request.unitType=unitType;
    request.unitNumber=unitNumber;
    request.city=city;
    request.state=state;
    request.zipCode=zipCode;
    request.requestorId=requestorId;
    request.rememberMe=rememberMe;
    return request;
  }
  var buildPhoneOrAccountRequest = function(entryValue, requestorId, rememberMe) {
    if(!rememberMe) {
      rememberMe="N";
    }
    var time = (new Date()).getTime();
    var request = new Object();
    request.entryValue=entryValue;
    request.requestorId=requestorId;
    request.rememberMe=rememberMe;
    request.t=time;
    return request;
  }
  var buildRememberMeRequest = function(requestorId) { 
    var request = new Object();
    request.requestorId=requestorId;
    return request;
  }
  var setClientCallbackFunction = function(callback) { clientCallbackFunction=callback; }
 
  this.getLocatorResponse = function() {      
        return locatorResponse;       
  }
  var setLocatorResponse = function(data) {
          locatorResponse=data;
  }
   var onSuccess = function(data) {
    releaseLock();
    setLocatorResponse(data);
    clientCallbackFunction(data);
  }

  this.isAvailable= function() { return available; }
  
  this.locateByZip = function(zipCode, requestorId, rememberMe, callback, retryFlag) {
    if(this.isAvailable()){
      acquireLock();
      setLocatorResponse(null);
      setClientCallbackFunction(callback);
      startTm = new Date();
      var request = buildZipRequest(zipCode,requestorId,rememberMe);
      $.ajax({url: SERVICE_DOMAIN+LOCATE_BY_ZIP_URL, 
        data: request, 
        dataType: "jsonp",
        success: onSuccess,
        error: function(xhr, textStatus, errorThrown) 
          {
            if( retryFlag )
            {
              reportOmnitureEvent('zam', zipCode, textStatus+'|'+xhr.status);
              attempt++;
              releaseLock();
              locatorClient.locateByZip(zipCode, requestorId, rememberMe, callback, false);
            }
            else
            {
              reportOmnitureEvent('zam', zipCode, textStatus+'|'+xhr.status);
              releaseLock();
              window.location=SORRY_URL;
            }
          }
        });
    }
  }
  this.locateByAddress = function(streetAddress, unitType, unitNumber, city, state, zipCode, requestorId, rememberMe, callback, retryFlag) {
    if(this.isAvailable()){
      acquireLock();
      setLocatorResponse(null);
      setClientCallbackFunction(callback);
      startTm = new Date();
      var request = buildAddressRequest(streetAddress, unitType, unitNumber, city, state,zipCode,requestorId,rememberMe);
      $.ajax({url: SERVICE_DOMAIN+LOCATE_BY_ADDRESS_URL, 
        data: request, 
        dataType: "jsonp",
        success: onSuccess,
        error: function(xhr, textStatus, errorThrown) 
          {
            var addrStr='str:'+ streetAddress + '; zip:' + zipCode;
            if( retryFlag )
            {
              reportOmnitureEvent('ctam', addrStr, textStatus+'|'+xhr.status);
              attempt++;
              releaseLock();
              locatorClient.locateByAddress(streetAddress, unitType, unitNumber, city, state, zipCode, requestorId, rememberMe, callback, false);
            }
            else
            {
              reportOmnitureEvent('ctam', addrStr, textStatus+'|'+xhr.status);
              releaseLock();
              window.location=SORRY_URL;
            }
          }
        });
    }
  }
  this.locateByPhone = function(entryValue, requestorId, rememberMe, myCallback, retryFlag) {
    
    if(this.isAvailable()){
      acquireLock();
      setLocatorResponse(null);
      setClientCallbackFunction(myCallback);
      startTm = new Date();
      var request = buildPhoneOrAccountRequest(entryValue,requestorId,rememberMe);
      $.ajax({url: SERVICE_DOMAIN+LOCATE_BY_PHONE_URL, 
      data: request, 
      dataType: "jsonp",
      success: onSuccess,
      error: function(xhr, textStatus, errorThrown) 
        {
          if( retryFlag )
          {
            reportOmnitureEvent('ctam', entryValue, textStatus+'|'+xhr.status);
            attempt++;
            releaseLock();
            locatorClient.locateByPhone(entryValue, requestorId, rememberMe, myCallback, false);
          }
          else
          {
            reportOmnitureEvent('ctam', entryValue, textStatus+'|'+xhr.status);
            releaseLock();
            window.location=SORRY_URL;
          }
        }
      });
    }
  }
  this.locateByPhoneOrAccount = function(entryValue, requestorId, rememberMe, callback, retryFlag) {
    if(this.isAvailable()){
      acquireLock();
      setLocatorResponse(null);
      setClientCallbackFunction(callback);
      startTm = new Date();
      var request = buildPhoneOrAccountRequest(entryValue,requestorId,rememberMe);
      $.ajax({url: SERVICE_DOMAIN+LOCATE_BY_PHONE_ACCOUNT_URL, 
        data: request, 
        dataType: "jsonp",
        success: onSuccess,
        error: function(xhr, textStatus, errorThrown) 
          {
            if( retryFlag )
            {
              reportOmnitureEvent('ctamtn', entryValue, textStatus+'|'+xhr.status);
              attempt++;
              releaseLock();
              locatorClient.locateByPhoneOrAccount(entryValue, requestorId, rememberMe, callback, false);
            }
            else
            {
              reportOmnitureEvent('ctamtn', entryValue, textStatus+'|'+xhr.status);
              releaseLock();
              window.location=SORRY_URL;
            }
          }
        });
    }
  }
  this.locateByRememberMe = function(requestorId, callback, retryFlag) {
    if(this.isAvailable()){
      acquireLock();
      setLocatorResponse(null);
      setClientCallbackFunction(callback);
      startTm = new Date();
      var request = buildRememberMeRequest(requestorId);
      $.ajax({url: SERVICE_DOMAIN+LOCATE_BY_REMEMBER_ME_URL, 
        data: request, 
        dataType: "jsonp",
        success: onSuccess,
        error: function(xhr, textStatus, errorThrown) 
          {
            if( retryFlag )
            {
              reportOmnitureEvent('ctam', 'rememberMe', textStatus+'|'+xhr.status);
              attempt++;
              releaseLock();
              locatorClient.locateByRememberMe(requestorId, callback, false);
            }
            else
            {
              reportOmnitureEvent('ctam', 'rememberMe', textStatus+'|'+xhr.status);
              releaseLock();
              window.location=SORRY_URL;
            }
          }
        });
    }
  }
}
/*
 * This function is invoked on every error from any ajax call.  
 * xhr is the XmlHttpRequest and xhr.status would give you the http error code (e.g 404, 302, 500)   options is the ajax settings object and 
 * options.url gives you the url that was being invoked when the error occurred.
 */           
function handleAjaxError(event, xhr, options){
	var current_url = String(window.location);
	if((current_url.indexOf("freeRange/acctMgmt")>-1)||(current_url.indexOf("shop/SMB"))){
	
	}
	else{
		window.location=SORRY_URL;
	}
}

function reportOmnitureEvent(locateType, dataStr, errorMsg )
{
  var d=new Date();
  var runTm = d-startTm;
  var fmtDate = (d.getMonth()+1) + '/' +d.getDate()+ '/' +d.getFullYear() + ' ';
  var fmtTm = d.getHours() + ':'+ d.getMinutes() + ':' + d.getSeconds() + ' '; 
  var gmtOffset = d.getTimezoneOffset() / 60;
  var fmtTz='';
  
  switch(gmtOffset)
  {
  case 5: fmtTz='EST'; break;
  case 6: fmtTz='CST'; break;
  case 7: fmtTz='MST'; break;
  case 8: fmtTz='PST'; break;
  default: fmtTz='GMT+'+ gmtOffset;
  }
  
  var fmtDay = '';
  switch(d.getDay())
  {
    case 0: fmtDay='Sun '; break;
    case 1: fmtDay='Mon '; break;
    case 2: fmtDay='Tue '; break;
    case 3: fmtDay='Wed '; break;
    case 4: fmtDay='Thu '; break;
    case 5: fmtDay='Fri '; break;
    case 6: fmtDay='Sat '; break;
  }
  var dateStr = fmtDay + fmtDate + fmtTm + fmtTz;
  
  var attemptStr = 't'+attempt;
  var locateStr = 'zip';
  if ( locateType == 'ctam' )
    locateStr = 'address';
  else if ( locateType == 'ctamtn')
  {
    locateType = 'ctam';
    locateStr = 'tn';
  }
    
  s.manageVars('clearVars');
  
  s.prop55=s.eVar67= locateType +'|' +errorMsg +'|'+ runTm + '|' + locateStr +'|' + dataStr + '|' + dateStr +  '|' + attemptStr;
  s.events="event56";
  s.t();
}
