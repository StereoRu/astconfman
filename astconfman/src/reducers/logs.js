import { ADD_LOG } from '../constants/Page'

const initialState = []

export default function addLog(state = initialState, action) {

  switch (action.type) {
    case ADD_LOG:
//      console.log('ADD_LOG reduser ', action)
      state = action.payload.concat( state );
      return [ ...state ]

    default:
      return state;
  }

}
