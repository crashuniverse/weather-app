import React from 'react';
import { render } from 'react-dom';
import { fetchWeather } from './weather.actions';
import './weather.scss';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: null,
      weather: null
    };
  }

  componentDidMount() {
    this.setWeather('Bangalore');
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="city" className="form-control">City</label>
            <input id="city"
                   onChange={this.handleChange.bind(this)}
                   className="form-control"
                   placeholder="Enter city" />
          </div>
          <button onClick={this.handleClick.bind(this)}
                  disabled={!this.state.city}>
            Get weather forecast
          </button>
        </form>
        { this.state.weather && this.state.weather.city &&
          <div className="city">
            <span>Showing weather for </span>
            <span className="city-name">{ this.state.weather && this.state.weather.city }</span>
          </div>
        }
        <div className="forecast-container">
        {
          this.state.weather && this.state.weather.forecast.map((forecast, index) => {
            return (
              <div key={index} className="forecast">
                <div>{ this.getDate(forecast.dt_txt) }</div>
                <div>{ forecast.weather[0]['main'] }</div>
                <div>{ forecast.main.temp } F</div>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }

  setWeather(city) {
    fetchWeather(city).then((response) => {
      this.setState({
        weather: response
      });
    })
  }

  handleChange(event) {
    this.setState({
      city: event.target.value
    })
  }

  handleClick(event) {
    this.setWeather(this.state.city);
    event.preventDefault();
  }

  getDate(t) {
    return new Date(t).toDateString();
  }
}
