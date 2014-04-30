		<!-- begin sharing -->
		<div class="share col colRight">
			<div class="shareBox">
				<div class="fbshare" data-send="false" data-layout="button_count" data-width="50" data-show-faces="false" data-font="arial"><a data-href="<?php echo $fb_url; ?>" href="#share" <?php if(!!$svar['fbTrack']){echo 'clicktrack="'.$svar['fbTrack'].'"';}?>><img src="/offers/common/dtv-triple/img/share-fb.gif" alt="Share on Facebook" /></a></div>
			</div>
			<div class="shareBox">
				<a href="https://twitter.com/share" <?php if(!!$svar['twtTrack']){echo 'clicktrack="'.$svar['twtTrack'].'"';}?> class="twitter-share-button" data-url="<?php echo $twt_url; ?>" data-text="<?php echo $twt_text; ?>" data-count="none">Tweet</a>
			</div>
		</div>
