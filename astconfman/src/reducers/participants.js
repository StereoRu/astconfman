import {
  ADD_PARTICIPANT,
  DELETE_PARTICIPANT,
  UPDATE_PARTICIPANT
} from '../constants/Page'

const initialState = {}

export default function addParticipant(state = initialState, action) {

  switch (action.type) {
    case ADD_PARTICIPANT:

      let append_participants = {};
      action.payload.forEach((item) => {

        append_participants[item.callerid] = {
          callerid: item.callerid,
          name: item.name,
          channel: item.channel,
          is_admin: item.is_admin,
          is_marked: item.is_marked,
          is_muted: item.is_muted,
          unmute_request: item.unmute_request
        };
      });

      return { ...state, append_participants }

    case DELETE_PARTICIPANT:
      delete state[action.payload.callerid];
      return { ...state }

    case UPDATE_PARTICIPANT:
      return Object.assign(state, action.payload)

    default:
      return state;
  }

}
