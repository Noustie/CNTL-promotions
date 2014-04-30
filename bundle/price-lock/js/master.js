/// <reference path="http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js" />

// preload tab bg images
$("<img />").attr("src", "images/tab_hover.png").load(function () { $("body").append($(this)); $(this).hide(); });