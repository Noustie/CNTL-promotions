

$(document).ready(function(){
	var currPathname = location.pathname;
	if (currPathname == "/eam/login.do") {
		chatBtnStr = '<a href="//sncare.centurylink.com/netagent/cimlogin.aspx?questid=03E78ACF-231C-4588-B076-CA693E399261&portid=18A8CC34-25D1-45F9-9E49-9C98ED206F54" target="_blank"><img src="//www.centurylink.com/static/Images/Buttons/btnOnlineChat.gif" border="0" alt="Chat Now Online" ></a>';
		$("p.buttonPointer").html(chatBtnStr);
	}
});

/*** Omniture SiteCatalyst ***/
document.write('<script type="text/javascript" src="//www.centurylink.com/static/Common/Includes/Lib/Metrix/CTL/s_code.js"></'+'script>');

/*** iCROSSING i2a global tracking code ***/
document.write('<script type="text/javascript" src="//www.centurylink.com/static/Common/Includes/Lib/Metrix/CTL/i2a.js"></script>');

/*** Opinionlab - Inject the Opinionlab Feedback link into the global footer ***/
document.write('<script language="javascript" src="//www.centurylink.com/static/Common/Includes/Lib/Metrix/CTL/oo_engine.js"></script>');
$('#footer>.support>.nav>li:first').removeClass('first').parent().prepend('<li class="first"><a href="javascript:O_LC();">Feedback<img src="//www.centurylink.com/static/Common/Includes/Lib/Metrix/CTL/sm_oo.gif" style="margin-left:6px;border:0"/></a></li>');
