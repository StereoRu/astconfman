import { ADD_LOG, CLEAR_LOG } from '../constants/Page'

const initialState = []

export default function addLog(state = initialState, action) {

  switch (action.type) {
    case ADD_LOG:
//      console.log('ADD_LOG reduser ', action)
      state = action.payload.concat( state );
      return [ ...state ]

    case CLEAR_LOG:
//      console.log('ADD_LOG reduser ', action)
      return [ ]

    default:
      return state;
  }

}
