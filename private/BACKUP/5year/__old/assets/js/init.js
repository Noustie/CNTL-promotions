$(function() {
  var params = { wmode: "transparent", allowfullscreen: "false" };
  var attributes = { id: "flash_container", name: "flash_container" };

  swfobject.embedSWF("main.swf", "flash_container", "100%", "100%", "10.0.0", null, null, params, attributes);   
});