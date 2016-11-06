import React from 'react';
import { render } from 'react-dom';
import { fetchWeather } from './weather.actions';

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
        <div>Weather</div>
        <form>
          <label htmlFor="city" />
          <input id="city" onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleClick.bind(this)}
                  disabled={!this.state.city}>
            Get weather forecast
          </button>
        </form>
        <div>{ this.state.weather && this.state.weather.city }</div>
        <div>{ JSON.stringify(this.state.weather && this.state.weather.forecast[0]) }</div>
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
}
