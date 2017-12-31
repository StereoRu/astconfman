import { UPDATE_URLS } from '../constants/Page'

const initialState = {
}

export default function updateUrls(state = initialState, action) {

  switch (action.type) {
    case UPDATE_URLS:
      var new_state = Object.assign({}, state, action.payload);
      return new_state

    default:
      return state;
  }

}
