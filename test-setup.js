(function() {
  const jsdom = require('jsdom').jsdom;
  const fetch = require('node-fetch');
  global.document = jsdom('<html><body><div id="root"></div></body></html>');
  global.window = document.defaultView;
  global.navigator = global.window.navigator;
  global.fetch = fetch;
}());

