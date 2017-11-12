import { combineReducers } from 'redux'
import conference from './conference'
import log from './log'
import participants from './participants'
import urls from './urls'
import labels from './labels'

export default combineReducers({
  conference,
  log,
  participants,
  urls,
  labels
})
