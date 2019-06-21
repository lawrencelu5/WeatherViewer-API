import React, { Component } from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
        <div className="container">
            <NavMenu />
            <div className="row">
              <div className='col-sm'>
                 {this.props.children} 
                </div>
            </div>
        </div>
    );
  }
}
