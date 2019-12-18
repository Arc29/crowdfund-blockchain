'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    window.addEventListener('load', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!window.ethereum) {
                            _context.next = 10;
                            break;
                        }

                        window.web3 = new _web2.default(window.ethereum);
                        _context.prev = 2;
                        _context.next = 5;
                        return window.ethereum.enable();

                    case 5:
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](2);

                        console.log("Permission denied!");

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this, [[2, 7]]);
    })));
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    var provider = new _web2.default.providers.HttpProvider('https://ropsten.infura.io/v3/018bc3a3f55044b193e470ac1744fb0a');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXRoZXJldW0iLCJlbmFibGUiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7OztBQUVBLElBQUksWUFBSjtBQUNBLElBQUcsT0FBTyxBQUFQLFdBQWdCLEFBQWhCLGVBQStCLE9BQU8sT0FBTyxBQUFkLFNBQXFCLEFBQXZELGFBQW1FLEFBQy9EO1dBQU8sQUFBUCxpQkFBd0IsQUFBeEIsaUZBQWdDLG1CQUFBO3NFQUFBO3NCQUFBO2lEQUFBO3lCQUFBOzZCQUV4QixPQUFPLEFBRmlCLFVBQUE7NENBQUE7QUFBQTtBQUd4Qjs7K0JBQU8sQUFBUCxPQUFjLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQWhCLEFBQWQsQUFId0I7d0NBQUE7d0NBQUE7K0JBTWQsT0FBTyxBQUFQLFNBQWdCLEFBQWhCLEFBTmM7O3lCQUFBO3dDQUFBO0FBQUE7O3lCQUFBO3dDQUFBO3dEQVVwQjs7Z0NBQVEsQUFBUixJQUFZLEFBQVosQUFWb0I7O3lCQUFBO3lCQUFBO3dDQUFBOztBQUFBO2dDQUFBO0FBQWhDLEFBZ0JKO1dBQUssQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQUwsQUFDQztBQWxCRCxPQW1CSSxBQUNBO1FBQU0sV0FBUyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQWdDLEFBQWhDLEFBQWYsQUFDQTtXQUFLLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQUwsQUFDSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJjZ2Vla3ovZGV2ZWxvcG1lbnQvY2FtcGFpZ24tY29udHJhY3QifQ==