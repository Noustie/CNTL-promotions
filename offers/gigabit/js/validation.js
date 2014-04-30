$(function () {
	//CONTACT FORM VALIDATION

	var config = {
		sel_mainForm: '#mailform',
		sel_toValidate: '#mailform .validate',
		sel_phoneNumber: '#contact_phoneNumber',
		sel_email: '#email',
		sel_submitButton: '.subBtn',
		sel_errorHolder: '#errorHolder',
		css_OnError: { color: 'red', border: "1px solid red" },
		css_OnClean: { color: '#7F7F7F', border: '1px solid #BEC0B9' },
		css_OnGood: { color: '#7F7F7F', border: "1px solid #00853F" },
		error_email: 'Please enter a valid email address.',
		error_phone: 'Please enter a valid 10-digit phone number.',
		error_name: 'Please enter a valid contact name.',
		error_bizname: 'Please enter a valid company name.',
		error_other: 'All fields are required. Please check your entries and try again.',
		addErrorClass: 'hasError'
	};

	function init(){
		if ( !!window.formValidatorConfig && typeof window.formValidatorConfig === 'object' ) {
			$.extend( config, window.formValidatorConfig );
		}

		if ( !$(config.sel_mainForm).length ) {
			return;
		}

		$(config.sel_mainForm).on({
			submit: checkFormInput
		});

		$(config.sel_toValidate).on({
			focus: function (e) {
				if ( $(this).hasClass(config.addErrorClass) ) {
					cleanErrorMsg();
				}
				onValidationClean(this);
			},
			blur: function (e) {
				checkFieldData(this)
			}
		});

		//Phone Number Validation
		$(config.sel_phoneNumber).on( {
			focus: function (e) {
				checkFieldData(this);
				onValidationClean(this);
			},
			blur: function (e) {
				checkFieldData(this)
			}
		});
	}

	function onValidationError (obj) {
		$(obj).not(config.sel_submitButton).css( config.css_OnError ).addClass(config.addErrorClass);
	}
	function onValidationClean (obj) {
		$(obj).not(config.sel_submitButton).css( config.css_OnClean );
		//cleanErrorMsg();
	}
	function onValidationGood (obj) {
		$(obj).not(config.sel_submitButton).css( config.css_OnGood ).removeClass(config.addErrorClass);
		if ( !$(config.sel_toValidate).hasClass(config.addErrorClass) ) {
			cleanErrorMsg();
		}
	}
	function formatNumber (rawValue) {
		var formatted = '';
		if ( !!rawValue && !!rawValue.join('') ) {
			var number = rawValue.join('');
			number = number.split('');
			formatted = "(";
			for (var i=0; i < 10; i++) {
				if ( !!number[i] ) {
					if ( i === 3 ) {
						formatted += ") " + number[i];
					} else if ( i === 6 ) {
						formatted += "-" + number[i];
					} else {
						formatted += number[i];
					}
				}
			}
		}
		return formatted;
	}

	function validateNumber ( rawValue, obj ) {
		var isValid = false;
		if ( !!rawValue && !!rawValue.join('') ) {
			var numVal = rawValue;
		} else {
			obj.value = formatNumber(rawValue);
			return isValid;
		}
		if ( numVal.length >= 3 ) {
			isValid = true;

			//Remove leading "1"
			if ( parseInt( numVal[0], 10 ) === 1 ) {
				numVal.shift();
			}
			//North American Numbering plan validation.
			if  (
					//- First Digit can only be 2 - 9
					( parseInt( numVal[0], 10 ) === 0 || parseInt( numVal[0], 10 ) === 1 ) ||
					//- The last 2 digits cannot both be 1
					( parseInt( numVal[1], 10 ) === 1 && parseInt( numVal[2], 10 ) === 1 ) ||
					//- Second Digit & Third Digit can only be 0-8
					( parseInt( numVal[1], 10 ) === 9 || parseInt( numVal[2], 10 ) === 9 ) ||
					//- First and Second digit cannot be 37
					( parseInt( numVal[0], 10 ) === 3 && parseInt( numVal[1], 10 ) === 7 ) ||
					//- First and Second digit cannot be 96
					( parseInt( numVal[0], 10 ) === 9 && parseInt( numVal[1], 10 ) === 6 ) ||
					//- The last 2 digits cannot both be 1
					( parseInt( numVal[1], 10 ) === 1 && parseInt( numVal[2], 10 ) === 1 ) ||
					//- Exclude toll code 900
					( "" + numVal[0] + numVal[1] + numVal[2] === "900"  ) ||
					//- Exclude 958 (reserved for use in movies, etc)
					( "" + numVal[0] + numVal[1] + numVal[2] === "958"  ) ||
					//- Only 10 digit numbers are valid (since we've removed the leading "1")
					( numVal.length !== 10 )
				)
			{
				isValid = false;
			}
			if ( isValid ) {
				// Central Office (Exchange) Code Validation
				if  (
						//- First Digit can only be 2 - 9
						( parseInt( numVal[3], 10 ) === 0 || parseInt( numVal[3], 10 ) === 1 ) ||
						//- The last 2 digits cannot both be 1
						( parseInt( numVal[4], 10 ) === 1 && parseInt( numVal[5], 10 ) === 1 )
					)
				{
					isValid = false;
				}
			}
			obj.value = formatNumber(rawValue);
		}
		return isValid;
	}

	function cleanErrorMsg () {
		$(config.sel_errorHolder).text('');
	}
	function validPhoneErrorMsg () {
		$(config.sel_errorHolder).text(config.error_phone);
	}
	function validFieldErrorMsg (obj) {
		if ( !!obj && !!obj.name.match('business') ) {
			$(config.sel_errorHolder).text(config.error_bizname);
		} else if ( !!obj && !!obj.name.match('name') && !obj.name.match('business') ) {
			$(config.sel_errorHolder).text(config.error_name);
		} else {
			$(config.sel_errorHolder).text(config.error_other);
		}
	}

	function checkFormInput (e) {
		var zeroIfValid = 0;
		$(config.sel_toValidate).each( function( index, obj ) {
			var fieldGood = checkFieldData(obj, true);
			if ( !fieldGood ) {
				validFieldErrorMsg(this);
				zeroIfValid++;
			}
		});
		if ( zeroIfValid !== 0 ) {
			e.preventDefault();
			return false;
		}
		return true;
	}

	function checkFieldData ( obj, forceError ) {
		var isValid = false;
		if (  !!obj.value && $(obj).is(config.sel_phoneNumber) ) {
			var v = validateNumber( obj.value.match(/\d/gi), obj );
			if ( !v ) {
				isValid = false;
				onValidationError(obj);
				validPhoneErrorMsg();
			} else {
				isValid = true;
				onValidationGood(obj);
			}
		}else if(  !!obj.value && $(obj).is(config.sel_email) ) {
			var v = obj.value.match(/^[a-zA-Z0-9+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/);
			if ( !v ) {
				isValid = false;
				onValidationError(obj);
				validPhoneErrorMsg();
			} else {
				isValid = true;
				onValidationGood(obj);
			}
		}else if ( !!obj.value ) {
			var matchChars = obj.value.match(/\w/gi)
			if ( !!matchChars && !!matchChars.length && matchChars.length >= 2 ) {
				onValidationGood(obj);
				isValid = true;
			} else {
				isValid = false;
				validFieldErrorMsg(obj);
				onValidationError(obj);
			}
		} else {
			if ( !!forceError ) {
				onValidationError(obj);
			} else {
				onValidationClean(obj);
			}
		}
		return isValid;
	}

	init();
});