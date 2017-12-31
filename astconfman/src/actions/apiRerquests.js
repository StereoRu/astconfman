import { updateFlash } from './flash'

export function sendApiRequestMain(payload) {
      return function(dispatch) {
//        console.log('sendApiRequest. payload=', payload)
        return fetch(payload.url, {
                credentials: 'same-origin'
              })
              .then(response => response.json() )
              .then(data => {
                if (data.status != 'OK') {
                  dispatch(updateFlash({severity: 'warning', text: 'Ошибка обработки запроса сервером. '+data.text }))
                }
              })
              .catch(e => {
                dispatch(updateFlash({severity: 'danger', text: 'Ошибка отправки запроса к API '+e }))
                console.log(e)
                  })
      };
}
