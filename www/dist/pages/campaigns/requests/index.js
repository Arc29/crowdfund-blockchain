'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    id: index,
                    request: request,
                    address: _this2.props.address,
                    contributorCount: _this2.props.contributorCount,
                    manager: _this2.props.manager,
                    contribution: _this2.props.contribution,
                    account: _this2.props.accounts[0]
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('h3', null, 'Requests Index'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new' }, _react2.default.createElement('a', null, _react2.default.createElement(_semanticUiReact.Button, { primary: true }, 'Create Request'))), _react2.default.createElement(_semanticUiReact.Table, null, _react2.default.createElement(HeaderCell, null, 'ID'), _react2.default.createElement(HeaderCell, null, 'Description'), _react2.default.createElement(HeaderCell, null, 'Amount(in gwei)'), _react2.default.createElement(HeaderCell, null, 'Recipient'), _react2.default.createElement(HeaderCell, null, 'Approval Count'), _react2.default.createElement(HeaderCell, null, 'Approve'), _react2.default.createElement(HeaderCell, null, 'Finalize'), _react2.default.createElement(HeaderCell, null, 'Status'), _react2.default.createElement(Body, null, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, reqCount, manager, accounts, contribution, contributorCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestCount().call();

                            case 4:
                                reqCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.manager().call();

                            case 7:
                                manager = _context.sent;
                                _context.next = 10;
                                return _web2.default.eth.getAccounts();

                            case 10:
                                accounts = _context.sent;
                                _context.next = 13;
                                return campaign.methods.contributors(accounts[0]).call();

                            case 13:
                                contribution = _context.sent;
                                _context.next = 16;
                                return campaign.methods.contributorCount().call();

                            case 16:
                                contributorCount = _context.sent;
                                _context.next = 19;
                                return _promise2.default.all(Array(parseInt(reqCount)).fill().map(function (ele, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 19:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, reqCount: reqCount, requests: requests, contributorCount: contributorCount, manager: manager, contribution: contribution, accounts: accounts });

                            case 21:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;