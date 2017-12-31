import { UPDATE_LABELS } from '../constants/Page'

const initialState = {
}

export default function updateLabels(state = initialState, action) {

  switch (action.type) {
    case UPDATE_LABELS:
      var new_state = Object.assign({}, state, action.payload);
      return new_state

    default:
      return state;
  }

}
