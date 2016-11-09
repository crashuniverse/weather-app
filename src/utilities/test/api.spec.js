const assert = require('assert');
import fetchMock from 'fetch-mock';
import * as Api from '../api.js';

describe('Api utility', () => {
  it('should have a defined fetch method at global level', () => {
    assert(fetch);
  });

  it('should have a defined get method', () => {
    assert(Api.get);
  });

  it('should return a promise when get method is called', () => {
    const response = Api.get('http://example.com');

    assert(response);
    assert.equal(typeof response, 'object');
    assert(response.then);
  });

  it('should return an object when promise resolves', (done) => {
    const data = {city: 'paris'};
    fetchMock.restore();
    fetchMock.mock('http://example.com', data);
    Api.get('http://example.com')
      .then((body) => {
        assert(body);
        assert.equal(typeof body, 'object');
        assert.deepEqual(body, data);

        fetchMock.restore();
      })
      .catch((error) => {
        done(error);
      })
      .then(done());
  });

  it('should return error message when get method throws an error', (done) => {
    const error = {message: 'cannot reach example.com'};
    fetchMock.restore();
    fetchMock.get('http://example.com', {
      throws: error
    });
    Api.get('http://example.com')
      .then((error) => {
        assert(error);
        assert.equal(typeof error, 'string');
        assert.equal(error, 'Network error. cannot reach example.com');

        fetchMock.restore();
      })
      .catch((error) => {
        done(error);
      })
      .then(done());
  });
});
