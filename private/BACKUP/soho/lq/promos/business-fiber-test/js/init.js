//LOGIC FOR PAGE PRE-INITIALIZATION

var htmlTag = document.getElementsByTagName('html')[0];

if( navigator.userAgent.match(/Android/gi) ){ htmlTag.className += ' isAndroid' };

