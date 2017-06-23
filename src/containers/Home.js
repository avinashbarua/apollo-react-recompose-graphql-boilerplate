import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'

import * as uiActions from '../actions/uiActions'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={props.uiActions.dimToggle}>Toggle</button>
    <pre>{JSON.stringify(props.ui)}</pre>

    <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    />

  </div>
)

const mapStateToProps = state => (
  {
    ui: state.ui
  }
);

const mapDispatchToProps = dispatch => (
  {
    uiActions: bindActionCreators(uiActions, dispatch)
  }
);

export default connect( mapStateToProps, mapDispatchToProps)(Home)
