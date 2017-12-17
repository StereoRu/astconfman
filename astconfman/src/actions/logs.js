import { ADD_LOG, CLEAR_LOG } from '../constants/Page'

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
