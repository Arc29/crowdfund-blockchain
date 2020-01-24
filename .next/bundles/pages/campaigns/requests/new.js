
          window.__NEXT_REGISTER_PAGE('/campaigns/requests/new', function() {
            var comp = module.exports =
webpackJsonp([8],{

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(978);


/***/ }),

/***/ 978:
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

var _semanticUiReact = __webpack_require__(60);

var _campaign = __webpack_require__(141);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(71);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewRequest = function (_Component) {
    (0, _inherits3.default)(NewRequest, _Component);

    function NewRequest() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, NewRequest);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewRequest.__proto__ || (0, _getPrototypeOf2.default)(NewRequest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            recipient: '',
            description: '',
            errorMsg: "",
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ errorMsg: '', loading: true });
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.createRequest(_this.state.description, _this.state.value, _this.state.recipient).send({
                                    from: accounts[0]
                                });

                            case 9:
                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);
                                _this.setState({ errorMsg: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false });

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

    (0, _createClass3.default)(NewRequest, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests' }, 'Back'), _react2.default.createElement('h3', null, 'Create new request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMsg }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Description'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.description, onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                } })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Value(in wei)'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.recipient, onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                } })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops...something went wrong!', content: this.state.errorMsg }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, type: 'submit' }, 'Create request!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt('return', { address: props.query.address });

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return NewRequest;
}(_react.Component);

exports.default = NewRequest;

/***/ })

},[977]);
            return { page: comp.default }
          })
        