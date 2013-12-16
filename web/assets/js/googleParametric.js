// This javascript function changes meta data cluster content to Proper Case per client request
function toProperCase(s)
{
  return s.toLowerCase().replace(/^(.)|\s(.)/g, 
          function($1) { return $1.toUpperCase(); });
}

// This javascript function changes meta data cluster count to proper comma format if numbers exceed thousands, millions, etc.
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

// This javascript file is used to setup the meta data cluster view
function doRedirect(myurl,oldresult)
{
var str=myurl;
var cleanURL=str.replace(oldresult,"");
window.location.replace(cleanURL);
}
// The host that the search resides on
var mTGSAHost = location.href;

if (mTGSAHost.match(/http:\/\/(.*?)\/.*$/i))
{
  mTGSAHost = RegExp.$1;
}
var originalURL;
var clearURL;
var seperator = ".";


// The name of the id where the meta data clusters are going to be placed
var idName = "";

// Whether or not we are going to show the number of hits beside each item
// By default, displaying the hit count is turned off.
var mTShowNumbers = 0;

// If we are showing the numbers, and mTLimitNumbers is set to 1, then we will
// limit the results back to the number of hits that we get.
// By default, this limitation is turned off.
var mTLimitNumbers = 0;

// Hashes used for various things such as whether to display or combine fields
// and sorting information.
var mTDisplayHash;
var mTCombineHash;
var mTSortHash;
var mTDisplayNameHash;

// Intake 338
var mTSortOrderDisplayNameArray;
var sorted_mTArray=new Array();

var mTArray;

// The header to display above the parametric navigation
var mTHeader = "Parametric Navigation";

// How mata data values do we display for each meta data item before we show the more link and hide the rest
// Changed from the default value of 5 so all results will display per client request
var mTMaxDisplay = 100;

// What are the labels that we will display on the expand and collapse links
var mTExpandName = "expand...";
var mTCollapseName = "collapse...";

// What is the label that we will display on the clear all link
var mTClearAllName = "Clear All";

// The label for the all display for each meta data bucket
var mTAllName = "all";
var mTAllLocation = "list"; // Value of list indicates in the list and a value of
                         // header indicates in the header

// Create a request object
var mTHTTP = mTCreateRequestObject();

// Create the Request Object that we will use to make AJAX calls .
function mTCreateRequestObject() 
{

  var ro;
  var browser = navigator.appName;

  if(browser == "Microsoft Internet Explorer")
  {
    ro = new ActiveXObject("Microsoft.XMLHTTP");
  } else  
  {
    ro = new XMLHttpRequest();
  }

  return ro;
}

// This function allows the user to select the meta data tags that they want to
// display.
function mTAddField(metaTagName, metaTagDelimiter)
{
  if (!mTDisplayHash)
  {
    mTDisplayHash = new Array();
  }
  mTDisplayHash[metaTagName] = metaTagDelimiter;
}

// This function allows the user to change the display name of the meta tags
// that they are displaying.
function mTSetDisplayName(metaTagName, metaTagDisplayName)
{
  if (!mTDisplayNameHash)
  {
    mTDisplayNameHash = new Array();
  }
  mTDisplayNameHash[metaTagName.toLowerCase()] = metaTagDisplayName;
}

// This function allows the user to set a sort order for the taxonomy
// Intake 338
function mTCreateSortOrderDisplayNameArray(sortNumber, metaTagName)
{
  if (!mTSortOrderDisplayNameArray)
  {
    mTSortOrderDisplayNameArray = new Array();
  }
  // alert('adding ' + metaTagName + ' as sort number ' + sortNumber);
  mTSortOrderDisplayNameArray[sortNumber] = metaTagName;
}

// This function allows the user to set the header displayed above the
// parametric navigation
function mTSetHeader(headerName)
{
  mTHeader = headerName;
}

// This function allows the user to set the placement and text of the all link
function mTSetAllPlacement(allName, allLocation)
{
  mTAllName = allName;
  mTAllLocation = allLocation.toLowerCase();
}

// This function allows the user to tell parametric to show or hide the numbers
function mTSetShowNumbers(show)
{
  mTShowNumbers = show;
}

// This function allows the user to tell parametric to show or hide the numbers
function mTSetLimitNumbers(numLimit)
{
  mTLimitNumbers = numLimit;
}

