<?php
// start a new session

error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', '1');

require_once 'CenturyLinkGadget.php';

$CLFeed = new CenturyLinkGadget(true);
$CLFeed->dumpPlaylists();