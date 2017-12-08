import { UPDATE_CURRENT_PARTICIPANT } from '../constants/Page'

export function updateCurrentParticipant(payload) {

      return {
        type: UPDATE_CURRENT_PARTICIPANT,
        payload: payload
      };
}