// This function allows the user to set name of the value to display for the
// clear all link.
function mTSetClearAllName(clearAllName)
{
  mTClearAllName = clearAllName;
}

// This function allows the user to set name of the value to display for the
// expand... link.
function mTSetExpandName(expandName)
{
  mTExpandName = expandName;
}

// This function allows the user to set name of the value to display for the
// collapse... link.
function mTSetCollapseName(collapseName)
{
  mTCollapseName = collapseName;
}

// This function allows the user to set the maximum number of items to be
// displayed for each meta tag.
function mTSetMaxDisplay(maxDisplay)
{
  //Remarked out this code to remove expand/collapse results at or below 100
  //mTMaxDisplay = maxDisplay;
}


// This function allows the user to set the host to send the parametric query
// to.  THIS FUNCTION IS DEPRECATED.
function mTSetHost(hostName)
{
  mTGSAHost = hostName;
}

// This function allows the user to set how the parametric results for a
// specific metaTag are sorted.
// A sortBy value of 'alpha asc' indicates alphabetical sorting in ascending order.
// A sortBy value of 'alpha desc' indicates alphabetical sorting in descending order.
// A sortBy value of 'hits asc' indicates sorting on hits in ascending order.
// A sortBy value of 'hits asc' indicates sorting on hits in descending order.
function mTSort(metaTagName, sortBy)
{
  if (!mTSortHash)
  {
    mTSortHash = new Array();
  }
  mTSortHash[metaTagName.toLowerCase()] = sortBy;
}

// This function allows the user to select the meta data tags that they want to
// display.
function mTCombineField(mTNameS, mTNameE)
{
  if (!mTCombineHash)
  {
    mTCombineHash = new Array();
  }
  mTCombineHash[mTNameS] = mTNameE;
}

// This function is called when the page is loaded.  This kicks off the calls
// to get all the meta tag values.
function mTLoad(id, mTURL) 
{
  idName = id;

  originalURL = "http://" + mTGSAHost + "/search?" + mTURL;

  // Modify the URL to get the appropriate XML output
  var url = "http://" + mTGSAHost + "/search?" + mTURL + "&getfields=*";
  url = url.replace(/&proxystylesheet=.*?&/g, "&");
  url = url.replace(/&proxystylesheet=.*/g, "");
  if ((mTShowNumbers == 0) || (mTLimitNumbers == 0))
  {
    url = url.replace(/&num=.*?&/g, "&");
    url = url.replace(/&num=.*?/g, "");
    url += "&num=100";
  }
  // alert("in mtLoad about to post " + url);

  clearURL = "http://" + mTGSAHost + "/search?" + mTURL;
  clearURL = clearURL.replace(/&partialfields=.*?&/, "&");
  clearURL = clearURL.replace(/&partialfields=.*?$/, "");
  clearURL = clearURL.replace(/&requiredfields=.*?&/, "&");
  clearURL = clearURL.replace(/&requiredfields=.*?$/, "");
  clearURL = clearURL.replace(/&num=.*?&/g, "&");
  clearURL = clearURL.replace(/&num=.*?/g, "");

  // This must be a get or it will not work with firefox.  For IE it can be
  // either and it will work.
  
  mTHTTP.open('get', url);
  mTHTTP.setRequestHeader("Content-Length", url.length);
  mTHTTP.onreadystatechange = mTHandleResponse;
  mTHTTP.send(null);
}

// Handle the response sent back from the GSA to our query.
function mTHandleResponse() 
{
  if(mTHTTP.readyState == 4)  
  {
    if (mTHTTP.status == 200)
    {      // perfect!

      var response = mTHTTP.responseXML;

      // Parse the results and build the appropriate list of meta tags
      // and thier count.
      mTParse(idName, response);

    } else
    {
      // there was a problem with the request,
      // for example the response may be a 404 (Not Found)
      // or 500 (Internal Server Error) response codes
      // SCR 12486 Patch Fix
	  //alert("HTTP ERROR STATUS: " + mTHTTP.status);
      var responseText = mTHTTP.responseText;
      //alert(responseText);
    }
  }
}

// Trim leading and trailing whitespace in a string.
function trim(str)
{
  return str.replace(/\s+/g, " ").replace(/^\s*|\s*$/g,"");
}

