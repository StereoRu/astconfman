import { UPDATE_URLS } from '../constants/Page'

export function updateUrls(payload) {

      return {
        type: UPDATE_URLS,
        payload: payload
      };
}
