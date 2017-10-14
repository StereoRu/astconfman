var ParticipantList = React.createClass({
render: function() {
	var participantNodes = this.props.data.map(function (p) {
	var mutedBtn;
	var unmutedBtn;
	var mutedSpan;
	var adminSpan;
	var markedSpan;
	if (p.flags.indexOf('m') != -1) {
		mutedBtn = <li><a href={unmuteUrl + p.channel}><span className="glyphicon glyphicon-volume-up"></span> {unmuteLabel}</a></li>
		mutedSpan = <span className="glyphicon glyphicon-volume-off"></span>
	}
	if (p.flags.indexOf('m') == -1) {
		unmutedBtn = <li><a href={muteUrl + p.channel}><span className="glyphicon glyphicon-volume-off"></span> {muteLabel}</a></li>
	}                            
	if (p.flags.indexOf('A') != -1) {
		adminSpan = <span className="glyphicon glyphicon-text-color"></span>
	}                       
	if (p.flags.indexOf('M') != -1) {
		markedSpan = <span className="glyphicon glyphicon-king"></span>
	}                                               
	return (
		<div className='btn-group'>
		<button id={'participant-' + p.callerid} className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
		{mutedSpan}
		{adminSpan}
		{markedSpan}
		{' ' + p.callerid + ' '} 
		<span className="caret"></span>
		</button>
		<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
			<li><a href={kickUrl + p.channel}><span className="glyphicon glyphicon-remove"></span> {kickLabel} </a></li>
			{mutedBtn} 
			{unmutedBtn}
		</ul>                            
		</div>
	) 
	});                    
	return (
		<div className="row customNoMargin">
		{participantNodes}
		</div>
	);
}
});

var ParticipantBox = React.createClass({

loadFromServer: function() {
	$.ajax({
	url: this.props.url,
	dataType: 'json',
	cache: false,
	success: function(data) {
	this.setState({data: data});
	}.bind(this),
	error: function(xhr, status, err) {
	console.error(this.props.url, status, err.toString());
	}.bind(this)
	});
},

getInitialState: function() {
	return {data: []};
},

componentDidMount: function() {
	this.loadFromServer();
	window.participantBox = this;
	},                

render: function() {                    
	return (
	<div class="participants">
		<ParticipantList ref="participantList"  data={this.state.data} />
	</div>
	);
}
});

var participantBoxUrl = "/asterisk/online_participants.json/"+modelNumber
React.render(
<ParticipantBox url={participantBoxUrl} />,
document.getElementById('online_participants')
);
