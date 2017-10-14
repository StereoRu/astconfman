$(document).ready(function(){

	var callerid = '';

	function btn_class(cls) {
		var btn = document.getElementById("participant-" + callerid);
	//$("participant-" + msg.callerid).css('btn btn-primary dropdown-toggle');
	btn.className = 'btn ' + cls + ' dropdown-toggle';
	};            

	function blink1() {
	btn_class('btn-default');                          
	setTimeout(blink2, 600);
	};

	function blink2() {
	btn_class('btn-primary');
	setTimeout(blink3, 600);
	};

	function blink3() {
	btn_class('btn-default');
	setTimeout(blink4, 600);
	};

	function blink4() {
	btn_class('btn-primary');
	setTimeout(blink5, 600);
	};

	function blink5() {
	btn_class('btn-default');
	};

	var evtSrc = new EventSource("/sse_subscribe");
//            # TODO: may be refactor on EventListener
	evtSrc.onmessage = function(e) {
	var data = JSON.parse(e.data);
	if (data.room != modelId) {
		return;
	}
	if (data.command == "update_participants") {
		window.setTimeout(window.participantBox.loadFromServer, 800);
	}
	if (data.command == "log_message") {
		var table = document.getElementById("logsTable");
		var row = table.insertRow(0);

		var date = new Date()
		dateTimeNow = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()

		row.innerHTML = `
		<td style='white-space:nowrap; padding:0;'>`+ dateTimeNow +`</td> 
		<td style='white-space:nowrap; padding:0;'> `+ data.message +`</td>`;
	}
	if (data.command == "unmute_request") {
//                  TODO: refactor on separate blink func and unmute_request func
		callerid = data.message;
		btn_class('btn-primary');
		setTimeout(blink1, 600);
	}
	};

	setInterval(function() {
	var btnRoom = $('#dropdownMenu1')
	if (btnRoom.hasClass('btn-default')) {
	btnRoom.removeClass('btn-default') 
	btnRoom.addClass('btn-warning') 
	}
	else {
	btnRoom.removeClass('btn-warning') 
	btnRoom.addClass('btn-default') 
	}
	}, 600);
});
