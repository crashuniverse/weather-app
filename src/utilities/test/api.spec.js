import { expect } from 'chai';
import fetchMock from 'fetch-mock';
import * as Api from '../api.js';

describe('Api utility', () => {
  it('should have a defined fetch method at global level', () => {
    expect(fetch).to.exist;
  });

  it('should have a defined get method', () => {
    expect(Api.get).to.exist;
  });

  it('should return a promise when get method is called', () => {
    fetchMock.restore();
    fetchMock.mock('http://example.com', {});
    const response = Api.get('http://example.com');

    expect(response).to.exist;
    expect(response).to.be.a('promise');
  });

  it('should return an object when promise resolves', (done) => {
    const data = {city: 'paris'};
    fetchMock.restore();
    fetchMock.mock('http://example.com', data);
    Api.get('http://example.com')
      .then((body) => {
        expect(body).to.exist;
        expect(body).to.be.an('object');
        expect(body).to.deep.equal(data);

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
        expect(error).to.exist;
        expect(error).to.be.a('string');
        expect(error).to.equal('Network error. cannot reach example.com');

        fetchMock.restore();
      })
      .catch((error) => {
        done(error);
      })
      .then(done());
  });
});
