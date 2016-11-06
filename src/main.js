import React from 'react';
import { render } from 'react-dom';
import Weather from './components/weather/weather'
import './main.scss';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <header>Weather App</header>
        <Weather />
      </div>
    );
  }
}

const mountNode = document.getElementById('root');
render(<Container/>, mountNode);
