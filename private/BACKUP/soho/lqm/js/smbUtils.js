

function getStateValue(stateName) {
		
		var val = "";
		
		if(stateName == "Arizona") {
			val = "AZ";
		} else if(stateName == "Colorado") {
			val = "CO";
		}else if(stateName == "Iowa") {
			val = "IA";
		}else if(stateName == "Idaho") {
			val = "ID";
		}else if(stateName == "Minnesota") {
			val = "MN";
		}else if(stateName == "Montana") {
			val = "MT";
		}else if(stateName == "North Dakota") {
			val = "ND";
		}else if(stateName == "Nebraska") {
			val = "NE";
		}else if(stateName == "New Mexicoo") {
			val = "NM";
		}else if(stateName == "Oregon") {
			val = "OR";
		}else if(stateName == "South Dakota") {
			val = "SD";
		}else if(stateName == "Utah") {
			val = "UT";
		}else if(stateName == "Washington") {
			val = "WA";
		}else if(stateName == "Wyoming") {
			val = "WY";
		}
		return val;
}

<!-- Begin autoTab JavaScript function
	var isNN = (navigator.appName.indexOf("Netscape")!=-1);
// autotab functionality
  function autoTab(input,len, e) {
	var keyCode = (isNN) ? e.which : e.keyCode;
	var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
	if (input.value.length >= len && !containsElement(filter,keyCode)) {
		input.value = input.value.slice(0, len);
		input.form[(getIndex(input)+1) % input.form.length].focus();
	}
	
	function containsElement(arr, ele) {
		var found = false, index = 0;
		while(!found && index < arr.length)
			if(arr[index] == ele)
				found = true;
			else 
				index++;
		return found;
	}
	
	function getIndex(input) {
		var index = -1, i = 0, found = false;
		while (i < input.form.length && index == -1)
			if (input.form[i] == input) index = i;
			else i++; 
		return index;
	}
	return true;
}
//  End autoTab JavaScript function -->

// Quick View JS function.
// Pass the ID that should be displayed.
function showQuickView(id, height, width) {
	var param = '#TB_inline?height='+height+'&width='+width+'&inlineId='+id+'&modal=true';
	tb_show(null, param,false);
}

// Show the Click 2 Call Layer
function showClickToCallLayer() {
    tb_show(null, '#TB_inline?height=350&width=630&inlineId=clickToCallPopup&modal=true',false);
}

function createCampaignCookie(path) {

	var domains = document.domain;
	var lastIndex = domains.lastIndexOf(".");	
	var lastPart = domains.substring(lastIndex+1, domains.length);
	var domainsRemovedLast = domains.substring(0,lastIndex);
	var secondLastIndex = domainsRemovedLast.lastIndexOf(".");
	var secontLastPart = domainsRemovedLast.substring(secondLastIndex+1, domainsRemovedLast.length);
	var cookieDomains = secontLastPart + "." + lastPart;
	var domains = "domain="+cookieDomains; 	
	var value=""; 	
	var expires = "";
	document.cookie = 'campaign'+"="+value+expires+"; path="+path+";"+domains;
}
