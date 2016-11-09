(function() {
  const jsdom = require('jsdom').jsdom;
  const fetchMock = require('fetch-mock');
  global.document = jsdom('<html><body><div id="root"></div></body></html>');
  global.window = document.defaultView;
  global.navigator = global.window.navigator;
  fetchMock.get('*', {});
}());

