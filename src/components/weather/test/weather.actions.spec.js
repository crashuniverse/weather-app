import { expect } from 'chai';
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
        expect(body).to.exist;
        expect(body.city).to.exist;
        expect(body.forecast).to.exist;
        expect(body.forecast).to.deep.equal([]);

        fetchMock.reset();
      })
      .catch((error) => {
        done(error);
      })
      .then(done());
  });
});
