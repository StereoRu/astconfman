import {
  ADD_PARTICIPANT,
  REMOVE_PARTICIPANT,
  UPDATE_PARTICIPANT
} from '../constants/Page'

const initialState = []

export default function addParticipant(state = initialState, action) {

  switch (action.type) {
    case ADD_PARTICIPANT:
      return { ...state, state.push({
                          callerid: action.payload.callerid,
                          is_admin: action.payload.is_admin,
                          is_marked: action.payload.is_marked,
                          is_muted: action.payload.is_muted,
                          unmute_request: action.payload.unmute_request,
                          channel: action.payload.channel }) }

    default:
      return state;
  }

}
