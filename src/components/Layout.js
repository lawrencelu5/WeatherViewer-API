import React, { Component } from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
        <div class="container">
            <NavMenu />
            <div class="row">
                {this.props.children} 
            </div>
        </div>
    );
  }
}