// Parse the meta tag names and values in the response, and add them to the
// appropriate hashes.
function mTParse(idName, response)
{

  var metaTagName;
  var metaTagValue;
  var metaTagDelimiter;
  var displayTagName = false;
  var mTResult = "";

  // Go through each meta tag in the XML response.
  var metaTags = response.getElementsByTagName('MT');

  // Only display parametric information if there is parametric information to
  // display
  if (metaTags.length > 0)
  {
    for(var i=0; i < metaTags.length; i++)
    {
      metaTagName = "";
      metaTagValue = "";
      metaTagDelimiter = "";

      // Get the meta tag name and modify it if necessary.
      metaTagName = metaTags[i].attributes.getNamedItem("N").value;
      metaTagName = metaTagName.toLowerCase();
      metaTagName = mTDoCombination(metaTagName);
      // alert("metaTagName = " + metaTagName);

      // Get the meta tag value and modify it if necessary.
      metaTagValue = metaTags[i].attributes.getNamedItem("V").value;
      metaTagValue = trim(metaTagValue);
      // alert("metaTagValue = " + metaTagValue);

      displayTagName = false;
      if (metaTagValue != "")
      {
        // Find out if the meta tag name matches one that we are suppossed to
        // allow
        if (mTDisplayHash)
        {
          // Here we check the current tag name against the list of valid tag names
          displayTagName  = false;
          for (var mT in mTDisplayHash)
          {
            if (mT.toLowerCase() == metaTagName.toLowerCase())
            {
              displayTagName = true;
              metaTagDelimiter = mTDisplayHash[mT];
            }
          }
        } else
        {
          displayTagName = true;
        }

        // If this occurs, then figure out the delimiter
        if (displayTagName == true)
        {

          if (!mTArray)
          {
            mTArray = new Array();
          }

          // Do we have a delimiter?  If so, we have to see if we have to split this
          // value and do this mulitple times.
          if (metaTagDelimiter != "")
          {
            var newMTValues;
            newMTValues = metaTagValue.split(metaTagDelimiter);
            for(var j=0; j < newMTValues.length; j++)
            {
              if (newMTValues[j] != "")
              {
                // Call a function here which will generate the hash with the
                // correct value.
                mTArray  = mTDoHash(mTArray, metaTagName, newMTValues[j]);
              }
            }
          } else
          {
            // Call a function here which will generate the hash with the
            // correct value.
            mTArray  = mTDoHash(mTArray, metaTagName, metaTagValue);
          }
        }
      }
    }
  }

  // Intake 338
  if (mTArray)
  {
	  if (mTSortOrderDisplayNameArray)
	  {
		  mTArray=sortTaxonomyArray(mTArray);
	  } 
  }

  // Output the results to the page
  mTOutputParametric(idName);
}

function mTDoHash(mTArray, mTName, mTValue)
{
  var lcMTName = mTName.toLowerCase();
  var lcMTValue = trim(mTValue.toLowerCase());
  if (mTArray[lcMTName])
  {
    // We have an array for this meta tag.  Now let's see if we have a
    // dimension for it's value
    if (isNaN(mTArray[lcMTName][lcMTValue]))
    {
      mTArray[lcMTName][lcMTValue] = 1;
    } else
    {
      var tmpVal = mTArray[lcMTName][lcMTValue];
      tmpVal++;
      mTArray[lcMTName][lcMTValue] = tmpVal;
    }
  } else
  {
    mTArray[lcMTName] = new Array();
    mTArray[lcMTName][lcMTValue] = 1;
  }
  return mTArray;
}

function mTDoCombination(mTName)
{
  var lcMTName = mTName.toLowerCase();
  if (mTCombineHash)
  {
    if (mTCombineHash[lcMTName])
    {
      return mTCombineHash[lcMTName];
    }
  }
  return mTName;
}

function mTPosSwitch(mTParametricArr, arrPos1, arrPos2)
{
  var tmpArr = new Array();
  tmpArr[0] = mTParametricArr[arrPos1][0];
  tmpArr[1] = mTParametricArr[arrPos1][1];
  mTParametricArr[arrPos1][0] = mTParametricArr[arrPos2][0];
  mTParametricArr[arrPos1][1] = mTParametricArr[arrPos2][1];
  mTParametricArr[arrPos2][0] = tmpArr[0];
  mTParametricArr[arrPos2][1] = tmpArr[1];
  return mTParametricArr;
}

