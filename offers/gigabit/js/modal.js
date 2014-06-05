$(function(){

	var isSubmitted = false;
    $("form").submit(function() {
        var name = $("input#name").val();
        var streetAddress = $("input#streetAddress").val();
        var unitNumber = $("input#unitNumber").val();
        var state = $("select#state").val();
        var zip = $("input#zip").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();

        if ($("form input").hasClass('hasError')) {
            // console.log($("hasError"));
        } else {
            if (isSubmitted) {
                return false;
            }
            //tracks button click
            qa.trackAction( "ctl|rsd|emktg|offers|gigabit|modal|sign_up" );
            isSubmitted = true;

            $.ajax({
                type: "POST",
                url: PATH+"inc/mailform.php",
                data: {
                    name: name,
                    streetAddress: streetAddress,
                    unitNumber: unitNumber,
                    state: state,
                    zip: zip,
                    email: email,
                    phone: phone
                },
                success: function() {
                    $('#contact_form').html("<div id='message'></div>");
                    $('#message').html("<h2>Congratulations!</h2>").append("<p>Now you’ll be one of the first to know when CenturyLink up to 1-Gig service is available in your area.</p>").hide().fadeIn(750, function() {
                        $('#message');
                    });
					$('#contact_form').append("<a href='#' class='close-button'><img src='"+PATH+"img/modal-X.png'></a>");
                    $.cookie('gpon_inquiry', 'yes', { expires: 30, path: '<?php echo $path; ?>', domain: "promotions.centurylink.com" });
                }
            });
        }
        return false;
    });

    // form place holder text rig
    $("input").focus(function() {
        onInputChange(this,true);
    });
    $("input").blur(function() {
        onInputChange(this);
    });
    $("input").change(function() {
        onInputChange(this);
    });
    $("input").each(function(i,ele) {
        onInputChange(this);
    });

    function onInputChange (inputEle, forceDirty ) {
        if ( !$(inputEle).val() ) {
            $(inputEle).css("background-color", "transparent");
        }
        if ( !!$(inputEle).val() || !!forceDirty ) {
            $(inputEle).css("background-color", "#ffffff");
        }
    }

    //modal in
	$(".signupbtn").click(function(e){
		TweenMax.fromTo($("#modal"), 0.5, {display:"none", opacity:0}, {display:"block", opacity:1});
		TweenMax.fromTo($("#contact_form"), 1, {display:"none", opacity:0, rotationX:0, z:-1000}, {display:"block", opacity:1, z:0, rotationX:360, transformOrigin:"50% 50% -500", ease:Back.easeOut, easeParams:[0.6]});
		e.preventDefault();
	});

    //modal out
	$("#contact_form").on( "click", "a.close-button", function(e) {
        TweenMax.fromTo($("#contact_form"), 1, {display:"block", opacity:1, rotationX:360, z:0}, {display:"none", opacity:0, rotationX:-0, z:-1000, transformOrigin:"50% 50% -500", ease:Back.easeInOut, easeParams:[0.5]});
		TweenMax.fromTo($("#modal"), 0.8, {display:"block", opacity:1}, {display:"none", opacity:0});
		e.preventDefault();
	});
    // $(window).on( "click", "#modal", function(e) {
    //     TweenMax.fromTo($("#contact_form"), 1, {display:"block", opacity:1, rotationX:360}, {display:"none", opacity:0, rotationX:0, transformOrigin:"50% 50% -500", ease:Back.easeOut, easeParams:[0.6]});
    //     TweenMax.fromTo($("#modal"), 0.5, {display:"block", opacity:1}, {display:"none", opacity:0, delay:0.2});
    //     e.preventDefault();
    // });

});

/*
 * Copyright (C) 2011 Ovea <dev@ovea.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * https://gist.github.com/1114981
 *
 * By default, support transferring session cookie with XDomainRequest for IE. The cookie value is by default 'jsessionid'
 *
 * You can change the session cookie value like this, before including this script:
 *
 * window.XDR_SESSION_COOKIE_NAME = 'ID';
 *
 * Or if you want to disable cookie session support:
 *
 * window.XDR_SESSION_COOKIE_NAME = null;
 *
 * If you need to convert other cookies as headers:
 *
 * window.XDR_COOKIE_HEADERS = ['PHP_SESSION'];
 *
 * To DEBUG:
 *
 * window.XDR_DEBUG = true;
 *
 * To pass some headers:
 *
 * window.XDR_HEADERS = ['Content-Type', 'Accept']
 *
 */
