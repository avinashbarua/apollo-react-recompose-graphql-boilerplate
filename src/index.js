import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { ApolloProvider } from 'react-apollo';

import store, { history } from './store'
import { client } from './reducers'
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App'

const target = document.querySelector('#root')

render(
  <ApolloProvider store={store} client={client}>
    <ConnectedRouter history={history}>
      <div>
        <App/>
      </div>
    </ConnectedRouter>
  </ApolloProvider>,
  target
)

registerServiceWorker();
