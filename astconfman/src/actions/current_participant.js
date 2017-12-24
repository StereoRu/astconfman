import { UPDATE_CURRENT_PARTICIPANT } from '../constants/Page'
import { sendApiRequestMain } from './apiRerquests'

export function updateCurrentParticipant(payload) {

      return {
        type: UPDATE_CURRENT_PARTICIPANT,
        payload: payload
      };
}

export function sendApiRequest(payload) {
  return sendApiRequestMain(payload)
}

