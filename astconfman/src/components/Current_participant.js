import React, { PropTypes } from 'react'

const Current_participant = (props) => {

  return (
      <button className='btn btn-info' type='button'>You number is {props.current_participant.phone}. Press for ask the word.</button>
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