// Change a specific div tag display to hidden making it disappear.
function hidediv(pass) 
{ 
  var divs = document.getElementsByTagName('div'); 
  for(i=0; i < divs.length; i++)
  {
    //if they are 'see' divs 
    if(divs[i].id.match(pass))
    {
      if (document.getElementById) // DOM3 = IE5, NS6 
      {
        divs[i].style.display="none";// show/hide 
      } else 
      {
        if (document.layers) // Netscape 4 
        {
          document.layers[divs[i]].display = 'none'; 
        } else // IE 4 
        {
          document.all.hideShow.divs[i].display = 'none'; 
        }
      }
    }
  }
}

// Intake 338
function sortTaxonomyArray(mTArray)
{
	for ( var i=0, len=mTSortOrderDisplayNameArray.length; i<len; ++i )
	{
		lcSearchName = mTSortOrderDisplayNameArray[i].toLowerCase();
		// alert('lcSearchName:' + lcSearchName);
		if (mTArray[lcSearchName])
		{
			// alert('lcSearchName: ' + lcSearchName + " exists!");
			sorted_mTArray[mTSortOrderDisplayNameArray[i].toLowerCase()]=mTArray[lcSearchName];
			for (var j in mTArray[i])
			{
				sorted_mTArray[mTSortOrderDisplayNameArray[i][j]]=mTArray[i][j];
			}
		}
	}

	mTArray = sorted_mTArray;

	return mTArray;
}

// Change a specific div tag display to visible making it appear.
function showdiv(pass) 
{
  var divs = document.getElementsByTagName('div'); 
  for(i=0; i < divs.length; i++)
  {
    if(divs[i].id.match(pass))
    {
      if (document.getElementById) 
      {
        divs[i].style.display="block"; 
      } else if (document.layers) // Netscape 4 
      {
        document.layers[divs[i]].display = 'visible'; 
      } else // IE 4 
      {
        document.all.hideShow.divs[i].display = 'block'; 
      }
    } 
  } 
}

