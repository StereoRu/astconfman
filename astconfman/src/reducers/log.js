import { ADD_LOG } from '../constants/Page'

const initialState = []

export default function page(state = initialState, action) {

  switch (action.type) {
    case ADD_LOG:

      let append_log = [];
      action.payload.forEach((item) => {

        append_log.push({
          date: item.date, 
          message: item.message
        });

      });
      
      state.concat( append_log );
      return { ...state }

    default:
      return state;
  }

}
