import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import ui from './uiReducer'

export default combineReducers({
  ui,
  routing: routerReducer
})
