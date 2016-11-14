import { expect } from 'chai';

import config from '../config';

describe('Config', () => {
  it('should have api key for openweathermap web service', () => {
    expect(config).to.exist;
    expect(config.openWeatherMap).to.exist;
    expect(config.openWeatherMap.API_KEY).to.exist;
    expect(typeof config.openWeatherMap.API_KEY).to.be.a('string');
    expect(config.openWeatherMap.API_KEY.length > 0).to.be.true;
  });
});