// Write out the parametric information in the appropriate format, to a
// specific location in the document.  This information is gotten from all the
// global variables that have already been prepopulated by other functions.
function mTOutputParametric(idName)
{
  var mTResult = "";
  
  var qCustomHeader = "You are viewing ALL possible results.";
  var qCustomCategoryHeader = "You are viewing results specific to the categories selected below.";
  var qCustomSubHeader = "To narrow your search results, select from the categories below.";
  var qCustomExpandCriteriaHeader = "To expand your results, unselect the categories below.";
  var qCustomSubHeaderSorry = "No additional criteria are available to narrow your search.";
  // onClick=\"clearAllCookies();\"
  
  var parametricSelected = false; 
  if (mTArray)
  {
	// Loop through Parametrics to determine if one has been selected.
	for (var a in mTArray)
	{
		var cookieValue = URLDecode(getCookie("parametricnav_" + a));
        if ((cookieValue != null) && (cookieValue != "") && (cookieValue != "null"))
		{
			 parametricSelected = true;
			 break;
		}
	}

	if (parametricSelected)
	{
 	    mTResult = "<html><body><span style=\"font-size:12px;color:#8C8C8E;font-weight:bold;\">" + qCustomCategoryHeader + "</span><br /><br /><span style=\"font-size:12px;color:#8C8C8E;\">" + qCustomExpandCriteriaHeader + "</span><br /><br />";
	}
	else
	{
 	    mTResult = "<html><body><span style=\"font-size:12px;color:#8C8C8E;font-weight:bold;\">" + qCustomHeader + "</span><br /><br /><span style=\"font-size:12px;color:#8C8C8E;\">" + qCustomSubHeader + "</span><br /><br />";
	}

    var currentLoop;
	var testLoop;
	var successTestClickedLink;
	
	for (var i in mTArray)
    {

      if(testLoop != i){
	  	successTestClickedLink = false;
	  }
	  
	  var baseURL = originalURL + "&partialfields=" + i + ":";

      if ((mTDisplayNameHash != null) && (mTDisplayNameHash[i]))
      {
		mTResult += "<span style=\"font-size:14px;color:#00853F;font-weight:bold;\">" + mTDisplayNameHash[i] + "</span>";
      } else
      {
        mTResult += "<b>" + i + "</b>";
      }
	  
      // Ignore this All section for now.
	  if (false){
		  if (mTAllLocation == "header")
		  {
			  if ((selectedValue != null) && (selectedValue == mTAllName)){
				mTResult += "(<input type=\"radio\" name=\""+ mTDisplayNameHash[i] +"\" id=\"\" value=\"\" CHECKED onClick=\"setCookie('" + i + "', '');var newURL=addFieldsToURL('" + originalURL + "', '0');document.location.href=newURL;\" /> <b>" + toProperCase(mTAllName) + ")</b><br/>";
			  } else {
				mTResult += "(<input type=\"radio\" name=\""+ mTDisplayNameHash[i] +"\" id=\"\" value=\"\" onClick=\"setCookie('" + i + "', '');var newURL=addFieldsToURL('" + originalURL + "', '0');document.location.href=newURL;\" /> " + toProperCase(mTAllName) + ")<br/>";
			  }
			
		  } else if (mTAllLocation == "list")
		  {
				if ((selectedValue != null)){
				mTResult += "<br/><input type=\"radio\" name=\""+ mTDisplayNameHash[i] +"\" id=\"\" value=\"\" CHECKED onClick=\"setCookie('" + i + "', '');var newURL=addFieldsToURL('" + originalURL + "', '0');document.location.href=newURL;\" /> <b>" + toProperCase(mTAllName) + "</b><br/>";
				// alert("ALL - "+ mTDisplayNameHash[i]);
				// alert("Selected Value - "+ selectedValue);
				} else {
				mTResult += "<br/><input type=\"radio\" name=\""+ mTDisplayNameHash[i] +"\" id=\"\" value=\"\" onClick=\"setCookie('" + i + "', '');var newURL=addFieldsToURL('" + originalURL + "', '0');document.location.href=newURL;\" /> " + toProperCase(mTAllName) + "<br/>";
				// alert("ALL - "+ mTDisplayNameHash[i]);
				// alert("Selected Value - "+ selectedValue);
				}
		  
		  }
	  }

      // Stuff the values for this meta tag in an array
      var mTParametricArr = new Array();
      var mTParametricCnt = 0;
      for (var j in mTArray[i])
      {
        if (trim(j).length > 0)
        {
          mTParametricArr[mTParametricCnt] = new Array();
          mTParametricArr[mTParametricCnt][0] = j;
          mTParametricArr[mTParametricCnt][1] = mTArray[i][j];
          mTParametricCnt++;
        }
      }

      // Now we need to sort if this field is one of the ones we need to sort
      var sortBy = 0;
      var sortOrder = "";

      if (mTSortHash)
      {
        if (mTSortHash[i])
        {
          var tmpArr = mTSortHash[i].split(/ /);
          if (tmpArr[0].toLowerCase() == "hits")
          {
            sortBy = 1;
          }
          if (tmpArr[1].toLowerCase() == "asc")
          {
            sortOrder = "a";
          } else if (tmpArr[1].toLowerCase() == "desc")
          {
            sortOrder = "d";
          }
        }
      }

      // We are just using a simple bubble sort here, because the number of
      // values in the array doesn't warrant anything more powerful such as a 
      // quick sort.
      if (sortOrder != "")
      {
        for (var j=0; j < mTParametricArr.length; j++)
        {
          for (var k=0; k < mTParametricArr.length; k++)
          {
            if (sortOrder == "a")
            {
              if (mTParametricArr[j][sortBy] < mTParametricArr[k][sortBy])
              {
                mtParametricArr = mTPosSwitch(mTParametricArr, j, k);
              }
            } else if (sortOrder == "d")
            {
              if (mTParametricArr[j][sortBy] > mTParametricArr[k][sortBy])
              {
                mtParametricArr = mTPosSwitch(mTParametricArr, j, k);
              }
            }
          }
        }
      }
    
	  //var testClickedLink; = false;
	  mTResult +="<br />";
      
	  // Let's figure out if this has been selected.
      var selectedValue = URLDecode(getCookie("parametricnav_" + i));

	  // Now print out the information.
	  for (var j=0; j < mTParametricArr.length; j++)
      {
        var linkURL = baseURL;

        // At this point, we have to determine if there is an ampersand in the
        // value.  If there is, we have to split based upon it, and search
        // multiple partial fields.  If not, then we just append the value.
        if (mTParametricArr[j][0].indexOf("&") > 0)
        {
          var tmpPartialFields = mTParametricArr[j][0].split("&");
          for(var k=0; k < tmpPartialFields.length; k++) 
          {
            if (k == 0)
            {
              linkURL += URLEncode(URLEncode(trim(tmpPartialFields[k])));
            } else
            {
              linkURL += URLEncode(seperator + URLEncode(i) + ":" + URLEncode(trim(tmpPartialFields[k])));
            }
          }
        } else
        {
          linkURL += URLEncode(URLEncode(trim(mTParametricArr[j][0])));
        }
        if (j == mTMaxDisplay)
        {
          mTResult += "<div id=\"" + i + "_expand\"><a href=\"#\" onClick=\"hidediv('" + i + "_expand');showdiv('" + i + "_collapse');\">" + mTExpandName + "</a></div>";
          mTResult += "<div id=\"" + i + "_collapse\" style=\"display:none\">";
        }

		// Insert ALL into group array
		if ((selectedValue != null) && (selectedValue == mTParametricArr[j][0]))
		{
		  mTResult += "<input type=\"radio\" name=\""+i+"\" id=\"\" value=\"\" checked=\"checked\" onClick=\"\" /><span style=\"color:#000000;font-size:12px;font-weight:bold;font-family: arial;\"> " + toProperCase(mTParametricArr[j][0]) + "</span>";
		  var testClickedLink = true;
		  
		} else
		{
		  mTResult += "<input type=\"radio\" name=\""+i+"\" id=\"\" value=\"\" onClick=\"setCookie('" + i + "', '" + URLEncode(mTParametricArr[j][0]) + "');var newURL=addFieldsToURL('" + linkURL + "', '" + mTParametricArr[j][1] + "');document.location.href=newURL;\" /> <span style=\"color:#000000;font-size:12px;font-family: arial;\">" + toProperCase(mTParametricArr[j][0]) + "</span>";
		  var testClickedLink = false;
		  
		}
		
		if(testClickedLink){
			successTestClickedLink = true;
		} else {
			// nothing changed
		}
		
		if (mTShowNumbers)
        {
          //mTResult += "," + j + " ";
		  mTResult += " </span><span style=\"color:#666666;\">(" + addCommas(mTParametricArr[j][1]) + ")</span>";
        }
        mTResult += "<br/>";
      }
	  
	  // Set All radio button for each section.
	  //alert("testClickedLink: "+testClickedLink);
	  if(successTestClickedLink != null && successTestClickedLink == true){
		  mTResult += "<input type=\"radio\" name=\""+i+"\" id=\"\" value=\"\" onClick=\"setCookie('" + i + "', '');var newURL=addFieldsToURL('" + linkURL + "', '');document.location.href=clearURL;\" /><span style=\"color:#000000;font-size:12px;font-family: arial;\">" + toProperCase(mTAllName) + "</span>";
		  testLoop = i;
	  } else {
		  mTResult += "<input type=\"radio\" name=\""+i+"\" id=\"\" value=\"\" checked=\"checked\" onClick=\"setCookie('" + i + "', '');var newURL=addFieldsToURL('" + linkURL + "', '');document.location.href=clearURL;\" /><span style=\"color:#000000;font-size:12px;font-weight:bold;font-family: arial;\">" + toProperCase(mTAllName) + "</span>";
		  testLoop = i;
	  }
	  
      if (mTParametricArr.length > mTMaxDisplay)
      {
        mTResult += "<a href=\"#\" onClick=\"hidediv('" + i + "_collapse');showdiv('" + i + "_expand');\">" + mTCollapseName + "</a></div>";
      }

      mTResult += "<br/><br/>";
    }
    mTResult += "</font></body></html>";
  }
  else
  {	
	mTResult = "<html><body><span style=\"font-size:12px;color:#8C8C8E;font-weight:bold;\">" + qCustomHeader + "</span><br /><br /><span style=\"font-size:12px;color:#8C8C8E;\">" + qCustomSubHeaderSorry + "</span><br /><br />";
  }

  // Output the results to the page
  document.getElementById(idName).innerHTML = mTResult;
}

