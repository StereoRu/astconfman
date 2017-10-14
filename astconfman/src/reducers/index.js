import { combineReducers } from 'redux'
import conference from './conference'
import conference_log from './conference_log'
import participant from './participant'

export default combineReducers({
  conference,
  conference_log,
  participant
})
