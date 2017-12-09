import {
  ADD_PARTICIPANT,
  DELETE_PARTICIPANT,
  UPDATE_PARTICIPANT
} from '../constants/Page'

const initialState = []

export default function addParticipant(state = initialState, action) {

  switch (action.type) {
    case ADD_PARTICIPANT:
      console.log('add participants. action=', action)

      let append_participants = [];
      action.payload.forEach((item) => {

        append_participants.push({
          callerid: item.callerid,
          name: item.name,
          channel: item.channel,
          is_admin: item.is_admin,
          is_marked: item.is_marked,
          is_muted: item.is_muted,
          unmute_request: item.unmute_request
        })
      });

      return [ ...state, append_participants ]

    case DELETE_PARTICIPANT:
      console.log('delete participants. action=', action)
      state.forEach( (item, index) => {
        if (item.callerid == action.payload.callerid) {
          state.splice(index, 1)
        }
      })
      return [ ...state ]

    case UPDATE_PARTICIPANT:
      console.log('update participants. action=', action)
      let updateble_participant = {}
      state.forEach( (item, index) => {
        if (item.callerid == action.payload.callerid) {
          updateble_participant = Object.assign(item, action.payload)
          state.splice(index, 1)
        }
      })

      if (updateble_participant != {}) {
        return [ ...state, updateble_participant  ]
      }
      return [ ...state ]

    default:
      return state;
  }

}
