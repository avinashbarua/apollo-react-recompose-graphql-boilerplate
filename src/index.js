import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { ApolloProvider } from 'react-apollo';
import App from './containers/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store, { history } from './store'
import { client } from './reducers'
import injectTapEventPlugin from 'react-tap-event-plugin'
import registerServiceWorker from './registerServiceWorker'

injectTapEventPlugin();


const target = document.querySelector('#root')

render(
  <ApolloProvider store={store} client={client}>
    <ConnectedRouter history={history}>
        <MuiThemeProvider>
          <App/>
        </MuiThemeProvider>
    </ConnectedRouter>
  </ApolloProvider>,
  target
)

registerServiceWorker();
