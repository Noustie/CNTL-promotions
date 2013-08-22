function GetCount(year, month, day, hour, min, sec)
{
	var dateNow = new Date();

	var dateFuture = new Date(year, month-1, day, hour, min, sec);                                                            
	var amount = dateFuture.getTime() - dateNow.getTime() + 5;
	var out;     

	/* time is already past */
	if(amount < 0)
    {
		out = "<div class='countdownDial'><span></span>0<div id='days_text'></div></div>" +
			"<div class='countdownDial'><span></span>0<div id='hours_text'></div></div>" +
			"<div class='countdownDial'><span></span>0<div id='mins_text'></div></div>" +
			"<div class='countdownDial'><span></span>0<div id='secs_text'></div></div>";
		document.getElementById('countbox').innerHTML = out;
    }
    else
    {
		days = 0;
		hours = 0;
		mins = 0;
		secs = 0;
		out = "";

		amount = Math.floor(amount / 1000); /* kill the milliseconds */

		days = Math.floor(amount / 86400); /* days */
		amount = amount % 86400;

		hours = Math.floor(amount / 3600); /* hours */
		amount = amount % 3600;

		mins = Math.floor(amount / 60); /* minutes */
		amount = amount % 60;

		secs = Math.floor(amount); /* seconds */

		out = "<div class='countdownDial'><span></span>" + days + "<div id='days_text'></div></div>" + 
			"<div class='countdownDial'><span></span>" + hours + "<div id='hours_text'></div></div>" + 
			"<div class='countdownDial'><span></span>" + mins + "<div id='mins_text'></div></div>" + 
			"<div class='countdownDial'><span></span>" + secs + "<div id='secs_text'></div></div>" ;
		document.getElementById('countbox').innerHTML = out;

		setTimeout(function() { GetCount(year, month, day, hour, min, sec); }, 1000);
	}
}