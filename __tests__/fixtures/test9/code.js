const more = require('./more');
const required = require('./required');
const content = require('./content').one.two('hello').three;

require('some-side-effects');
require('side-effects-factory').init();

define(function (require) {
    var EventEmitter = require('common/eventEmitter');
    var BackendStore = require('./stores/backend');

    return [EventEmitter, BackendStore, more, required, content];
});