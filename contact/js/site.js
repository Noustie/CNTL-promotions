$(function() {
/*place jQuery actions here*/
	replaceDefaultValue();
	hideSameAsContact();
	setupOverlay();
	hideHoney();
	validateForm();
	// click tracking
	$('a[clicktrack],area[clicktrack],input[clicktrack]').live( 'click', trackAction);
	// validation for fields with default values
	jQuery.validator.addMethod("defaultInvalid", function(value, element) {
    	return !(element.value == element.defaultValue);
	});
});

function hideSameAsContact() {
	$('#sameAsContact').click(function(){
		if(this.checked) {
			$('#billingInformation>#billingTitle, #billingInformation>#billingFirstName, #billingInformation>#billingLastName').hide();
		} else {
			$('#billingInformation>#billingTitle, #billingInformation>#billingFirstName, #billingInformation>#billingLastName').show();
		}
	});
}

function replaceDefaultValue() {
	$('input[type=text]').focus(function() {
		if( this.value == this.defaultValue ) {
			this.value = "";
		}
		}).blur(function() {
		if( !this.value.length ) {
			this.value = this.defaultValue;
		}
	});
}

function setupOverlay() {
	$(".videoOverlay").live('click', function (e) {
				$.colorbox( { iframe: true, href: e.currentTarget.href, fastIframe: false,
					innerWidth: 800, innerHeight: 670, opacity: 0.5, scrolling: false,
					close: "Exit", width: 800, height: 670, onClosed: function () { return; }
				});
				e.preventDefault();
	});
}

function hideHoney() {
	$('#xljsdfljkj, .xljsdfljkj').css({
		'position' : 'absolute',
		'top' : '-9999px',
		'left' : '-9999px'
	});
}

function validateForm() {
	$('#customerServiceForm').validate({
		groups: {
			contactName: "title firstName lastName"
		},
		rules: {
			email: {
				required: true,
				email: true
			},
			firstName: "required defaultInvalid",
			lastName: "required defaultInvalid",
			title: "required",
			topicID: "required",
			comments: "required"
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "title" || element.attr("name") == "firstName" || element.attr("name") == "lastName")
				error.insertAfter("#lastName");
			else
				error.insertAfter(element);
		},
		showErrors: function(errorMap, errorList) {
      		this.defaultShowErrors();
      		$(this.currentForm).find('label[for=comments].error').addClass('commentsError');
    	},
		messages: {
			email: {
				required: "Email is required.",
				email: "Valid email required."
			},
			topicID: "Please choose a topic.",
			comments: "Tell us how we can help.",
			firstName: "First Name is required.",
			lastName: "Last Name is required.",
			title: "Please choose a Title."		
		}
	});
}

function trackAction (e) {
	var qLinkName = $(this).attr('clicktrack');
	if(!(typeof s_account === "undefined"))
	{
		var s=s_gi(s_account);
		s.templtv=s.linkTrackVars;
		s.templte=s.linkTrackEvents;
		s.manageVars('clearVars') // Kalyani change: New line added
		s.linkTrackVars='eVar30';
		s.eVar30=qLinkName;
		s.tl($(this),'o',qLinkName); // Kalyani change: removed if and added a new line
		if(s.templtv) s.linkTrackVars=s.templtv;
		if(s.templte)s.linkTrackEvents=s.templte;
	}
}