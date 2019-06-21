import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
var API_KEY = "";
var BASE_URL = "https://api.openweathermap.org/data/2.5/weather?id=6173331&units=metric&appid=" + API_KEY;

export class WeatherAPI extends Component {
  displayName = WeatherAPI.name


  constructor() {
    super();
    this.state = {
        weatherData: [],
        celsius: 0
    };
        this.getData = this.getData.bind(this);
        this.celsiusConvert = this.celsiusConvert.bind(this);
  }

  // Called when constructor is finished building component.
  componentDidMount() {
    this.getData();
  }

  getData() {
        fetch(BASE_URL).then(response => response.json())
        .then((data) =>{
            this.setState({weatherData: data});
            console.log(JSON.stringify(data));
            this.setState({celsius: data.main.temp});
        })
        .catch((error) => {
            console.log(error);
        })
  }

  celsiusConvert(number) {
      return ((number - 32) * 5)/9;
  }

  render() {
    if (!this.state.weatherData.weather) return null;
    return (
    <div className="row">
      <div className="col">
      </div>
      <div className="col">
        <div className="card" style={{width: 18 + "rem"}}>
            <div className="card-img-top text-center"> <FontAwesomeIcon icon={faCloud} size="9x" /> </div>
            <div className="card-body">
                <h5 className="card-title">{this.state.weatherData.name}</h5>
                <p className="card-text">It feels like <b>{this.state.celsius}°C</b>.</p>
                <p className="card-text">It looks like {this.state.weatherData.weather[0].description}.</p>
            </div>
        </div>
      </div>
      <div className="col">
      </div>
    </div>
    );
  }
}
