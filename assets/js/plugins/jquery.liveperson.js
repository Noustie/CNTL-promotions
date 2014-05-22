//(function($){
	//$.centurycore.liveperson=function(){
		//LivePerson New Monitor Tag
		path = document.location.pathname;
		//look for if mtagconfig is defined
		if(typeof(lpExist) != "undefined" && typeof(lpExist) != null){
			if(document.location.toString().indexOf("https:") == 0) {
				var lpProtocol = "https";
			} else {
				var lpProtocol = "http";
			}
			var lpNMT = false;
		} else if(path.indexOf("/smallbusiness/") != -1 && path.indexOf("/smallbusiness/orderonline/") == -1){
			var lpNMT = q_url+"/global/includes/c2c/smallbusiness/mtagconfig.js";
		} else if(path.indexOf("/smallbusiness/orderonline/") != -1){
			var lpNMT = q_url+"/global/includes/c2c/smallbusiness/voice-mtagconfig.js";
		} else if(path.indexOf("/pcat/") != -1){
			var lpNMT = q_url+"/global/includes/c2c/smallbusiness/mtagconfig.js";
		} else if(path.indexOf("/oneflex/") != -1){
			var lpNMT = q_url+"/global/includes/c2c/residential/mtagconfig.js";
		} else if(path.indexOf("/residential/movers/") != -1){
				var lpNMT = q_url+"/global/includes/c2c/residential/movers-mtagconfig.js";
		} else{
			var lpNMT = qshop_url+"/global/includes/c2c/residential/mtagconfig.js";
		};
		if(lpNMT) {
			document.write("<scri" + "pt src='" + lpNMT + "' language='javascript' type='text/javascript'></scr" + "ipt>");
		}
	//}
//})(jQuery);