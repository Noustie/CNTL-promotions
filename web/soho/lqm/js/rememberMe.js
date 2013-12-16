/*
rememberMe.js
This is a utility script which sets and gets the QwestRememberMe Cookie.
*/

// Sets Remember Me cookie 
function setRememberMe(streetAddress1, streetAddress2, unitType, unitNumber, city, state, zipCode, npa, nxx, line,userName, appId) {
	
	var rmCookieValue = "";
	// Set expire date for 45days
	var expireDate = getExpDate(45,0,0);
	
	if (streetAddress1 != "" || streetAddress1 != null) {
		rmCookieValue = rmCookieValue + "streetAddress1:" + streetAddress1 + "~";
	}
	if (streetAddress2 != "" || streetAddress2 != null) {
		rmCookieValue = rmCookieValue + "streetAddress2:" + streetAddress2 + "~";
	}
	if (unitType != "" || unitType != null) {
		rmCookieValue = rmCookieValue + "unitType:" + unitType + "~";
	}	
	if (unitNumber != "" || unitNumber != null) {
		rmCookieValue = rmCookieValue + "unitNumber:" + unitNumber + "~";
	}	
	if (city != "" || city != null) {
		rmCookieValue = rmCookieValue + "city:" + city + "~";
	}	
	if (state != "" || state != null) {
		rmCookieValue = rmCookieValue + "state:" + state + "~";
	}	
	if (zipCode != "" || zipCode != null) {
		rmCookieValue = rmCookieValue + "zipCode:" + zipCode + "~";
	}	
	if (npa != "" || npa != null) {
		rmCookieValue = rmCookieValue + "npa:" + npa + "~";
	}	
	if (nxx != "" || nxx != null) {
		rmCookieValue = rmCookieValue + "nxx:" + nxx + "~";
	}
	if (line != "" || line != null) {
		rmCookieValue = rmCookieValue + "line:" + line + "~";
	}
	if (appId != "" || appId != null) {
		rmCookieValue = rmCookieValue + "appId:" + appId + "~";
	}
	if(userName != "" || userName != null){
		rmCookieValue = rmCookieValue + "userName:" + userName + "~";
	}


	var domains = document.domain;
	var lastIndex = domains.lastIndexOf(".");	
	var lastPart = domains.substring(lastIndex+1, domains.length);
	var domainsRemovedLast = domains.substring(0,lastIndex);
	var secondLastIndex = domainsRemovedLast.lastIndexOf(".");
	var secontLastPart = domainsRemovedLast.substring(secondLastIndex+1, domainsRemovedLast.length);
	var cookieDomains = secontLastPart + "." + lastPart;

//	var index = domains.indexOf(".");
//	domains = domains.substring(index+1,domains.length);
	
	//alert("expireDate : "+expireDate);
	if (rmCookieValue != "") {
	
		setCookie1('QwestRememberMe', rmCookieValue, 45, '/',cookieDomains,'');
	}
}

// Gets Remember Me Cookie
function getRememberMe() { 
	var cookieValue = "";
	if (hasRememberMeCookie()) {
		cookieValue = getCookie('QwestRememberMe');		
	} else {
		cookieValue = "";
	}
	
	return cookieValue;
}

// Utility Function to set genaric cookie
// TODO: Replace with global cookie utility script
function setCookie1( name, value, days, path, domain, secure )
{

	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
		var domains = "domain="+domain;
		document.cookie = name+"="+value+expires+"; path=/;"+domains;
		
	}
	
//document.cookie = name + "=" +escape( value ) +
//	( ( expires ) ? ";expires=" + expires : "" ) +
//	( ( path ) ? ";path=" + path : "" ) +
//	( ( domain ) ? ";domain=" + domain : "" ) +
//	( ( secure ) ? ";secure" : "" );

}

