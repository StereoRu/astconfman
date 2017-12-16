//import React, { PropTypes } from 'react'
import React from 'react'
import Participant from '../components/Participant'

export default class Participants extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (
       <div className='row'>
          <ul>

          { 
            Object.keys(this.props.participants).map( (key, index) => {
                return <Participant 
                    key={index} 
                    urls={this.props.urls} 
                    labels={this.props.labels} 
                    participant={this.props.participants[key]} 
                    participantActions={this.props.participantsActions} />
            } )
          } 

          </ul>
       </div>
    );
  }
}

//Participants.propTypes = {
//  participants: PropTypes.shape(
//    PropTypes.shape({
//      callerid: PropTypes.string.isRequired,
//      name: PropTypes.string.isRequired,
//      is_admin: PropTypes.bool.isRequired,
//      is_marked: PropTypes.bool.isRequired,
//      is_muted: PropTypes.bool.isRequired,
//      channel: PropTypes.string.isRequired,
//      unmute_request: PropTypes.bool.isRequired
//    })
//  )
//}

