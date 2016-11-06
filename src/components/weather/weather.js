import React from 'react';
import { render } from 'react-dom';
import { fetchWeather } from './weather.actions';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: null
    };
  }

  componentDidMount() {
    fetchWeather('Bangalore').then((response) => {
       this.setState({
         weather: response
       });
    })
  }

  render() {
    return (
      <div>
        <div>Weather</div>
        <div>{ this.state.weather && this.state.weather.city }</div>
      </div>
    );
  }
}
