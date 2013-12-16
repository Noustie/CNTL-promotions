/* Don't frame me in */
if (top != self) {
	top.location=self.location;
} 

/* Events for global (topnav) search form */
function initSearch() {
	$('#siteSearch label').click(function() {
		$('#searchText').focus();
	})
/*	
	st = $('#searchText');
	st.blur(function(){
		this.removeClass('active');
	}); 
	st.focus(function(){
		this.addClass('active');
	});
	*/
	st = document.getElementById('searchText');
	if(st) {
		st.onfocus = function() {this.className = 'active';}
		st.onblur = function() {this.className = '';}
	}
}
/* Open all pdfs in new window */
function popADoc() {
	$("a[href$='pdf']").attr('target','_blank');
}
/* Remove Home Security evaluation */
function homeSecurityFix() {
	if(window.location.pathname.indexOf('/HomeSecurity/') > -1) {
		$("#menu li:contains('Free Evaluation')").remove();
		if(window.location.pathname.search('freeEvaluation|thankYou') > -1) {
			var oldhtml = $("#content").html();
			$("#content").html(oldhtml.replace(/FREE/g,''));
		}
	}
}

$(document).ready(initSearch);
$(document).ready(popADoc);
$(document).ready(homeSecurityFix);
