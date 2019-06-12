import React, { Component } from 'react';

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <div>
                <a href='/'>Home</a> |  <a href='/fetchdata'>Fetch data</a> | <a href='/About'>About</a>
            </div>
        );
    }
}
