import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
        </Router>
      </Layout>
    );
  }
}
