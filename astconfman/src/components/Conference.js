import React, { PropTypes } from 'react'

const Conference = (props) => {

    const { name, users, marked, locked } = props.conference;

    let is_locked_icon = () => {
      if (locked) {
        return ( <span className='glyphicon glyphicon-lock'></span> );
      } else {
        return null;
      }
    };

    let is_marked_icon = () => {
      if (marked) {
       return ( <span className='glyphicon glyphicon-king'></span> );
      } else {
        return null;
      }
    };

    let is_locked_button = () => {
      if (locked) {
        return ( 
          <li><a href={ props.urls.unlockUrl }><span className='glyphicon glyphicon-lock'></span> { props.labels.unlockLabel }</a></li>
            );
      } else {
        return (
          <li><a href={ props.urls.lockUrl }><span className='glyphicon glyphicon-lock'></span> { props.labels.lockLabel }</a></li>
            );
      }
    };

    return (
      <div className='btn-group'>
        <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>

         Conference { name }. Users count { users }  
          <span className='caret'></span>
          { is_locked_icon() }
          { is_marked_icon() }
        </button>

        <ul className='dropdown-menu' aria-labelledby='dropdownMenu'>
            <li><a href={ props.urls.invite_participantUrl }><span className='glyphicon glyphicon-phone-alt'></span> { props.labels.invite_all_participantsLabel }</a></li>
            <li>
                <form className='form' action='{ props.urls.invite_guestUrl }' method='GET'>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='phone' name='phone' placeholder={ props.labels.phone_numberLabel }></input>
                    </div>
                    <div className='input-group-addon'>
                    <button type='submit' className='btn btn-default'><span className='glyphicon glyphicon-phone-alt'></span> { props.labels.inviteLabel }</button>
                    </div>
                </form>
            </li>
            <li><a href={ props.urls.muteUrl }><span className='glyphicon glyphicon-volume-off'></span> { props.labels.mute_allLabel }</a></li>
            <li><a href={ props.urls.unmuteUrl }><span className='glyphicon glyphicon-volume-up'></span> { props.labels.unmute_allLabel }</a></li>
            <li><a href={ props.urls.record_startUrl }><span className='glyphicon glyphicon-record'></span> { props.labels.record_startLabel }</a></li>
            <li><a href={ props.urls.record_stopUrl }><span className='glyphicon glyphicon-stop'></span> { props.labels.record_stopLabel }</a></li>
            { is_locked_button() }
            <li><a href={ props.urls.kickUrl }><span className='glyphicon glyphicon-off'></span> { props.labels.kick_allLabel }</a></li>
            <li><a href={ props.urls.send_invite_emailsUrl }><span className='glyphicon glyphicon-envelope'></span> { props.labels.send_invite_emailsLabel }</a></li>
        </ul>
      </div>
      )
};

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

export default Conference;