// Utility Function to get a generic cookie
// TODO: Replace with global cookie utility script
function getCookie( check_name ) {
	
	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f

	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		// now we'll split apart each name=value pair
		a_temp_cookie = a_all_cookies[i].split( '=' );


		// and trim left/right whitespace while we're at it
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

		// if the extracted name matches passed check_name
		if ( cookie_name == check_name )
		{
			b_cookie_found = true;
			// we need to handle case where cookie has no value but exists (no = sign, that is):
			if ( a_temp_cookie.length > 1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );				
			}
			// note that in cases where cookie is initialized but no value, null is returned
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found )
	{
		return null;
	}
}

// this deletes the cookie when called
// TODO: Replace with global cookie utility script
function deleteCookie( name, path, domain ) {
	
if ( getCookie( name ) ) document.cookie = name + "=" +
( ( path ) ? ";path=" + path : "") +
( ( domain ) ? ";domain=" + domain : "" ) +
";expires=Thu, 01-Jan-1970 00:00:01 GMT";

}

// this deletes the cookie when called
// TODO: Replace with global cookie utility script
function deleteRememberCookie(name) {

	var domains = document.domain;
	var lastIndex = domains.lastIndexOf(".");	
	var lastPart = domains.substring(lastIndex+1, domains.length);
	var domainsRemovedLast = domains.substring(0,lastIndex);
	var secondLastIndex = domainsRemovedLast.lastIndexOf(".");
	var secontLastPart = domainsRemovedLast.substring(secondLastIndex+1, domainsRemovedLast.length);
	var cookieDomains = "."+secontLastPart + "." + lastPart;
	
    var domain_string = "; domain=" + cookieDomains;
 
    var cookieVal= name +"=; max-age=0; path=/" + domain_string;
	document.cookie = cookieVal;

}

// Checks to see if cookie exists
function hasRememberMeCookie() {
	//alert("Inside has RememberMeCookie");
	var hasCookie = false;
	var cookieValue = getCookie('QwestRememberMe');
	
	if (cookieValue == null ||  cookieValue == "") {
		hasCookie = false;
	} else {
		hasCookie = true;
	}
	//alert("RememberMeCookie present :  " +hasCookie);
	return hasCookie;
}

// utility function to retrieve a future expiration date in proper format;
// pass three integer parameters for the number of days, hours,
// and minutes from now you want the cookie to expire; all three
// parameters required, so use zeros where appropriate
// TODO: Replace with global cookie utility script
function getExpDate(days, hours, minutes) {
    var expDate = new Date();
    if (typeof days == "number" && typeof hours == "number" && typeof hours == "number") {
        expDate.setDate(expDate.getDate() + parseInt(days));
        expDate.setHours(expDate.getHours() + parseInt(hours));
        expDate.setMinutes(expDate.getMinutes() + parseInt(minutes));
        return expDate.toGMTString();
    }
}

//returns the zip value from cookie
function getZipValue(){
	var cookieValue = getRememberMe();
	if (cookieValue != "") {
		var cookiePairs = cookieValue.split("~");
		var cookiePair = "";
		var cookiePairContent = "";
		for(i=0;i<cookiePairs.length;i++){	
			cookiePair = cookiePairs[i];
			if (cookiePair != "") {
				cookiePairContent = cookiePair.split(":");
				if(cookiePairContent.length > 1){
					if(cookiePairContent[0]=="zipCode"){
						return cookiePairContent[1];
					}
				}else{
					return "";
				}
			}			
		}
	}
	return "";
}
//returns the userName of myAccount value from cookie
function getUserNameValue(){
	var cookieValue = getRememberMe();
	if (cookieValue != "") {
		var cookiePairs = cookieValue.split("~");
		var cookiePair = "";
		var cookiePairContent = "";
		for(i=0;i<cookiePairs.length;i++){	
			cookiePair = cookiePairs[i];
			if (cookiePair != "") {
				cookiePairContent = cookiePair.split(":");
				if(cookiePairContent.length > 1){
					if(cookiePairContent[0]=="userName"){
						return cookiePairContent[1];
					}
				}else{
					return "";
				}
			}			
		}
	}
	return "";
}

