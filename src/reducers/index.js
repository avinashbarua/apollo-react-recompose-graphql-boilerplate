import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { ApolloClient } from 'react-apollo'

import ui from './uiReducer'

export const client = new ApolloClient();

export default combineReducers({
  ui,
  routing: routerReducer,
  apollo: client.reducer()
})
