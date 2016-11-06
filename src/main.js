import React from 'react';
import { render } from 'react-dom';

class Weather extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

const mountNode = document.getElementById('root');
render(<Weather/>, mountNode);
