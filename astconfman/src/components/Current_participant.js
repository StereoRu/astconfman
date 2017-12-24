import React, { PropTypes } from 'react'

const Current_participant = (props) => {

  let sendUnmuteRequest = () => {
    props.flashActions.updateFlash({severity: 'info', text: 'Вы отправили запрос слова в конференции для номера '+props.current_participant.phone})
    props.current_participantActions.sendApiRequest({url: props.urls.unmuteRequestUrl+'&callerid='+props.current_participant.phone})
  }

  let is_disabled = () => {
    if (props.current_participant.id === -1) {
      return 'disabled';
    } else {
      return '';
    }
  }

  return (
      <button className='btn btn-info' disabled={is_disabled()} type='button' onClick={sendUnmuteRequest}>You number is {props.current_participant.phone}. Press for ask the word.</button>
      );
};

Current_participant.propTypes = {
  current_participant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  })
};

export default Current_participant;
