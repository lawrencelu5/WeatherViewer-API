import React, { Component } from 'react';

export class About extends Component {
    displayName = About.name
    render() {
        return (
        <div className="row">
            <div className="col-sm">
                This is a side project on a functional weather viewer, which uses React as the front-end and <a href="https://openweathermap.org">https://openweathermap.org/</a> as the API.
            </div>
        </div>
        );
    }
}
