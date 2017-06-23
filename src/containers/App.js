import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from '../components/About'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/cool" component={Home} />
      </div>
      </Router>
    );
  }
}

export default App;
