
          window.__NEXT_REGISTER_PAGE('/campaigns/requests', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(974);


/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(94);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(47);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(33);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(111);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(60);

var _routes = __webpack_require__(70);

var _campaign = __webpack_require__(141);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(976);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _web = __webpack_require__(71);

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

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(47);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(33);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(60);

var _web = __webpack_require__(186);

var _web2 = _interopRequireDefault(_web);

var _web3 = __webpack_require__(71);

var _web4 = _interopRequireDefault(_web3);

var _campaign = __webpack_require__(141);

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            approveLoading: false,
            finalizeLoading: false,
            errorMsg: ''
        }, _this.onApprove = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(_this.props.address);

                                _this.setState({ approveLoading: true, errorMsg: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _web4.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return campaign.methods.approveRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);
                                _this.setState({ errorMsg: _context.t0.message });

                            case 14:
                                _this.setState({ approveLoading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onFinalize = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(_this.props.address);

                                _this.setState({ finalizeLoading: true, errorMsg: '' });
                                _context2.prev = 2;
                                _context2.next = 5;
                                return _web4.default.eth.getAccounts();

                            case 5:
                                accounts = _context2.sent;

                                if (!(accounts[0] !== _this.props.manager)) {
                                    _context2.next = 8;
                                    break;
                                }

                                throw new Error('Only manager can finalize');

                            case 8:
                                _context2.next = 10;
                                return campaign.methods.finalizeRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 10:
                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');
                                _context2.next = 16;
                                break;

                            case 13:
                                _context2.prev = 13;
                                _context2.t0 = _context2['catch'](2);
                                _this.setState({ errorMsg: _context2.t0.message });

                            case 16:
                                _this.setState({ finalizeLoading: false });

                            case 17:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[2, 13]]);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                contributorCount = _props.contributorCount;

            var canBeFinaized = request.approvalCount > contributorCount / 2;

            return _react2.default.createElement(Row, { disabled: request.completed, positive: canBeFinaized && !request.completed }, _react2.default.createElement(Cell, null, id + 1), _react2.default.createElement(Cell, null, request.description), _react2.default.createElement(Cell, null, _web2.default.utils.fromWei(request.value, 'gwei')), _react2.default.createElement(Cell, null, request.recipient), _react2.default.createElement(Cell, null, request.approvalCount + '/' + contributorCount), _react2.default.createElement(Cell, null, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, disabled: request.completed || parseInt(this.props.contribution) === 0, onClick: this.onApprove, loading: this.state.approveLoading }, 'Approve')), _react2.default.createElement(Cell, null, _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, disabled: request.completed || !canBeFinaized, onClick: this.onFinalize, loading: this.state.finalizeLoading }, 'Finalize')), this.state.errorMsg ? _react2.default.createElement(Cell, { negative: true }, this.state.errorMsg) : request.completed ? _react2.default.createElement(Cell, null, 'Completed') : _react2.default.createElement(Cell, null, 'Pending'));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;

/***/ })

},[973]);
            return { page: comp.default }
          })
        