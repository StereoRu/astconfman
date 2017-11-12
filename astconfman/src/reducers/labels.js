import { UPDATE_LABELS } from '../constants/Page'

const initialState = {
}

export default function updateLabels(state = initialState, action) {

  switch (action.type) {
    case UPDATE_LABELS:
      console.log('updateLabels old state=' + state)

      var new_state = Object.assign({}, state, action.payload);

      console.log('updateLabels new state=' + new_state)

      return new_state

    default:
      return state;
  }

}
