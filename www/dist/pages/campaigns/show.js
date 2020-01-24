'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

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