//returns the address values from cookie in array format
function getAddressValue(){
	var cookieValue = getRememberMe();
	var addressArray = new Array(6);
	for(i=0;i<addressArray.length;i++){
		addressArray[i] = "";
	}	
	if (cookieValue != "") {
		var cookiePairs = cookieValue.split("~");
		var cookiePair = "";
		var cookiePairContent = "";
		for(i=0;i<cookiePairs.length;i++){	
			cookiePair = cookiePairs[i];
			if (cookiePair != "") {
				cookiePairContent = cookiePair.split(":");
				if(cookiePairContent.length > 1){
					if(cookiePairContent[0]=="streetAddress1"){
						addressArray[0] = cookiePairContent[1];
					}else if(cookiePairContent[0]=="unitType"){
						addressArray[1] = cookiePairContent[1];
					}else if(cookiePairContent[0]=="unitNumber"){
						addressArray[2] = cookiePairContent[1];
					}else if(cookiePairContent[0]=="city"){
						addressArray[3] = cookiePairContent[1];
					}else if(cookiePairContent[0]=="state"){
						addressArray[4] = cookiePairContent[1];
					}else if(cookiePairContent[0]=="zipCode"){
						addressArray[5] = cookiePairContent[1];
					}
				}
			}			
		}
	}
				
	return addressArray;
}

//returns the npa-nxx-line values in array format
function getTNValue(){
	var cookieValue = getRememberMe();
	var npaNxxLineArray = new Array(3);
	npaNxxLineArray[0] = "";
	npaNxxLineArray[1] = "";
	npaNxxLineArray[2] = "";
	if (cookieValue != "") {
		var cookiePairs = cookieValue.split("~");
		var cookiePair = "";
		var cookiePairContent = "";
		for(i=0;i<cookiePairs.length;i++){	
			cookiePair = cookiePairs[i];
			if (cookiePair != "") {
				cookiePairContent = cookiePair.split(":");
				if(cookiePairContent.length > 1){
					if(cookiePairContent[0]=="npa"){
						npaNxxLineArray[0] = cookiePairContent[1];
					}else if(cookiePairContent[0]=="nxx"){
						npaNxxLineArray[1] = cookiePairContent[1];
					}else if(cookiePairContent[0]=="line"){
						npaNxxLineArray[2] = cookiePairContent[1];
					}
				}
			}			
		}
	}
				
	return npaNxxLineArray;
}

