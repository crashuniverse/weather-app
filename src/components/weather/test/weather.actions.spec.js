const assert = require('assert');
import fetchMock from 'fetch-mock';
import { fetchWeather } from '../weather.actions';

describe('Weather action', () => {
  it('should return weather information with city and forecast', (done) => {
    const data = {
      list: []
    };
    fetchMock.restore();
    fetchMock.mock('*', data);
    fetchWeather('paris')
      .then((body) => {
        assert(body);
        assert(body.city);
        assert(body.forecast);
        assert.deepEqual(body.forecast, []);

        fetchMock.reset();
      })
      .catch((error) => {
        done(error);
      })
      .then(done());
  });
});
