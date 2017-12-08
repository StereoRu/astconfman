import { UPDATE_CURRENT_PARTICIPANT } from '../constants/Page'

const initialState = {
  id: 0,
  name: 'undefined user',
  email: 'undefined.user@undefined.user.com',
  phone: ''
}

export default function updateCurrentParticipant(state = initialState, action) {

  switch (action.type) {
    case UPDATE_CURRENT_PARTICIPANT:
      console.log('updateCurrentParticipant old state=' + state)

      var new_state = Object.assign({}, state, action.payload);

      console.log('updateCurrentParticipant new state=' + new_state)

      return new_state

    default:
      return state;
  }

}
