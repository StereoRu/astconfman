import { UPDATE_FLASH } from '../constants/Page'

const initialState = {
  severity: 'empty',
  text: ''
}

export default function updateFlash(state = initialState, action) {

  switch (action.type) {
    case UPDATE_FLASH:
      var new_state = { ...state, 
        severity: action.payload.severity, 
        text: action.payload.text
      }
      return { ...new_state }

    default:
      return state;
  }

}
