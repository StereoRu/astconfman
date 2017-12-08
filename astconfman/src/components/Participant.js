import React, { PropTypes } from 'react'

const Participant = (props) => {

    let buttonsAndSpans = () => {
      if (props.participant.is_muted) {
          var mutedBtn = <li><a href={ props.urls.unmuteUrl + props.participant.channel }><span className='glyphicon glyphicon-volume-up'></span> {props.labels.unmuteLabel}</a></li>
          var mutedSpan = <span className='glyphicon glyphicon-volume-off'></span>
      }
      if (!props.participant.is_muted) {
          var unmutedBtn = <li><a href={props.urls.muteUrl + props.participant.channel}><span className='glyphicon glyphicon-volume-off'></span> {props.labels.muteLabel}</a></li>
      }                            
      if (props.participant.is_admin) {
          var adminSpan = <span className='glyphicon glyphicon-text-color'></span>
      }                       
      if (props.participant.is_marked) {
          var markedSpan = <span className='glyphicon glyphicon-king'></span>
      }                                               

      return { 'mutedBtn': mutedBtn, 'mutedSpan': mutedSpan, 'unmutedBtn': unmutedBtn, 'adminSpan': adminSpan, 'markedSpan': markedSpan }
    };
    
    let _buttonsAndSpans = buttonsAndSpans()
  
    return (
      <div className='btn-group'>
          <button id={'participant-' + props.participant.callerid} className='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
          {_buttonsAndSpans.mutedSpan}
          {_buttonsAndSpans.adminSpan}
          {_buttonsAndSpans.markedSpan}
          {' ' + props.participant.callerid + ' '} 
          <span className='caret'></span>
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
              <li><a href={props.urls.kickUrl+props.participant.channel}><span className='glyphicon glyphicon-remove'></span> {props.labels.kickLabel} </a></li>
              {_buttonsAndSpans.mutedBtn} 
              {_buttonsAndSpans.unmutedBtn}
          </ul>                            
      </div>
    ); 

};

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

export default Participant;
