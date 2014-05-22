/*
 * Century Core Convenience Shortcuts
 * Shortcuts to provide quick access to Century Core parts and peices.  Used by the Century Core Library, and required.
 * Author: John Murray <john.murray2@centurylink.com
 * Copyright 2012, Centurylink
 * Date: 3/2/2012
 * Revision: 1
 */
 
//Placed here to ensure they can be ordered AFTER centurycore loads, to prevent some race condition issues we have been seeing.

// Seeing q=$.centurycore; failing a lot, so putting nested try catch to make sure it works more often :-)
try{
	q=$.centurycore;
	}catch(e){	
	try{
	q=$.centurycore;
	}catch(e){	
	}	
	}
qm = $.centurycore.modals;
qmz = $.centurycore.modals.zam;
qmc = $.centurycore.modals.ctam;
qmch = $.centurycore.modals.chctam;
qmm = $.centurycore.modals.mam;
qp = $.centurycore.popups;
qmu = $.centurycore.modals.upm;
qa = $.centurycore.analytics;
qwo = $.centurycore.welcomeobject;
br = $.centurycore.bannerRotator;