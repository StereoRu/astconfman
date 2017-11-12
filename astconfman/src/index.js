import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const preloadedState = JSON.parse(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

//console.log('preloadedState=', preloadedState);
const store = configureStore(preloadedState);

render(
  <Provider store={store}>
    <div className='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
