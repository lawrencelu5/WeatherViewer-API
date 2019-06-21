import React, { Component } from 'react';

export class About extends Component {
    displayName = About.name
    render() {
        return (
        <div className="row">
            <div className="col-sm">
                Hi this is the about page.
            </div>
        </div>
        );
    }
}
