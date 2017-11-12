import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Conference from '../components/Conference'
//import Log from '../components/Log'
//import Participants from '../components/Participants'

import * as conferenceActions from '../actions/conference'
//import * as logActions from '../actions/log'
//import * as participantsActions from '../actions/participants'


const App = (props) => {

  const { 
    conference, 
//      log, 
//      participants, 
    conferenceActions,
//      logActions, 
//      participantsActions,
      urls,
      labels 
  } = props;


    return (
      <div className='col-md-8'>
        <div className='row'>
          <div className='container'>
            <Conference conference={conference} urls={urls} labels={labels} conferenceActions={conferenceActions} />
          </div>            
        </div>
      </div>
        /*
        <br/>

       <div className='row' />
          <Participants participants={participants} participantsActions={participantsActions} />
        </div>

       <div className='col-md-4' />
         <Log log={log} logActions={logActions} />
        </div>
  
      </div>
      */
    );
}

function mapStateToProps(state) {
  return {
    conference: state.conference,
    urls: state.urls,
    labels: state.labels
//    log: state.log,
//    participants: state.participants,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    conferenceActions: bindActionCreators(conferenceActions, dispatch)
//    conferenceLogActions: bindActionCreators(conferenceLogActions, dispatch),
//    participantsActions: bindActionCreators(participantsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
