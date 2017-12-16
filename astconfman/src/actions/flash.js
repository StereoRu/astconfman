import { UPDATE_FLASH } from '../constants/Page'

export function updateFlash(payload) {
//    console.log('action updateFlash payload=', payload)
      return {
        type: UPDATE_FLASH,
        payload: payload
      };
}
