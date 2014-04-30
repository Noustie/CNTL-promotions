$(function(){
    var deviceBlackberry = "blackberry";
    var uagent = navigator.userAgent.toLowerCase();
    DetectDevice();

        function DetectDevice() {
            if (uagent.search(deviceBlackberry) > -1) {
            	$("a.location-1544").attr("href", "https://maps.google.com/maps?q=1544+Governors+Square+Blvd,+Tallahassee,+Leon,+Florida+32301&ie=UTF8&hl=en&geocode=Fch20AEd21b6-g&split=0&hq=&hnear=1544+Governors+Square+Blvd,+Tallahassee,+Leon,+Florida+32301&t=h&z=17&vpsrc=0&iwloc=A")
            	$("a.location-2020").attr("href", "https://maps.google.com/maps?f=q&source=s_q&hl=en&q=2020+W+Pensacola+St+%23210,+Tallahassee,+Leon,+Florida+32304&aq=&sll=30.439112,-84.257061&sspn=0.009093,0.008068&vpsrc=0&ie=UTF8&geocode=FdN80AEdhGj5-g&split=0&hq=&hnear=2020+W+Pensacola+St+%23210,+Tallahassee,+Leon,+Florida+32304&t=m&z=17&iwloc=A")
            }
        }


});