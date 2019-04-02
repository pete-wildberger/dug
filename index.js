'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/dug.production.min.js');
} else {
  module.exports = require('./lib/dug.dev.js');
}
