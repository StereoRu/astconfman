import { UPDATE_LABELS } from '../constants/Page'

export function updateLabels(payload) {

      return {
        type: UPDATE_LABELS,
        payload: payload
      };
}
