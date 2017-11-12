import { UPDATE_CONFERENCE } from '../constants/Page'

const initialState = {
  name: 'name not found', 
  users: 0,
  locked: false, 
  marked: false
}

export default function updateConference(state = initialState, action) {

  switch (action.type) {
    case UPDATE_CONFERENCE:
      console.log('updateConference old state=' + state)

      var new_state = { ...state, 
        name: action.payload.name, 
        users: action.payload.users,
        locked: action.payload.locked,
        marked: action.payload.marked
      }

      console.log('updateConference new state=' + new_state)

      return new_state

    default:
      return state;
  }

}
