import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div className="row">
        <div className="col-sm">
        Hi this is the home page.
        </div>
      </div>
    );
  }
}