//Deals with the prepopulation of only check 
//availability TN fields
function prePopulateRMCheckAvailTN(){
	try{
		var npaElements = document.getElementsByName("cnpa");
		var nxxElements = document.getElementsByName("cnxx");
		var lineNumber = document.getElementsByName("clineNumber");
		var npaNxxLineArray = getTNValue();
		if(npaElements.length>0 && nxxElements.length>0 && lineNumber.length>0){
			if(!(npaNxxLineArray[0] == "" || npaNxxLineArray[1] == ""
								|| npaNxxLineArray[2] == "")){
				for(i=0;i<npaElements.length;i++){
					npaElements[i].value = npaNxxLineArray[0];
					nxxElements[i].value = npaNxxLineArray[1];
					lineNumber[i].value = npaNxxLineArray[2];
				}
			}
		}
	}catch(e){}
}
//Function that does the prepopulation
function prePopulateRMFields(){
	try{
		var alreadyPrepopulated = false;
		if(!alreadyPrepopulated){
			var userNameElements = document.getElementsByName("userName");
			userNameElements = getActiveElements(userNameElements);
			var userNameValue = getUserNameValue();
			if(userNameValue!=""){
				for(i=0;i<userNameElements.length;i++){
					userNameElements[i].value = userNameValue;
					alreadyPrepopulated = true;
				}
			}
		}

		if(!alreadyPrepopulated){
			var npaElements = document.getElementsByName("npa");
			var nxxElements = document.getElementsByName("nxx");
			var lineNumber = document.getElementsByName("lineNumber");
			var npaNxxLineArray = getTNValue();
			npaElements = getActiveElements(npaElements);
			nxxElements = getActiveElements(nxxElements);
			lineNumber = getActiveElements(lineNumber);
			if(npaElements.length>0 && nxxElements.length>0 && lineNumber.length>0){
				if(!(npaNxxLineArray[0] == "" || npaNxxLineArray[1] == ""
									|| npaNxxLineArray[2] == "")){
					for(i=0;i<npaElements.length;i++){
						npaElements[i].value = npaNxxLineArray[0];
						nxxElements[i].value = npaNxxLineArray[1];
						lineNumber[i].value = npaNxxLineArray[2];
					}
					alreadyPrepopulated = true;
				}
			}
		}
		
		if(!alreadyPrepopulated){
			var addressLineElements = document.getElementsByName("add1");
			var unitTypeElements = document.getElementsByName("unitT");
			var unitNumberElements = document.getElementsByName("unitNumber");
			var cityElements = document.getElementsByName("city");
			var addressStateElements = document.getElementsByName("addressState");
			var addresszipElements = document.getElementsByName("addresszip");
			addressLineElements = getActiveElements(addressLineElements);
			unitTypeElements = getActiveElements(unitTypeElements);
			unitNumberElements = getActiveElements(unitNumberElements);
			cityElements = getActiveElements(cityElements);
			addressStateElements = getActiveElements(addressStateElements);
			addresszipElements = getActiveElements(addresszipElements);
			var addressArray = getAddressValue();
			if(addressArray[0]!=""){
				for(i=0;i<addressLineElements.length;i++){
					addressLineElements[i].value = addressArray[0];
				}
			}
			if(addressArray[1]!=""){
				for(i=0;i<unitTypeElements.length;i++){
					unitTypeElements[i].value = addressArray[1];
				}
			}
			if(addressArray[2]!=""){
				for(i=0;i<unitNumberElements.length;i++){
					unitNumberElements[i].value = addressArray[2];
				}
			}
			if(addressArray[3]!=""){
				for(i=0;i<cityElements.length;i++){
					cityElements[i].value = addressArray[3];
				}
			}
			if(addressArray[4]!=""){
				for(i=0;i<addressStateElements.length;i++){
					addressStateElements[i].value = addressArray[4];
				}
			}
			if(addressArray[5]!=""){
				for(i=0;i<addresszipElements.length;i++){
					addresszipElements[i].value = addressArray[5];
				}
			}
		}
		
		if(!alreadyPrepopulated){
			var zipCodeElements = document.getElementsByName("addresszip");
			zipCodeElements = getActiveElements(zipCodeElements);
			var zipValue = getZipValue();
			if(zipValue!=""){
				for(i=0;i<zipCodeElements.length;i++){
					zipCodeElements[i].value = zipValue;
					alreadyPrepopulated = true;
				}
			}
		}
		
		if(alreadyPrepopulated){ 			
			var rmCheckBoxes = document.getElementsByName("rememberMe");
			for (i=0; i<rmCheckBoxes.length; i++){
					rmCheckBoxes[i].checked=alreadyPrepopulated;
				}
		}
		
	}catch(e){}
}
//function remove hidden input boxes
function getActiveElements(elements){
	var tempElements = new Array();
	var count = 0;
	for(i=0;i<elements.length;i++){
		if(elements[i].type && elements[i].type.toLowerCase()!="hidden"){
			tempElements[count] = elements[i];
			count++;
		}
	}
	return tempElements;
}
//function to check/uncheck all the Remember Me check boxes
//simultaneously.
function checkUnCheckAllRMs(element){
	try{
		if(element){
			var rmCheckBoxes = document.getElementsByName("rememberMe");
			var rmValue = element.checked;
			for (i=0; i<rmCheckBoxes.length; i++){
				rmCheckBoxes[i].checked=rmValue;
			}
		}
	}catch(e){}
}