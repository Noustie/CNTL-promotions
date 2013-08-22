<?php
    $pageID = 'ctlCC_MC';
    $pageTitle = 'Core Connect';
    $classExts = 'ccHeader showBB';
    $headIncludeBlock = <<<HEADDOC

HEADDOC;
?>
<?php include_once('../../inc/head.php') ?>
<?php include_once('./inc/top.php') ?>
		<div id="request" class="reqCont container">
			<div class="contentWrap">
				<p>A representative will contact you using the information you provide below.</p>
				<p><strong>All fields required.</strong></p><br/>
				<form name="smallBusiness_Promos" id="smallBusiness_Promos" action="https://embarq.centurylink.com/formprocessor/mailer.do" method="post">
					<input type="hidden" id="FormName" name="FormName" value="smallBusiness">
					<input type="hidden" id="environmentPath" name="environmentPath" value="">
					<input type="hidden" id="successView" name="successView" value="<?php echo( "http://".$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF'])."/success.php" ); ?>">
					<input type="hidden" id="errorView" name="errorView"value="<?php echo( "http://".$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF'])."/error.php" ); ?>">
					<input type="hidden" id="product" name="product" value="CoreConnect">
					<input type="hidden" id="price" name="price" value="105.00">
					<p>Name</p>
					<input type="Text" name="name" value="" size="25" class="txtField" maxlength="150" required>
					<br/>
					<p>Business Name</p>
					<input type="Text" name="business_name" value="" size="25" class="txtField" maxlength="150" required>
					<br/>
					<p>Phone</p>
					<input type="Text" name="phone1" value="" size="3" maxlength="3" class="txtField phn" required>
					<input type="Text" name="phone2" value="" size="3" maxlength="3" class="txtField phn" required>
					<input type="Text" name="phone3" value="" size="4" maxlength="4" class="txtField phn" required>
					<br/>
					<p>Best time to reach you</p>
					<select name="time">
					 <option value="Morning">Morning</option>
					 <option value="Afternoon">Afternoon</option>
					 <option value="Evening">Evening</option>
					</select>
					<br/>
					<br/>
					<input type="image" src="/soho/m-assets/images/btn-contactMe.gif" value="submit">
				</form>
			</div>
		</div>
<?php include_once('./inc/btm.php') ?>
<?php
    $s_account = 'qwestmobiledev';
    //if ( $_SERVER['SERVER_NAME'] ) {}

    $s_pageName = '';
    $s_server = '';
    $s_channel = '';
    $s_prop24 = $s_evar53 = '';
    $s_prop25 = $s_evar54 = '';
    $s_prop38 = $s_evar48 = '';
    $s_prop39 = $s_evar49 = '';
?>
<?php include_once('../../inc/foot.php') ?>
