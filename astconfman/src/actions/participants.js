import { 
  ADD_PARTICIPANT,
  DELETE_PARTICIPANT,
  UPDATE_PARTICIPANT
} from '../constants/Page'

export function addParticipant(payload) {
      return {
        type: ADD_PARTICIPANT,
        payload: payload
      };
}

export function deleteParticipant(payload) {
      return {
        type: DELETE_PARTICIPANT,
        payload: payload
      };
}

export function updateParticipant(payload) {
      return {
        type: UPDATE_PARTICIPANT,
        payload: payload
      };
}
