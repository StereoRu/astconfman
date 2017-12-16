import React, { PropTypes } from 'react'

export default class Participant extends React.Component {
  constructor(props) {
    super(props);
//    console.log('participant. props=', this.props.participant)
    this.state = { btn_classes: 'btn dropdown-toggle' };

    this.style_participant_button = {
      margin: '5px'
    };
  }

  componentWillMount() { 
//    console.log('componentWillUpdate()')
    this.check_unmute()
  }
  componentWillReceiveProps() {
//    console.log('componentWillReceiveProps()')
    this.check_unmute()
  }

  check_unmute() {
    this.setState({ btn_classes: 'btn-default ' + this.state.btn_classes })
    if (this.props.participant.unmute_request === true) {
//      console.log('check_unmute() BLINK. unmute_request=', this.props.participant.unmute_request, 'callerid=', this.props.participant.callerid)

      let timeout = setInterval( () => {
        this.btn_blink();
      }, 700);

      setTimeout( () => {
        clearInterval(timeout);
        let btn_classes_arr = this.state.btn_classes.split(' ')
        btn_classes_arr[0] = 'btn-default'
        this.setState({ btn_classes: btn_classes_arr.join(' ') })

//        console.log('participant.check_unmute fire updateParticipantByCallerid callerid=', this.props.participant.callerid, 'unmute_request=', !this.props.participant.unmute_request)
        this.props.participantActions.updateParticipantByCallerid({
                      callerid: this.props.participant.callerid, 
                      unmute_request: !this.props.participant.unmute_request
                     })
      }, 5000);

    } 
  }

  btn_blink() {
    let btn_classes_arr = this.state.btn_classes.split(' ')
    if (btn_classes_arr[0] == 'btn-default') {
      btn_classes_arr[0] = 'btn-info'
    } else {
      btn_classes_arr[0] = 'btn-default'
    }

    this.setState({ btn_classes: btn_classes_arr.join(' ') })
  }

  buttonsAndSpans() {
    if (this.props.participant.is_muted) {
        var mutedBtn = <li><a href={ this.props.urls.unmuteUrl + this.props.participant.channel }><span className='glyphicon glyphicon-volume-up'></span> {this.props.labels.unmuteLabel}</a></li>
        var mutedSpan = <span className='glyphicon glyphicon-volume-off'></span>
    }
    if (!this.props.participant.is_muted) {
        var unmutedBtn = <li><a href={this.props.urls.muteUrl + this.props.participant.channel}><span className='glyphicon glyphicon-volume-off'></span> {this.props.labels.muteLabel}</a></li>
    }                            
    if (this.props.participant.is_admin) {
        var adminSpan = <span className='glyphicon glyphicon-text-color'></span>
    }                       
    if (this.props.participant.is_marked) {
        var markedSpan = <span className='glyphicon glyphicon-king'></span>
    }                                               

    return { 'mutedBtn': mutedBtn, 'mutedSpan': mutedSpan, 'unmutedBtn': unmutedBtn, 'adminSpan': adminSpan, 'markedSpan': markedSpan }
  }
    
  render() {
    return (
      <div className='btn-group' style={this.style_participant_button}>
          <button className={this.state.btn_classes} type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
          {this.buttonsAndSpans().mutedSpan}
          {this.buttonsAndSpans().adminSpan}
          {this.buttonsAndSpans().markedSpan}
          {' ' + this.props.participant.callerid + ' '} 
          <span className='caret'></span>
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
              <li><a href={this.props.urls.kickUrl+this.props.participant.channel}><span className='glyphicon glyphicon-remove'></span> {this.props.labels.kickLabel} </a></li>
              {this.buttonsAndSpans().mutedBtn} 
              {this.buttonsAndSpans().unmutedBtn}
          </ul>                            
      </div>
    ); 
  }

}

Participant.propTypes = {
  participant: PropTypes.shape({
    callerid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    is_admin: PropTypes.bool.isRequired,
    is_marked: PropTypes.bool.isRequired,
    is_muted: PropTypes.bool.isRequired,
    channel: PropTypes.string.isRequired,
    unmute_request: PropTypes.bool.isRequired
  })
};