// Given a specific cookie name, value, and other information, set that cookie.
function setCookie (name, value, expires, path, domain, secure)
{
  document.cookie = "parametricnav_" + name + "=" + value +
                    ((expires) ? "; expires=" + expires : "") +
                    ((path) ? "; path=" + path : "") +
                    ((domain) ? "; domain=" + domain : "") +
                    ((secure) ? "; secure" : "");
}

// Given a specific cookie name, get its value.
function getCookie(name) 
{
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i < ca.length; i++) 
  {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// Remove all partialfields parameters that are part of the URL.
function removePartialFieldsFromURL(URL) 
{
  var newURL = URL;
  newURL = newURL.replace(/&partialfields=.*?&/g, "&");
  // Get rid of any partialfields that occur in the middle of the URL
  // if (newURL.match(/&partialfields=.*?&/) != null)
  // {
    // while (newURL.match(/&partialfields=.*?&/) != null)
    // {
      // newURL = newURL.replace(/&partialfields=.*?&/, "&");
    // }
  // }
  // Get rid of partialfields that occurs at the end of the URL
  newURL = newURL.replace(/&partialfields=.*/, "");

  return newURL;
}

// Remove all requiredfields parameters that are part of the URL.
function removeRequiredFieldsFromURL(URL) 
{
  var newURL = URL;
  newURL = newURL.replace(/&requiredfields=.*?&/g, "&");
  // Get rid of any requiredfields that occur in the middle of the URL
  // if (newURL.match(/&requiredfields=.*?&/) != null)
  // {
    // while (newURL.match(/&requiredfields=.*?&/) != null)
    // {
      // newURL = newURL.replace(/&requiredfields=.*?&/, "&");
    // }
  // }
  // Get rid of requiredfields that occurs at the end of the URL
  newURL = newURL.replace(/&requiredfields=.*/, "");

  return newURL;
}

// Add all the appropriate partialfields and requiredfields parameters to the
// URL.
function addFieldsToURL(URL, numHits) 
{
  var newURL = URL;

  // Add the partialfields poriton to the URL
  newURL = addPartialFieldsToURL(newURL);

  // Add the requiredfields poriton to the URL
  newURL = addRequiredFieldsToURL(newURL);

  // Here is where we confine the search to the number of hits if it is
  // necessary.
  if ((mTShowNumbers == 1) && (mTLimitNumbers == 1) && (numHits > 0))
  {
    newURL = newURL.replace(/&num=.*?&/g, "&");
    newURL = newURL.replace(/&num=.*?/g, "");
    newURL += "&num=" + numHits;
  }

  return newURL;
}

// Add all the selected parametric values to the URL used in the search, as a
// partialfields match.
// All meta data values will be partialfields with the following exceptions: dates.
function addPartialFieldsToURL(URL) 
{
  // Remove all partialfields parameters from the passed in URL.
  var newURL = removePartialFieldsFromURL(URL);
  var ca = document.cookie.split(';');

  var pfCount = 0;
  for(var i=0; i < ca.length; i++) 
  {
    var c = trim(ca[i]);
    // Don't allow for cookies that start with two underscores or that are one
    // character.
    if (c.match(/^parametricnav_/) != null)
    {
      var cookieName = c;
      cookieName = cookieName.replace(/\=.*$/, "");
      var cookieValue = URLDecode(getCookie(cookieName));
      cookieName = cookieName.replace(/^parametricnav_/, "");
      if ((cookieValue != null) && (cookieValue != "") && (cookieValue != "null"))
      {
        if (!isDate(cookieValue))
        {
          if (pfCount == 0)
          {
            newURL += "&partialfields=";
          } else
          {
            newURL += seperator;
          }

          if (cookieValue.indexOf("&") > 0)
          {
            var tmpPartialFields = cookieValue.split("&");
            for(var k=0; k < tmpPartialFields.length; k++) 
            {
              if (k == 0)
              {
                newURL += URLEncode(escapeURL(cookieName) + ":" + URLEncode(trim(tmpPartialFields[k])));
              } else
              {
                newURL += seperator + URLEncode(URLEncode(cookieName) + ":" + URLEncode(trim(tmpPartialFields[k])));
              }
            }
          } else
          {
            newURL += URLEncode(URLEncode(cookieName) + ":" + URLEncode(trim(cookieValue)));
          }
          pfCount++;
        }
      }
    }
  }

  return newURL;
}

// Add all the appropriate selected parametric values to the URL used in the search, as a
// requiredfield match.
// The following meta data values will be requiredfields: dates.
function addRequiredFieldsToURL(URL) 
{
  // Remove all requiredfields parameters from the passed in URL.
  var newURL = removeRequiredFieldsFromURL(URL);
  var ca = document.cookie.split(';');

  var rfCount = 0;
  for(var i=0; i < ca.length; i++) 
  {
    var c = trim(ca[i]);
    // Don't allow for cookies that start with two underscores or that are one
    // character.
    if (c.match(/^parametricnav_/) != null)
    {
      var cookieName = c;
      cookieName = cookieName.replace(/\=.*$/, "");
      var cookieValue = URLDecode(getCookie(cookieName));
      cookieName = cookieName.replace(/^parametricnav_/, "");
      if ((cookieValue != null) && (cookieValue != "") && (cookieValue != "null"))
      {
        if (isDate(cookieValue))
        {
          if (rfCount == 0)
          {
            newURL += "&requiredfields=";
          } else
          {
            newURL += seperator;
          }

          if (cookieValue.indexOf("&") > 0)
          {
            var tmpRequiredFields = cookieValue.split("&");
            for(var k=0; k < tmpRequiredFields.length; k++) 
            {
              if (k == 0)
              {
                newURL += URLEncode(URLEncode(cookieName) + ":" + URLEncode(trim(tmpRequiredFields[k])));
              } else
              {
                newURL += seperator + URLEncode(URLEncode(cookieName) + ":" + URLEncode(trim(tmpRequiredFields[k])));
              }
            }
          } else
          {
            newURL += URLEncode(URLEncode(cookieName) + ":" + URLEncode(trim(cookieValue)));
          }
          rfCount++;
        }
      }
    }
  }

  return newURL;
}

// Check to see if the string passed in is a date.
function isDate(str)
{
  var day;
  var month;
  var year;
  var mTDate;
  if (str.match(/^(\d{4})[- \/](\d{2})[- \/](\d{2})$/))
  {
    day = RegExp.$3;
    month = RegExp.$2;
    year = RegExp.$1;

    //javascript months start at 0 (0-11 instead of 1-12)
    month = month - 1;

    //set up a Date object based on the day, month and year arguments
    mTDate=new Date(year,month,day);

    // Javascript Dates are a little too forgiving and will change the date to a
    // reasonable guess if it's invalid. We'll use this to our advantage by creating
    // the date object and then comparing it to the details we put it. If the Date
    // object is different, then it must have been an invalid date to start with...
    return ((day==mTDate.getDate()) && (month==mTDate.getMonth()) && (year==mTDate.getFullYear()));
  }
  return false;
}

// Clear all the appropriate cookies.
function clearAllCookies() 
{
  var ca = document.cookie.split(';');

  for(var i=0;i < ca.length;i++) 
  {
    var c = trim(ca[i]);
    // Don't allow for cookies that start with two underscores or that are one
    // character.
    if (c.match(/^parametricnav_/) != null)
    {
      var cookieName = c;
      cookieName = cookieName.replace(/\=.*$/, "");
      cookieName = cookieName.replace(/^parametricnav_/, "");
      setCookie(cookieName, '');
    }
  }
}

// We have to encode both the . and the : and the | because they will not be
// encoded and they need to be in order to work with the GSA parametric search.
function URLEncode(string) 
{
  var returnString = escape(this.utf8Encode(string));
  returnString = returnString.replace(/\./g, "%2E");
  returnString = returnString.replace(/\|/g, "%7C");
  return returnString.replace(/:/g, "%3A");
}

function URLDecode(string) 
{
  return this.utf8Decode(unescape(string));
}

// UTF-8 encode routine
function utf8Encode(string) 
{
  var utftext = "";
  if (string != null)
  {
    string = string.replace(/\r\n/g,"\n");
    for (var n = 0; n < string.length; n++) 
    {
      var c = string.charCodeAt(n);
      var ch = string.charAt(n);

      if (c < 128) 
      {
        utftext += String.fromCharCode(c);
      } else if((c > 127) && (c < 2048)) 
      {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else 
      {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
  }
  return utftext;
}

// UTF-8 decode routine
function utf8Decode(utftext) 
{
  var string = "";
  if (utftext != null)
  {
    var i = 0;
    var c = c1 = c2 = 0;
    while ( i < utftext.length ) 
    {
      c = utftext.charCodeAt(i);

      if (c < 128) 
      {
        string += String.fromCharCode(c);
        i++;
      } else if((c > 191) && (c < 224)) 
      {
        c2 = utftext.charCodeAt(i+1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else 
      {
        c2 = utftext.charCodeAt(i+1);
        c3 = utftext.charCodeAt(i+2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
  }
  return string;
}
