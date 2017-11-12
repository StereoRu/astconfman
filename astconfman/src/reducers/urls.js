import { UPDATE_URLS } from '../constants/Page'

const initialState = {
}

export default function updateUrls(state = initialState, action) {

  switch (action.type) {
    case UPDATE_URLS:
      console.log('updateUrls old state=' + state)

      var new_state = Object.assign({}, state, action.payload);

      console.log('updateUrls new state=' + new_state)

      return new_state

    default:
      return state;
  }

}
