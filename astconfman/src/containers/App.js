import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Conference from '../components/Conference'
import ConferenceLog from '../components/ConferenceLog'
import Participants from '../components/Participants'

import * as conferenceActions from '../actions/ConferenceActions'
import * as conferenceLogActions from '../actions/ConferenceLogActions'
import * as participantsActions from '../actions/ParticipantsActions'

class App extends Component {
  const { conference, conference_log, participants,
	  conferenceActions, conferenceLogActions, participantsActions } = this.props

  render() {
    return <div className="col-md-8">
        <div className="row">
            <div className="container">
	    <Conference conference={conference} />
	    </div>            
        </div>

        <br/>

        <div className="row">
	<Participants participants={participants} />
        </div>
    </div

    <div class="col-md-4">
    	<ConferenceLog conference_log={conference_log} />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    conference: state.conference,
    conference_log: state.conference_log,
    participants: state.participants
  }
}

function mapDispatchToProps(dispatch) {
  return {
    conferenceActions: bindActionCreators(conferenceActions, dispatch),
    conferenceLogActions: bindActionCreators(conferenceLogActions, dispatch),
    participantsActions: bindActionCreators(participantsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
