import React, { PropTypes } from 'react'
import Participant from '../components/Participant'

const Participants = (props) => {

//    const { name, users, marked, locked } = props.conference;
    
    return (
       <div className='row'>
          <div className='container'>
            <ul>

            { props.participants.map( (item, index) => <Participant key={index} urls={props.urls} labels={props.labels} participant={item} participantActions={props.participantsActions}></Participant>  ) } 

            </ul>
          </div>
       </div>
    );
};

Participants.propTypes = {
  participants: PropTypes.arrayOf(
    PropTypes.shape({
      callerid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      is_admin: PropTypes.bool.isRequired,
      is_marked: PropTypes.bool.isRequired,
      is_muted: PropTypes.bool.isRequired,
      channel: PropTypes.string.isRequired,
      unmute_request: PropTypes.bool.isRequired
    })
  )
}

export default Participants;
