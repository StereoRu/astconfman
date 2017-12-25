import { UPDATE_CONFERENCE } from '../constants/Page'
import { sendApiRequestMain } from './apiRerquests'

export function updateConference(payload) {

      return {
        type: UPDATE_CONFERENCE,
        payload: payload
      };
}

export function sendApiRequest(payload) {
  return sendApiRequestMain(payload)
}
