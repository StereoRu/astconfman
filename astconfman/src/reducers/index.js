import { combineReducers } from 'redux'
import conference from './conference'
import logs from './logs'
import participants from './participants'
import current_participant from './current_participant'
import urls from './urls'
import flash from './flash'
import labels from './labels'

export default combineReducers({
  conference,
  logs,
  participants,
  current_participant,
  urls,
  flash,
  labels
})
