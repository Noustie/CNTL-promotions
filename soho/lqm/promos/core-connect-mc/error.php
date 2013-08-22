<?php
    $pageID = 'qwtCC_MC';
    $pageTitle = 'Core Connect';
    $classExts = 'ccShortHeader showBB';
    $headIncludeBlock = <<<HEADDOC
<style type="text/css">

</style>
HEADDOC;
?>
<?php include_once('../../inc/head.php') ?>
<?php include_once('./inc/top.php') ?>
		<div id="success" class="reqCont container">
			<div class="contentWrap">
				<h4>There was an error with your submission.</h4>
				<p>Please try again later.</p>
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
