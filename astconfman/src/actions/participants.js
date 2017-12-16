import { 
  ADD_PARTICIPANT,
  DELETE_ALL_PARTICIPANTS,
  DELETE_PARTICIPANT_BY_CHANNEL,
  DELETE_PARTICIPANT_BY_CALLERID,
  UPDATE_PARTICIPANT_BY_CHANNEL,
  UPDATE_PARTICIPANT_BY_CALLERID,
  UPDATE_ALL_PARTICIPANTS
} from '../constants/Page'

export function addParticipant(payload) {
      return {
        type: ADD_PARTICIPANT,
        payload: payload
      };
}

export function deleteAllParticipants(payload) {
      return {
        type: DELETE_ALL_PARTICIPANTS,
        payload: payload
      };
}

export function deleteParticipantByChannel(payload) {
      return {
        type: DELETE_PARTICIPANT_BY_CHANNEL,
        payload: payload
      };
}

export function deleteParticipantByCallerId(payload) {
      return {
        type: DELETE_PARTICIPANT_BY_CALLERID,
        payload: payload
      };
}

export function updateParticipantByChannel(payload) {
      return {
        type: UPDATE_PARTICIPANT_BY_CHANNEL,
        payload: payload
      };
}

export function updateParticipantByCallerid(payload) {
      return {
        type: UPDATE_PARTICIPANT_BY_CALLERID,
        payload: payload
      };
}

export function updateAllParticipants(payload) {
      return {
        type: UPDATE_ALL_PARTICIPANTS,
        payload: payload
      };
}
