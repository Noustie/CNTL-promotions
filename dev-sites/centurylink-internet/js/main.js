function configureCountdown(){

	Date.prototype.stdTimezoneOffset = function() {
		var jan = new Date(this.getFullYear(), 0, 1);
		var jul = new Date(this.getFullYear(), 6, 1);
		return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
	}

	Date.prototype.dst = function() {
		return this.getTimezoneOffset() < this.stdTimezoneOffset();
	}

	var dst_offset = 240;

	//What is today?
	var d = new Date();
	if (!d.dst()) { 
		//console.log("Daylight savings time!"); 
		var dst_offset = 300;
	}

	//d.setHours(21);

	var store_gmt_offset = (dst_offset*60);
	var modified_gmt_offset = (d.getTimezoneOffset()*60) - store_gmt_offset;

	var secInADay = (60*60*24);
	var saturdayOffset = { open:(60*60*9), close:(60*60*21) };
	var sundayOffset = { open:(60*60*10), close:(60*60*19) };
	var weekdayOffset = { open:(60*60*7), close:(60*60*23) };

	var weekday = new Array(7);
		weekday[0]="Sunday";
		weekday[1]="Monday";
		weekday[2]="Tuesday";
		weekday[3]="Wednesday";
		weekday[4]="Thursday";
		weekday[5]="Friday";
		weekday[6]="Saturday";

	var today = weekday[d.getDay()]; //today is ...

	//How many seconds left in today
	var today_abs = new Date();
	today_abs.setHours(0);
	today_abs.setMinutes(0);
	today_abs.setSeconds(0);
	today_secs = ( d.getTime() - today_abs.getTime() ) / 1000;
	secCalc = secInADay - today_secs - modified_gmt_offset;//money!
	
	//If Store is closed
	if (
			( today == "Saturday" && today_secs > saturdayOffset.close ) ||
			( today == "Saturday" && today_secs < saturdayOffset.open ) ||
			( today == "Sunday" && today_secs > sundayOffset.close ) ||
			( today == "Sunday" && today_secs < sundayOffset.open ) ||
			( today_secs > weekdayOffset.close ) ||
			( today_secs < weekdayOffset.open )
		)
	{
		secCalc = 0;
	} else {
		if ( today == "Saturday" ) {
			secCalc = secCalc - ( secInADay - saturdayOffset.close );
		} else if ( today == "Sunday" ) {
			secCalc = secCalc - ( secInADay - sundayOffset.close );
		} else {
			secCalc = secCalc - ( secInADay - weekdayOffset.close );
		}
	}

	return secCalc; // final answer will be how many seconds there are left until the EOD based on day of week
}

function GetCount(amount){
	var out="";

    if( amount < 0 ){
        out='<div class="countNum hours"><span></span><span class="num numLeft">0</span><span class="num numRight">0</span><div class="hours_text countText">hrs</div></div>' +
			'<div class="countNum mins"><span></span><span class="num numLeft">0</span><span class="num numRight">0</span><div class="mins_text countText">mins</div></div>' +
			'<div class="countNum secs"><span></span><span class="num numLeft">0</span><span class="num numRight">0</span><div class="secs_text countText">secs</div></div>';

        document.getElementById('countbox').innerHTML = out;
    } else {

        hours=0;mins=0;secs=0;

        var _tempamount = amount;
        
        hours = Math.floor( _tempamount / 3600 ); /* hours */
        _tempamount = _tempamount % 3600;

        mins = Math.floor( _tempamount / 60 ); /* minutes */
        _tempamount = _tempamount % 60;

        secs=Math.floor(_tempamount); /* seconds */

        out='<div class="countNum hours"><span></span>' + padNum( hours ) +'<div class="hours_text countText">hrs</div></div>' +
			'<div class="countNum mins"><span></span>' + padNum( mins ) +'<div class="mins_text countText">mins</div></div>' +
			'<div class="countNum secs"><span></span>' + padNum( secs ) +'<div class="secs_text countText">secs</div></div>';

        document.getElementById('countbox').innerHTML = out;

		var nextAmount = amount - 1;
        setTimeout(function () { GetCount( nextAmount ) }, 1000);
    }
}

function padNum(num) {
    var s = "00" + num;
    var _s = (s.substr(s.length-2)).split('');
    return '<span class="num numLeft">'+_s[0]+'</span><span class="num numRight">'+_s[1]+'</span>';
}

$(document).ready(function(){
	GetCount( configureCountdown() );
});


