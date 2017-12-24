import {
  ADD_PARTICIPANT,
  DELETE_ALL_PARTICIPANTS,
  DELETE_PARTICIPANT_BY_CHANNEL,
  DELETE_PARTICIPANT_BY_CALLERID,
  UPDATE_PARTICIPANT_BY_CHANNEL,
  UPDATE_PARTICIPANT_BY_CALLERID,
  UPDATE_ALL_PARTICIPANTS
} from '../constants/Page'

const initialState = {}

export default function addParticipant(state = initialState, action) {

  let updateble_participant = {}
  let new_state = {}

  switch (action.type) {
    case ADD_PARTICIPANT:
//      console.log('REDUCER add participants. action=', action)


      let appendedParticipant = {
          callerid: action.payload.callerid,
          name: action.payload.name,
          channel: action.payload.channel,
          is_admin: action.payload.is_admin,
          is_marked: action.payload.is_marked,
          is_muted: action.payload.is_muted,
          unmute_request: action.payload.unmute_request
      }

      new_state = { ...state }
      new_state[action.payload.callerid] = appendedParticipant
      return new_state

    case DELETE_ALL_PARTICIPANTS:
//      console.log('delete all participants. action=', action)
      new_state = {}
      return new_state

    case DELETE_PARTICIPANT_BY_CHANNEL:
//      console.log('delete participant by channel. action=', action)
      Object.keys(state).forEach( (key) => {
        if (state[key].channel == action.payload.channel) {
          delete state[key]
        }
      })
      new_state = { ...state }
      return new_state

    case DELETE_PARTICIPANT_BY_CALLERID:
//      console.log('delete participant by callerid. action=', action)
      Object.keys(state).forEach( (key) => {
        if (key == action.payload.callerid) {
          delete state[key]
        }
      })
      new_state = { ...state }
      return new_state

    case UPDATE_PARTICIPANT_BY_CHANNEL:
//      console.log('update participant by channel. action=', action)
      let callerid = ''
      Object.keys(state).forEach( (key) => {
        if (state[key].channel == action.payload.channel) {
          updateble_participant = Object.assign(state[key], action.payload)
          callerid = key
          delete state[key]
        }
      })

      new_state = { ...state }
      if (Object.keys(updateble_participant).length != 0) {
        new_state[callerid] = updateble_participant
      }

      return new_state

    case UPDATE_PARTICIPANT_BY_CALLERID:
//      console.log('update participant by callerid. action=', action)
      Object.keys(state).forEach( (key) => {
        if (key == action.payload.callerid) {
          updateble_participant = Object.assign(state[key], action.payload)
          delete state[key]
        }
      })

      new_state = { ...state }
      if (Object.keys(updateble_participant).length != 0) {
        new_state[action.payload.callerid] = updateble_participant
      }

      return new_state

    case UPDATE_ALL_PARTICIPANTS:
//      console.log('update all participants. action=', action)
      new_state = {}
      Object.keys(state).forEach( (key) => {
        updateble_participant = Object.assign(state[key], action.payload)
        new_state[key] = updateble_participant
      })

      return new_state

    default:
      return state;
  }

}
