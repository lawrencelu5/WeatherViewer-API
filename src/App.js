import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Router>
          <Route exact path='/' component={Home} />
        </Router>
      </Layout>
    );
  }
}
