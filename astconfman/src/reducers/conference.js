import { UPDATE_CONFERENCE } from '../constants/Page'

const initialState = {
  name: '100', 
  number: '100', 
  users: 0,
  locked: false, 
  recorded: false, 
  marked: false
}

export default function updateConference(state = initialState, action) {

  switch (action.type) {
    case UPDATE_CONFERENCE:
      console.log('updateConference old state=' + state)
      console.log('updateConference new state=' + new_state)

      var new_state = { ...state, 
	      name: action.payload.name, 
	      number: action.payload.number,
	      users: action.payload.users,
	      locked: action.payload.locked,
	      recorded: action.payload.recorded,
	      marked: action.payload.marked
      }
      return new_state

    default:
      return state;
  }

}
