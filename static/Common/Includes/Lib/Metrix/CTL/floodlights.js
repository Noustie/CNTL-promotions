//universal function for loading onClick floodlight tags
function dblClck_btnClick() {
	/*
	Start of DoubleClick Floodlight Tag: Please do not remove
	Activity name of this tag: HSI_CTL_Check_Availability_Button
	URL of the webpage where the tag is expected to be placed: https://www.centurylink.com/shop/Internet/HSI/availability.html
	This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
	Creation Date: 07/06/2010
	*/
	var baxel = Math.random() + "";
	var ba = baxel * 10000000000000;
	var tagURL = "//fls.doubleclick.net/activityi;src=2833013;type=century;cat=hsi_c745;ord=1;num=" + ba + "?";
	if(document.getElementById("DCLK_FLDiv")){var flDiv=document.getElementById("DCLK_FLDiv");}
	else{var flDiv=document.body.appendChild(document.createElement("div"));flDiv.id="DCLK_FLDiv";flDiv.style.display="none";}
	var DCLK_FLIframe=document.createElement("iframe");
	DCLK_FLIframe.id="DCLK_FLIframe_" + Math.floor(Math.random()*999999);
	DCLK_FLIframe.src=tagURL;
	DCLK_FLIframe.className="trkIframe";
	flDiv.appendChild(DCLK_FLIframe);
	setTimeout("window.location.href = 'https://www.centurylink.com/';", 750);
	/* End of DoubleClick Floodlight Tag: Please do not remove */

}
