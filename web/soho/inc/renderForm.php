<?php
function renderForm ( $action, $legacyMarket, $productOffer, $price, $submitBtnSrc, $offerMeta = "", $addEmailField = false ) {
	$pageError = ( !!$_GET['error'] ) ? "We&rsquo;re sorry, but there was a problem processing your request. Please fill out the form again." : "";

	if ( $_GET['qaform'] == "QA_MARKET" || $_GET['qaform'] == "DEV_MARKET_KEEGAN" || $_GET['qaform'] == "DEV_MARKET_DOLAN" ){
		$legacyMarket = $_GET['qaform'];
	}

	$visitSource = "";
	if($_GET['source']=="email" || $_GET['source']=="display" || $_GET['source']=="search" || $_GET['source']=="200K" || $_GET['source']=="25"){
		$visitSource = $_GET['source'];
	}
	$emailField = "";
	if(!!$addEmailField){
		$emailField = <<<EMAIL_FIELD
						<div class="fieldBlock">
							<label for="contact_email">Email <small>(Optional)</small></label>
							<input type="Text" value="" name="contact_email" id="contact_email" class="longBox" />
						</div>
EMAIL_FIELD;
	}
	$qstr = ( isset( $_SERVER['QUERY_STRING'] ) ) ? "?".$_SERVER['QUERY_STRING'] : "";
	echo <<<FORM
					<form method="post" action="$action$qstr" id="smbCallback" class="smbCallback">
						<input type="hidden" name="legacyMarket" id="legacyMarket" value="$legacyMarket" />
						<input type="hidden" id="productOffer" name="productOffer" value="$productOffer" />
						<input type="hidden" id="price" name="price" value="$price" />
						<input type="hidden" id="offerMeta" name="offerMeta" value="$offerMeta" />
						<input type="hidden" id="visitSource" name="visitSource" value="$visitSource" />
						<div class="fieldBlock">
							<label for="contact_name">Name</label>
							<input type="Text" id="contact_name" name="contact_name" value="" maxlength="150" class="longBox validate" />
						</div>
						<div class="fieldBlock">
							<label for="contact_business_name">Company</label>
							<input type="Text" name="contact_business_name" id="contact_business_name" value="" maxlength="150" class="longBox validate" />
						</div>
						$emailField
						<div class="fieldBlock">
							<label for="contact_phoneNumber">Phone Number <nobr><small>(Example: XXX-XXX-XXXX)</small></nobr></label>
							<input type="Text" maxlength="14" value="" name="contact_phoneNumber" id="contact_phoneNumber" class="longBox validate" />
						</div>
						<div class="fieldBlock">
							<label for="contact_time">Best time to reach you</label>
							<select name="contact_time" id="contact_time">
								<option value="Morning">Morning</option>
								<option value="Afternoon">Afternoon</option>
								<option value="Evening">Evening</option>
							</select>
						</div>
						<div class="fieldBlock">
							<input type="image" src="$submitBtnSrc" value="submit" class="subBtn" />
							<div id="errorHolder">$pageError</div>
						</div>
					</form>
FORM;
}
