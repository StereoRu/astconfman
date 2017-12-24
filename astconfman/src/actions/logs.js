import { ADD_LOG, CLEAR_LOG } from '../constants/Page'
import { sendApiRequestMain } from './apiRerquests'

export function addLog(payload) {
      return {
        type: ADD_LOG,
        payload: payload
      };
}

export function clearLog(payload) {
      return {
        type: CLEAR_LOG,
        payload: payload
      };
}

export function sendApiRequest(payload) {
  return sendApiRequestMain(payload)
}
