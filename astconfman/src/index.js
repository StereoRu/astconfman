import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
//import eventListener from './eventListener'

//console.log('preloadedState_json=', window.__PRELOADED_STATE__);
const preloadedState = JSON.parse(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

console.log('preloadedState=', preloadedState);
const store = configureStore(preloadedState);

//const eventListenerObj = eventListener();

render(
  <Provider store={store}>
    <div className='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);

