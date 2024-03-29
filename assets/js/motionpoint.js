var MP = {
<!-- mp_trans_disable_start --> 
  Version: '1.0.21',
  Domains: {'es':'espanol.qwest.com'},	
  SrcLang: 'en',
<!-- mp_trans_disable_end -->
  UrlLang: 'mp_js_current_lang',
  SrcUrl: unescape('mp_js_orgin_url'),
<!-- mp_trans_disable_start --> 	
  init: function(){
    if (MP.UrlLang.indexOf('p_js_')==1) {
      MP.SrcUrl=window.top.document.location.href;
      MP.UrlLang=MP.SrcLang;
  }
},
getCookie: function(name){
  var start=document.cookie.indexOf(name+'=');
  if(start < 0) return null;
  start=start+name.length+1;
  var end=document.cookie.indexOf(';', start);
  if(end < 0) end=document.cookie.length;
  while (document.cookie.charAt(start)==' '){ start++; }
  return unescape(document.cookie.substring(start,end));
},
setCookie: function(name,value,path,domain){
  var cookie=name+'='+escape(value);
  if(path)cookie+='; path='+path;
  if(domain)cookie+='; domain='+domain;
  var now=new Date();
  now.setTime(now.getTime()+1000*60*60*24*365);
  cookie+='; expires='+now.toUTCString();
  document.cookie=cookie;
},
switchLanguage: function(lang){
  if(lang!=MP.SrcLang){
    var script=document.createElement('SCRIPT');
    script.src=location.protocol+'//'+MP.Domains[lang]+'/'+MP.SrcLang+lang+'/?1023749632;'+encodeURIComponent(MP.SrcUrl);
	document.body.appendChild(script);
  } else if(lang==MP.SrcLang && MP.UrlLang!=MP.SrcLang){
    var script=document.createElement('SCRIPT');
    script.src=location.protocol+'//'+MP.Domains[MP.UrlLang]+'/'+MP.SrcLang+MP.UrlLang+'/?1023749634;'+encodeURIComponent(location.href);
	document.body.appendChild(script);
  }
  return false;
},
switchToLang: function(url) {
    var mplink=document.createElement('A');
	if (mplink.click) { // using location.href will cause IE6 to not report referrer
		mplink.href=url;
        window.top.document.body.appendChild(mplink);
        mplink.click();
	} else {
	    window.top.location.href=url; 
	}
}
<!-- mp_trans_disable_end -->	
};

function switchLanguage(lang) {
    MP.SrcUrl=unescape('mp_js_orgin_url');MP.UrlLang='mp_js_current_lang';MP.init();
	MP.switchLanguage(MP.UrlLang==lang?'en':lang);
	return false;
}