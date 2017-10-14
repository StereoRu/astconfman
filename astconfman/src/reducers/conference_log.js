import { UPDATE_CONFERENCE_LOG } from '../constants/Page'

const initialState = []

export default function page(state = initialState, action) {

  switch (action.type) {
    case UPDATE_CONFERENCE_LOG:
      return { ...state, state.push(
		      { date: action.payload.date, message: action.payload.message} )  }

    default:
      return state;
  }

}
