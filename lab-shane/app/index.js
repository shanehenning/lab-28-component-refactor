'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const crudApp = require('angular').module('crudApp', []);

require('./controllers/controllers-index.js')(crudApp);
require('./components/components-index.js')(crudApp);
