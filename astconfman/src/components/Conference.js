import React, { PropTypes } from 'react'

export default class Conference extends React.Component {
    constructor(props) {
      super(props);
    }

    is_disabled() {
      if (this.props.current_participant.profile != 'administrator') {
        return 'disabled'
      } else {
        return ''
      } 
    }

    is_locked_icon() {
      if (this.props.conference.locked) {
        return ( <span className='glyphicon glyphicon-lock'></span> );
      } else {
        return null;
      }
    }

    is_marked_icon() {
      if (this.props.conference.marked) {
       return ( <span className='glyphicon glyphicon-king'></span> );
      } else {
        return null;
      }
    }

    is_locked_button() {
      if (this.props.conference.locked) {
        return ( 
          <li><a href={ this.props.urls.unlockUrl }><span className='glyphicon glyphicon-lock'></span> { this.props.labels.unlockLabel }</a></li>
            );
      } else {
        return (
          <li><a href={ this.props.urls.lockUrl }><span className='glyphicon glyphicon-lock'></span> { this.props.labels.lockLabel }</a></li>
            );
      }
    }

    render() {
      return (
        <div className='btn-group'>
          <button disabled={this.is_disabled()} className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>

          Conference { this.props.conference.name }  
            <span className='caret'></span>
            { this.is_locked_icon() }
            { this.is_marked_icon() }
          </button>

          <ul className='dropdown-menu' aria-labelledby='dropdownMenu'>
              <li><a href={ this.props.urls.invite_participantUrl }><span className='glyphicon glyphicon-phone-alt'></span> { this.props.labels.invite_all_participantsLabel }</a></li>
              <li>
                  <form className='form' action='{ this.props.urls.invite_guestUrl }' method='GET'>
                      <div className='form-group'>
                          <input type='text' className='form-control' id='phone' name='phone' placeholder={ this.props.labels.phone_numberLabel }></input>
                      </div>
                      <div className='input-group-addon'>
                      <button type='submit' className='btn btn-default'><span className='glyphicon glyphicon-phone-alt'></span> { this.props.labels.inviteLabel }</button>
                      </div>
                  </form>
              </li>
              <li><a href={ this.props.urls.muteUrl }><span className='glyphicon glyphicon-volume-off'></span> { this.props.labels.mute_allLabel }</a></li>
              <li><a href={ this.props.urls.unmuteUrl }><span className='glyphicon glyphicon-volume-up'></span> { this.props.labels.unmute_allLabel }</a></li>
              <li><a href={ this.props.urls.record_startUrl }><span className='glyphicon glyphicon-record'></span> { this.props.labels.record_startLabel }</a></li>
              <li><a href={ this.props.urls.record_stopUrl }><span className='glyphicon glyphicon-stop'></span> { this.props.labels.record_stopLabel }</a></li>
              { this.is_locked_button() }
              <li><a href={ this.props.urls.kickUrl }><span className='glyphicon glyphicon-off'></span> { this.props.labels.kick_allLabel }</a></li>
              <li><a href={ this.props.urls.send_invite_emailsUrl }><span className='glyphicon glyphicon-envelope'></span> { this.props.labels.send_invite_emailsLabel }</a></li>
          </ul>
        </div>
        )
      }
}

Conference.propTypes = {
  conference: PropTypes.shape({
    name: PropTypes.number.isRequired,
    users: PropTypes.number.isRequired,
    marked: PropTypes.bool.isRequired,
    locked: PropTypes.bool.isRequired
  }),
  urls: PropTypes.shape({
    invite_guestUrl: PropTypes.string.isRequired,
    invite_participantUrl: PropTypes.string.isRequired,
    muteUrl: PropTypes.string.isRequired,
    unmuteUrl: PropTypes.string.isRequired,
    record_startUrl: PropTypes.string.isRequired,
    record_stopUrl: PropTypes.string.isRequired,
    lockUrl: PropTypes.string.isRequired,
    unlockUrl: PropTypes.string.isRequired,
    kickUrl: PropTypes.string.isRequired
  })
};

