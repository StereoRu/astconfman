import { UPDATE_CONFERENCE } from '../constants/Page'

const initialState = {
  name: 'name not found', 
  users: 0,
  id: 0,
  locked: false, 
  marked: false
}

export default function updateConference(state = initialState, action) {

  switch (action.type) {
    case UPDATE_CONFERENCE:
      let new_state = Object.assign(state, action.payload)
      return { ...new_state }

    default:
      return state;
  }

}
