const assert = require('assert');
import config from '../config';

describe('Config', () => {
  it('should have api key for openweathermap web service', () => {
    assert(config);
    assert(config.openWeatherMap);
    assert(config.openWeatherMap.API_KEY);
    assert.equal(typeof config.openWeatherMap.API_KEY, 'string');
    assert(config.openWeatherMap.API_KEY.length > 0);
  });
});
