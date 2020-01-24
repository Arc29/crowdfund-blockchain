
          window.__NEXT_REGISTER_PAGE('/campaigns/show', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(980);


/***/ }),

/***/ 980:
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

var _Layout = __webpack_require__(111);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(141);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(60);

var _web = __webpack_require__(186);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(981);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowDetails = function (_Component) {
    (0, _inherits3.default)(ShowDetails, _Component);

    function ShowDetails() {
        (0, _classCallCheck3.default)(this, ShowDetails);

        return (0, _possibleConstructorReturn3.default)(this, (ShowDetails.__proto__ || (0, _getPrototypeOf2.default)(ShowDetails)).apply(this, arguments));
    }

    (0, _createClass3.default)(ShowDetails, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                minimumContribution = _props.minimumContribution,
                contributorCount = _props.contributorCount,
                totalContributions = _props.totalContributions,
                balance = _props.balance,
                requestCount = _props.requestCount,
                manager = _props.manager;

            var list = [{
                header: manager,
                meta: 'Address of manager',
                description: 'Creator of this campaign',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(minimumContribution, 'gwei'),
                meta: 'gwei',
                description: 'Minimum amount accepted by creator to be considered a contributor',
                style: { overflowWrap: 'break-word' }
            }, {
                header: contributorCount,
                meta: 'Number of contributors',
                description: 'Currently registered contributors',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(totalContributions, 'gwei'),
                meta: 'gwei',
                description: 'Total contributions by contributors',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(balance, 'gwei'),
                meta: 'gwei',
                description: 'Currently available balance in campaign',
                style: { overflowWrap: 'break-word' }
            }, {
                header: requestCount,
                meta: 'Request count',
                description: 'Number of requests made by creator',
                style: { overflowWrap: 'break-word' }
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: list });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('h3', null, 'Campaign Details'), _react2.default.createElement(_semanticUiReact.Card, { header: this.props.title, description: this.props.description, fluid: true }), _react2.default.createElement(_semanticUiReact.Grid, null, _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12 }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4 }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address }))), _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Grid.Column, null, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests' }, _react2.default.createElement('a', null, _react2.default.createElement(_semanticUiReact.Button, { primary: true }, 'View Requests')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, details;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                details = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    title: details[0],
                                    description: details[1],
                                    minimumContribution: details[2],
                                    contributorCount: details[3],
                                    totalContributions: details[4],
                                    balance: details[5],
                                    requestCount: details[6],
                                    manager: details[7]

                                });

                            case 5:
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

    return ShowDetails;
}(_react.Component);

exports.default = ShowDetails;

/***/ }),

/***/ 981:
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

var _campaign = __webpack_require__(141);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(71);

var _web2 = _interopRequireDefault(_web);

var _web3 = __webpack_require__(186);

var _web4 = _interopRequireDefault(_web3);

var _routes = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            loading: false,
            errorMsg: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);

                                _this.setState({ loading: true, errorMsg: '' });
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web4.default.utils.toWei(_this.state.value, 'gwei')
                                });

                            case 9:
                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMsg: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMsg }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: 'gwei',
                labelPosition: 'right'
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops...something went wrong!', content: this.state.errorMsg }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, type: 'submit' }, 'Send funds'));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;

/***/ })

},[979]);
            return { page: comp.default }
          })
        