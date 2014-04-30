        <div id="modal">
            <div id="contact_form">
<?php if ( $_GET["thanks"] == 1 ): ?>

                <div id="message" style="display: block;">
                    <h2>Congratulations!</h2>
                    <p>Now you’ll be one of the first to know when CenturyLink<sup>&reg;</sup> 1-gigabit service is available in your area.</p>
                </div>

<?php elseif ( $_COOKIE["vegas_gpon_cookie"] == "yes" ) : ?>  

                <div id="message">
                    <h2>Thanks!</h2>
                    <p>According to our records, you have already signed up for Las Vegas 1Gig notifications.</p>
                </div>

<?php else: ?>
                <p class="sign-me-up-p">Get the latest news on<br>speeds up to 1 Gig.</p>
                <a href="#" class="close-button">
                    <img src="<?php echo $path; ?>/img/modal-X.png" alt="">
                </a>                 
                <form id="mailform" name="mailform" action="inc/mailform.php" method="post">
                    <!-- succes link -->
                    <input type="hidden" id="successView" name="successView" value="/offers/gigabit/index.php">

                    <!-- name -->
                    <label>
                        <span class="placeholder">Name <i>(Required)</i></span>
                        <input type="Text" class="longBox validate" maxlength="150" size="25" value="" name="name" id="name">
                    </label>

                    <!-- email -->
                    <label>
                        <span>Email <i>(Required)</i></span>
                        <input type="Text" class="longBox validate" maxlength="150" size="25" value="" name="email" id="email">
                    </label>

                    <!-- streetAddress -->
                    <label>
                        <span>Street Address <i>(Required)</i></span>
                        <input type="Text" class="longBox validate" maxlength="150" size="25" value="" name="streetAddress" id="streetAddress">
                    </label>

                    <!-- unit -->
                    <label>
                        <span class="shorty1">Unit</span>
                        <input type="Text" class="shortBox1" maxlength="10" size="10" value="" name="unitNumber" id="unitNumber">
                    </label>

                    <!-- state -->
                    <label class="state-select">
                        <select value="" name="state" id="state">
                            <option selected>State</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="Washington">Washington, DC</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                        </select>
                    </label>

                    <!-- zip -->
                    <label>
                        <span class="shorty3">ZIP <i>(Required)</i></span>
                        <input type="Text" class="shortBox3 validate" maxlength="5" size="15" value="" name="zip" id="zip">
                    </label>

                    <!-- phoneNumber -->
                    <label>
                        <span class="shorty4">Phone <i>(Optional)</i></span>
                        <input type="Text" class="shortBox4" maxlength="150" size="25" value="" name="phone" id="phone">
                    </label>
                    
                    <input type="image" class="subBtn" value="SUBMIT" src="<?php echo $path; ?>/img/form-submit-btn.png">
                </form>
<?php endif; ?>
            </div>       
        </div><!--end right-side div-->
        <div style="clear:both"></div>
    </div>
</div>