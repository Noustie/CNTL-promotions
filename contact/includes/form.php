	    	<div class="formContainer">
				<form action="/contact/indexDoIt.php" id="customerServiceForm" method="post">
					<input type="hidden" name="success" id="success" value="<?php echo $successPath; ?>success.php" />
					<section class="section">
						<h3 class="gradHeader">How Can We Help You? <span>(Required)</span></h3>
						<p>
							<label for="topicID">What is the nature of your inquiry?</label>
							<select id="topicID" name="topicID">
								<option value="" selected="selected">Select a Topic</option>
								<option value="1">My Account</option>
								<option value="2">Customer Service</option>
								<option value="3">Phone Repair</option>
								<option value="4">Internet/Technical Support</option>
								<option value="5">Billing/Pricing</option>
								<option value="6">Other</option>
							</select>
						</p>
						<p class="commentsP">
							<label for="comments">What seems to be giving you trouble today?</label>
							<textarea id="comments" name="comments"></textarea>
						</p>
					</section>
					<section class="section">
						<h3 class="gradHeader">Contact Information <span>(Required)</span></h3>
						<p class="contactP">
							<span class="gutterBlock">
								<label for="title">Contact Name:</label>
								<span class="ghost">Must be at least 18 years old and authorized to act on behalf of the primary account holder.</span>
								<select id="title" name="title">
									<option value="" selected="selected">Title</option>
									<option value="Mr.">Mr.</option>
									<option value="Mrs.">Mrs.</option>
									<option value="Ms.">Ms.</option>
									<option value="Dr.">Dr.</option>
								</select>
								<input type="text" name="firstName" id="firstName" value="First Name" />
								<input type="text" name="lastName" id="lastName" value="Last Name" />
							</span>
							<span class="gutterBlock"><input type="text" name="email" id="email" value="Email Address" /></span>
						</p>
					</section>					
					<section class="section">
						<h3 class="gradHeader">Account Information</h3>
						<p class="accountIntro">Though not required, this information will help us provide assistance if you have account-specific questions.</p>
						<div id="accountInfoFloats">
							<div id="acctNumCont" class="left">
								<p>
									<label for="acctNum">Account Number:</label>
									<input type="text" name="acctNum" id="acctNum" />
									<span class="ghost">Providing your account number will expedite your request.</span>
								</p>
							</div>
							<div id="teleNumCont" class="left">
								<p>
									<label for="phone">Telephone Number Associated with Account:</label>
									<input type="text" name="phone" id="phone" maxlength="14" />
									<span class="ghost">Format: (555) 555-5555</span>
								</p>
							</div>
						</div>
						<p id="billingInformation">
							<label for="billingTitle">Billing Name:</label>
							<label for="sameAsContact" class="sameAsContactLabel"><input name="sameAsContact" id="sameAsContact" type="checkbox" /> Same as Contact Name above</label>
							<select id="billingTitle" name="billingTitle">
								<option value="" selected="selected">Title</option>
								<option value="Mr.">Mr.</option>
								<option value="Mrs.">Mrs.</option>
								<option value="Ms.">Ms.</option>
								<option value="Dr.">Dr.</option>
							</select>
							<input type="text" name="billingFirstName" id="billingFirstName" value="First Name" />
							<input type="text" name="billingLastName" id="billingLastName" value="Last Name" />
						</p>
						<p>
							<label for="billingAddress1">Billing Address:</label>
							<input type="text" name="billingAddress1" id="billingAddress1" value="Street Address" />
							<input type="text" name="billingAddress2" id="billingAddress2" value="Suite, Apt. #, etc." />
							<select id="billingState" name="billingState">
								<option value="" selected="selected">State</option>
								<option value="AL">AL</option>
	                            <option value="AZ">AZ</option>
	                            <option value="AR">AR</option>
	                            <option value="CA">CA</option>
	                            <option value="CO">CO</option>
	                            <option value="FL">FL</option>
	                            <option value="GA">GA</option>
	                            <option value="ID">ID</option>
	                            <option value="IL">IL</option>
	                            <option value="IN">IN</option>
	                            <option value="IA">IA</option>
	                            <option value="KS">KS</option>
	                            <option value="LA">LA</option>
	                            <option value="MI">MI</option>
	                            <option value="MN">MN</option>
	                            <option value="MS">MS</option>
	                            <option value="MO">MO</option>
	                            <option value="MT">MT</option>
	                            <option value="NE">NE</option>
	                            <option value="NV">NV</option>
	                            <option value="NJ">NJ</option>
	                            <option value="NM">NM</option>
	                            <option value="NC">NC</option>
	                            <option value="ND">ND</option>
	                            <option value="OH">OH</option>
	                            <option value="OK">OK</option>
	                            <option value="OR">OR</option>
	                            <option value="PA">PA</option>
	                            <option value="SC">SC</option>
	                            <option value="SD">SD</option>
	                            <option value="TN">TN</option>
	                            <option value="TX">TX</option>
	                            <option value="UT">UT</option>
	                            <option value="VA">VA</option>
	                            <option value="WA">WA</option>
	                            <option value="WI">WI</option>
	                            <option value="WY">WY</option>
							</select>
							<input type="text" name="billingZipCode" id="billingZipCode" value="Zip Code" maxlength="10" />
						</p>
						<p>
							<?php if($successPath == '/contact/') : ?>
							<input class="submitBtn" type="image" src="/contact/images/workBtn.png" value="Put Us To Work" clicktrack="ctl|rsd|product|emktg|2012|customer_service|button|submit" />
							<?php else : ?>
							<input class="submitBtn" type="image" src="/contact/images/workBtn.png" value="Put Us To Work" clicktrack="ctl|rsd|product|emktg|2012|facebook|customer_service|button|submit" />
							<?php endif; ?>
						</p>
						<label class="xljsdfljkj" for="xljsdfljkj">If you are using a screen reader, please skip this field.</label>
	                    <input type="text" name="xljsdfljkj" id="xljsdfljkj" value="" />
					</section>
				</form>
			</div>
