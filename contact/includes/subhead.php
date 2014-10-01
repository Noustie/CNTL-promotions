	    	<!-- START SUBHEAD -->
	    	<div class="subHeaderCont">
	    		<?php if ($currentFile == 'index.php') : ?>
	    		<h2>Let&rsquo;s Connect</h2>
	    		<div class="connect left">
	    			<p>We want to address your concerns as quickly as possible. Please fill out the form below, and we will get to work.</p>
	    		</div>
<!--
	    		<?php //elseif ($currentFile == 'team.php') : ?>
	    		<div class="connect left">
	    			<p><a href="index.php">&laquo; Back to Contact Form</a></p>
	    		</div>
-->
	    		<?php endif; ?>
	    		<div class="subnav right">
	    			<?php if ($currentFile != 'team.php') : ?>
					<div class="team right">
	    				<p><a href="team.php" clicktrack="ctl|rsd|product|emktg|2012|customer_service|button|meet_team" target="_blank">Meet the Team</a></p>
	    			</div>
	    			<?php endif; ?>
					<div class="tweet right">
	    				<p>Send us a tweet or follow us at<br /><a href="http://twitter.com/CenturyLinkHelp" target="_blank" clicktrack="ctl|rsd|product|emktg|2012|customer_service|button|twitter">@CenturyLinkHelp</a></p>
	    			</div>
	    		</div>
	    		<?php if ($currentFile != 'team.php') : ?>
	    		<div class="subheadInternetBlock">
					<div class="innerWrap">
						<div class="copyBlock">
							<img class="serviceTroubleImg" src="/contact/images/dr-kit-icon.png" alt="Service Troubleshooter">
							<h3>Are you having Internet issues? </h3>
							<p><a href="#learnmore">The Service Troubleshooter</a> can help you diagnose and resolve many Internet problems. </p>
						</div>
						<a href="#learnmore" class="btn-learn-more">Learn More</a>
					</div>
	    		</div>
	    		<?php endif; ?>	    		
	    	</div>
	    	<!-- END SUBHEAD -->