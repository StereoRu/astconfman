import { UPDATE_CONFERENCE } from '../constants/Page'

export function updateConference(payload) {

      return {
        type: UPDATE_CONFERENCE,
        payload: payload
      };
}
