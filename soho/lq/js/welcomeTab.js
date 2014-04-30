//
// Get a cookie by name
//
function getCookie(cName) {
    if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart != -1) {
            cStart = cStart + cName.length + 1;
            cEnd = document.cookie.indexOf(";", cStart);
            
            if (cEnd == -1) {
                cEnd = document.cookie.length;
            }

            return unescape(document.cookie.substring(cStart, cEnd));
        }
    }

    return "";
}

//
// Parse the jqCookieJar_cState cookie into global variables
//
function parseJqCookieJar_cState() {

    //alert("Calling parseJqCookieJar_cState");

    var state = "";
    var tn = "";
    var address = "";
    var city = "";
    var zip = "";
    var cookie = getCookie('jqCookieJar_cState');
    var jsonObj = null;
    var locType = "";
    var spanLocationElem = document.getElementById('spanServiceLocation');
    var spanLocationText = "<span class='sbr_address'>&nbsp;<\/span><\/span>";

    if (cookie != null && cookie != "") {
        jsonObj = eval('(' + cookie + ')');

        if (jsonObj.tn != null) {
            tn = jsonObj.tn;
            locType = "tn";
        }

        if (jsonObj.zip != null) {
            zip = jsonObj.zip;
            locType = "zip";
        }

        if (jsonObj.state != null) {
            state = jsonObj.state;
            state = state.replace("+", " ");
            if (locType == "")
            {
                locType = "state";
            }
        }

        if (jsonObj.address != null) {
            address = jsonObj.address;
            var last =address.lastIndexOf('+');
            var i=0;
            while(i<last){
                address = address.replace('+',' ');
                i++;
            }
            locType = "address";
        }

        if (jsonObj.city != null) {
            city = jsonObj.city;
            var last =city.lastIndexOf('+');
            var i=0;
            while(i<last){
                city = city.replace('+',' ');
                i++;
            }
        }

    }

    var spanLocationElem = document.getElementById('spanServiceLocation');
    var spanLocationText = " <span class='sbr_address'>&nbsp;<\/span><\/span>";

    if (locType == "tn") {
        spanLocationText = " <span class='sbr_address'>" + tn + "<\/span><\/span>";
    }

    if (locType == "state") {
        spanLocationText = " <span class='sbr_address'>" + state + "<\/span><\/span>";
    }

    if (locType == "zip") {
        spanLocationText = " <span class='sbr_address'>" + zip + "<\/span><\/span>";
    }

    if (locType == "address") {
        spanLocationText = " <span class='sbr_address'>" + address + "<br\/>" + city + ", " + state + " " + zip + "<\/span><\/span>";
    }

    if (spanLocationElem != null) {
        spanLocationElem.innerHTML = spanLocationText;
    }
}

$(document).ready(function(){
    parseJqCookieJar_cState()
});