!function(a){function l(a,b){"string"==typeof a&&(a=[a]);var c,d;for(c=0;c<a.length;c++)d=new RegExp("(?:^|; )"+a[c]+"=([^;]*)","i").exec(document.cookie),d=d&&d[1],d&&b.call(null,a[c],d)}function m(a){if(a.length>=5){var d,e,f,b=a.substring(a.length<=20?0:a.length-20),c=b.length-1;if("~"===b.charAt(c)){for(d=c--;c>=0&&"~"!==b.charAt(c);c--);if(e=parseInt(b.substring(c+1,d)),!isNaN(e)&&e>=0&&c>=2&&"~"===b.charAt(c)){for(d=c--;c>=0&&"~"!==b.charAt(c);c--);if(f=parseInt(b.substring(c+1,d)),!isNaN(f)&&c>=0&&"~"===b.charAt(c))return d=a.length-e-b.length+c,[f,a.substring(0,d),a.substr(d,e)]}}}return[200,a,""]}function n(a){if("object"==typeof a)return a;var c=b.exec(a);return c?{href:c[0]||"",hrefNoHash:c[1]||"",hrefNoSearch:c[2]||"",domain:c[3]||"",protocol:c[4]||"",authority:c[5]||"",username:c[7]||"",password:c[8]||"",host:c[9]||"",hostname:c[10]||"",port:c[11]||"",pathname:c[12]||"",directory:c[13]||"",filename:c[14]||"",search:c[15]||"",hash:c[16]||""}:{}}function o(a){if(0==a.length)return[];var e,f,b=[],c=0,d=0;do e=a.indexOf(",",d),b[c]=(b[c]||"")+a.substring(d,-1==e?a.length:e),d=e+1,-1==b[c].indexOf("Expires=")||-1!=b[c].indexOf(",")?c++:b[c]+=",";while(e>0);for(c=0;c<b.length;c++)f=b[c].indexOf("Domain="),-1!=f&&(b[c]=b[c].substring(0,f)+b[c].substring(b[c].indexOf(";",f)+1));return b}if(!("__jquery_xdomain__"in a)&&/msie/.test(navigator.userAgent.toLowerCase())&&"XDomainRequest"in window&&!(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest)&&-1==document.location.href.indexOf("file:///")){a.__jquery_xdomain__=a.support.cors=!0;var i,j,b=/^(((([^:\/#\?]+:)?(?:\/\/((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?]+)(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,c=a.ajaxSettings.xhr,d="XDR_SESSION_COOKIE_NAME"in window?window.XDR_SESSION_COOKIE_NAME:"jsessionid",e="XDR_COOKIE_HEADERS"in window?window.XDR_COOKIE_HEADERS:[],f="XDR_HEADERS"in window?window.XDR_HEADERS:["Content-Type"],g={UNSENT:0,OPENED:1,LOADING:3,DONE:4},h=window.XDR_DEBUG&&"console"in window,k=0;j=n(document.location.href).domain,i=function(){var i,n,p,b=this,c=new XDomainRequest,j=[],q=k++,r=function(a){b.readyState=a,"function"==typeof b.onreadystatechange&&b.onreadystatechange.call(b)},s=function(d,e){if(b.responseText||(b.responseText=""),h&&console.log("[XDR-"+q+"] request end with state "+d+" and code "+e+" and data length "+b.responseText.length),b.status=e,!b.responseType)if(i=i||c.contentType,i.match(/\/json/))b.responseType="json",b.response=b.responseText;else if(i.match(/\/xml/)){b.responseType="document";var f,g=new ActiveXObject("Microsoft.XMLDOM");g.async=!1,g.loadXML(b.responseText),b.responseXML=b.response=g,0!=a(g).children("error").length&&(f=a(g).find("error"),b.status=parseInt(f.attr("response_code")))}else b.responseType="text",b.response=b.responseText;r(d),c=null,j=null,p=null};c.onprogress=function(){r(g.LOADING)},c.ontimeout=function(){s(g.DONE,408)},c.onerror=function(){s(g.DONE,500)},c.onload=function(){var a,d,e=m(c.responseText||"");for(h&&console.log("[XDR-"+k+"] parsing cookies for header "+e[2]),a=o(e[2]),b.responseText=e[1]||"",h&&console.log("[XDR-"+q+"] raw data:\n"+c.responseText+"\n parsed response: status="+e[0]+", header="+e[2]+", data=\n"+e[1]),d=0;d<a.length;d++)h&&console.log("[XDR-"+q+"] installing cookie "+a[d]),document.cookie=a[d]+";Domain="+document.domain;s(g.DONE,e[0]),e=null},this.readyState=g.UNSENT,this.status=0,this.statusText="",this.responseType="",this.timeout=0,this.withCredentials=!1,this.overrideMimeType=function(a){i=a},this.abort=function(){c.abort()},this.setRequestHeader=function(b,c){a.inArray(b,f)>=0&&j.push({k:b,v:c})},this.open=function(a,b){p=b,n=a,r(g.OPENED)},this.send=function(a){if(c.timeout=this.timeout,d||e||j.length){var b,f=function(a,b){var c=p.indexOf("?");p+=(-1==c?"?":"&")+a+"="+encodeURIComponent(b),h&&console.log("[XDR-"+q+"] added parameter "+a+"="+b+" => "+p)};for(b=0;b<j.length;b++)f(j[b].k,j[b].v);l(d,function(a,b){var c=p.indexOf("?");-1==c?p+=";"+a+"="+b:p=p.substring(0,c)+";"+a+"="+b+p.substring(c),h&&console.log("[XDR-"+q+"] added cookie "+p)}),l(e,f),f("_xdr",""+q)}h&&console.log("[XDR-"+q+"] opening "+p),c.open(n,p),h&&console.log("[XDR-"+q+"] send, timeout="+c.timeout),c.send(a)},this.getAllResponseHeaders=function(){return""},this.getResponseHeader=function(){return null}},a.ajaxSettings.xhr=function(){var b=n(this.url).domain;if(""===b||b===j)return c.call(a.ajaxSettings);try{return new i}catch(d){}}}}(jQuery);
