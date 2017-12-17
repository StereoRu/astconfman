import React from 'react'

class EventsSSE extends React.Component {
  constructor(props) {
    super(props);
//    console.log('constructor EventsSSE')
  }

  componentDidMount() {
//    console.log('componentDidMount EventsSSE')
    this.eventListener = new EventSource('/sse_subscribe');
//    this.eventListener.onmessage = function(e) {
//      console.log('ONMESSAGE', e)
//    }

    this.connectEventSource();
    this.errorsEventSource();
    this.addEventListeners();
  }
  
  componentWillUnmount() {
//    console.log('componentWillUnmount EventsSSE')
    this.eventListener.close();
  }

  connectEventSource() {
//    console.log('connectEventSource EventsSSE')
    this.eventListener = new EventSource('/sse_subscribe')
  }

  errorsEventSource() {
//    console.log('errorsEventSource EventsSSE')
    this.eventListener.onerror = (e) => {
      const flashActions = this.props.flashActions
      if (this.eventListener.readyState == EventSource.CONNECTING) {
        console.log('SSE. reconnect...', e);
        flashActions.updateFlash({severity:'info', text: 'connection was created'})
      } else if (this.eventListener.readyState == EventSource.CLOSED) {
        console.log('SSE. connection was closed', e);
        flashActions.updateFlash({severity:'warning', text: 'connection was closed'})
      } else {
        console.log('SSE. undefined error. readyState =', this.eventListener.readyState, e);
        flashActions.updateFlash({severity:'danger', text: 'undefined sse error'})
      }
    };
  }

  addEventListeners() {
    let room_id = this.props.conference.id
    const flashActions = this.props.flashActions
    this.eventListener.addEventListener('updateFlash', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE. Receive event updateFlash ', e );
      if (data.room==room_id) {
        flashActions.updateFlash(data.data)
      }
    });

    const logActions = this.props.logActions
    this.eventListener.addEventListener('addLog', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE common. Receive event addLog ', e );
      if (data.room==room_id) {
        logActions.addLog(data.data)
      }
    });
    this.eventListener.addEventListener('clearLog', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE common. Receive event clearLog ', e );
      if (data.room==room_id) {
        logActions.clearLog(data.data)
      }
    });

    const conferenceActions = this.props.conferenceActions
    this.eventListener.addEventListener('updateConference', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE common. Receive event updateConference ', e );
      if (data.room==room_id) {
        conferenceActions.updateConference(data.data)
      }
    });

    const participantActions = this.props.participantsActions
    this.eventListener.addEventListener('updateParticipantByChannel', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE. Receive event updateParticipantByChannel ', e );
      if (data.room==room_id) {
        participantActions.updateParticipantByChannel(data.data)
      }
    });
    this.eventListener.addEventListener('updateParticipantByCallerid', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE. Receive event updateParticipantByCallerid ', e );
      if (data.room==room_id) {
        participantActions.updateParticipantByCallerid(data.data)
      }
    });
    this.eventListener.addEventListener('updateAllParticipants', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE. Receive event updateAllParticipants ', e );
      if (data.room==room_id) {
        participantActions.updateAllParticipants(data.data)
      }
    });
    this.eventListener.addEventListener('addParticipant', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE. Receive event addParticipant ', e );
      if (data.room==room_id) {
        participantActions.addParticipant(data.data)
      }
    });
    this.eventListener.addEventListener('deleteAllParticipants', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE. Receive event deleteAllParticipants ', e );
      if (data.room==room_id) {
        participantActions.deleteAllParticipants(data.data)
      }
    });
    this.eventListener.addEventListener('deleteParticipantByCallerId', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE. Receive event deleteParticipantByCallerId ', e );
      if (data.room==room_id) {
        participantActions.deleteParticipantByCallerId(data.data)
      }
    });
    this.eventListener.addEventListener('deleteParticipantByChannel', function(e) {
      let data = JSON.parse(e.data)
      console.log( 'SSE. Receive event deleteParticipantByChannel ', e );
      if (data.room==room_id) {
        participantActions.deleteParticipantByChannel(data.data)
      }
    });
  }

  render() {
    return (<div className='enventListener'> </div>);
  }

}

export default EventsSSE;
