'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), "0x49f72b482a61f546d2babc79fa02dC36e5B50FA5");

exports.default = obj;