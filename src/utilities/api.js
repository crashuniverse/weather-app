import 'whatwg-fetch';

export const get = (url) => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      return body;
    })
    .catch((error) => {
      return 'Network error. ' + error.message;
    })
};
