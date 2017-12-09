import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Conference from '../components/Conference'
import Logs from '../components/Logs'
import Participants from '../components/Participants'
import Current_participant from '../components/Current_participant'

import * as conferenceActions from '../actions/conference'
import * as logsActions from '../actions/logs'
import * as participantsActions from '../actions/participants'
import * as current_participantActions from '../actions/current_participant'


const App = (props) => {

  const { 
    conference, 
    logs, 
    participants, 
    current_participant,

    conferenceActions,
    logActions, 
    participantsActions,
    current_participantActions,

    urls,
    labels 
  } = props;


    return (
      <div className='container'>
        <div className='col-md-8'>

          <div className='row'>
              <Conference conference={conference} urls={urls} labels={labels} conferenceActions={conferenceActions} />
          </div>            

        <br/>
          
        <div className='row'>
              <Participants participants={participants} urls={urls} labels={labels} participantsActions={participantsActions} />
        </div>

        </div>
      
        <div className='col-md-4'>
          <div className='row'>
              <Current_participant current_participant={current_participant} urls={urls} labels={labels} current_participantActions={current_participantActions} participantsActions={participantsActions} />
          </div>

          <Logs logs={logs} urls={urls} labels={labels} logActions={logActions} />
        </div>

      </div>
    );
}


function mapStateToProps(state) {
  return {
    conference: state.conference,
    urls: state.urls,
    labels: state.labels,
    logs: state.logs,
    participants: state.participants,
    current_participant: state.current_participant
  }
}

function mapDispatchToProps(dispatch) {
  return {
    conferenceActions: bindActionCreators(conferenceActions, dispatch),
    logsActions: bindActionCreators(logsActions, dispatch),
    participantsActions: bindActionCreators(participantsActions, dispatch),
    current_participantActions: bindActionCreators(current_participantActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
