import React, { PropTypes } from 'react'

const Current_participant = (props) => {

  let sendUnmuteRequest = () => {
    props.participantsActions.updateParticipant({ 
                callerid: props.current_participant.phone,
                unmute_request: true })
  }

  return (
      <button className='btn btn-info' type='button' onClick={sendUnmuteRequest}>You number is {props.current_participant.phone}. Press for ask the word.</button>
      );


};

Current_participant.propTypes = {
  current_participant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  })
};

export default Current_participant;
