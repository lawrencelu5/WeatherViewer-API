import React, { Component } from 'react';

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Weather API</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">    
                        <a className="nav-item nav-link" href="/">Home</a>
                        <a className="nav-item nav-link" href="/About">About</a>
                        <a className="nav-item nav-link" href="/Weather">Current Weather</a>
                    </div>
                </div>
            </nav>
        );
    }
}
