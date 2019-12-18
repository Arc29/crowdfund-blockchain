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

var _jsxFileName = '/home/arcgeekz/development/campaign-contract/pages/campaigns/show.js?entry';


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
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: list, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Campaign Details'), _react2.default.createElement(_semanticUiReact.Card, { header: this.props.title, description: this.props.description, fluid: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, 'View Requests')))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIldlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJTaG93RGV0YWlscyIsInByb3BzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImNvbnRyaWJ1dG9yQ291bnQiLCJ0b3RhbENvbnRyaWJ1dGlvbnMiLCJiYWxhbmNlIiwicmVxdWVzdENvdW50IiwibWFuYWdlciIsImxpc3QiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInRpdGxlIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVEsQUFBSyxBQUFNOztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7OztzQ0FrQlc7eUJBUUwsS0FSSyxBQVFBO2dCQVJBLEFBRUwsNkJBRkssQUFFTDtnQkFGSyxBQUdMLDBCQUhLLEFBR0w7Z0JBSEssQUFJTCw0QkFKSyxBQUlMO2dCQUpLLEFBS0wsaUJBTEssQUFLTDtnQkFMSyxBQU1MLHNCQU5LLEFBTUw7Z0JBTkssQUFPTCxpQkFQSyxBQU9MLEFBRUo7O2dCQUFNO3dCQUNGLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTSxFQUFDLGNBTEosQUFDUCxBQUlVLEFBQWM7QUFKeEIsQUFDSSxhQUZHO3dCQVFJLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixxQkFEOUIsQUFDVyxBQUF1QyxBQUM5QztzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTSxFQUFDLGNBWEosQUFPUCxBQUlVLEFBQWM7QUFKeEIsQUFDSTt3QkFLSixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2dCLEFBQ1o7dUJBQU0sRUFBQyxjQWpCSixBQWFQLEFBSVUsQUFBYztBQUp4QixBQUNJO3dCQU1PLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixvQkFEOUIsQUFDVyxBQUFzQyxBQUM3QztzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTSxFQUFDLGNBdkJKLEFBbUJQLEFBSVUsQUFBYztBQUp4QixBQUNJO3dCQU1PLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ5QixBQUNXLEFBQTJCLEFBQ2xDO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaO3VCQUFNLEVBQUMsY0E3QkosQUF5QlAsQUFJVSxBQUFjO0FBSnhCLEFBQ0k7d0JBS0osQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaO3VCQUFNLEVBQUMsY0FuQ2YsQUFBVyxBQStCUCxBQUlVLEFBQWMsQUFHNUI7QUFQSSxBQUNJO2lEQU1ELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0gsQUFDSjttQ0FBTyxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNQO0FBRE87QUFBQSxhQUFBLGtCQUNQLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURPLEFBQ1AsQUFJQSxxQ0FBQSxBQUFDLHVDQUFLLFFBQVEsS0FBQSxBQUFLLE1BQW5CLEFBQXlCLE9BQU8sYUFBYSxLQUFBLEFBQUssTUFBbEQsQUFBd0QsYUFBYSxPQUFyRSxBQUE0RTs4QkFBNUU7Z0NBTE8sQUFLUCxBQUNBO0FBREE7Z0NBQ0EsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNDO0FBREQ7b0JBREosQUFDSSxBQUNDLEFBQUssQUFHTixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBUEosQUFDQSxBQUtJLEFBQ0EsQUFHQTtBQUhBO2tDQUdDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7OEJBQUE7Z0NBQUEsQUFDQTtBQURBOytCQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBcEJaLEFBQU8sQUFNUCxBQVVJLEFBQ0ksQUFDQSxBQUNBLEFBQ0ksQUFXZjs7Ozs7aUgsQUFuRzRCOzs7OztpQ0FDbkI7QSwyQ0FBUyx3QkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCOzt1Q0FDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7aUNBQTVDO0E7OzZDQUdNLE1BQUEsQUFBTSxNQURYLEFBQ2lCLEFBQ3BCOzJDQUFNLFFBRkgsQUFFRyxBQUFRLEFBQ2Q7aURBQVksUUFIVCxBQUdTLEFBQVEsQUFDcEI7eURBQW9CLFFBSmpCLEFBSWlCLEFBQVEsQUFDNUI7c0RBQWlCLFFBTGQsQUFLYyxBQUFRLEFBQ3pCO3dEQUFtQixRQU5oQixBQU1nQixBQUFRLEFBQzNCOzZDQUFRLFFBUEwsQUFPSyxBQUFRLEFBQ2hCO2tEQUFhLFFBUlYsQUFRVSxBQUFRLEFBQ3JCOzZDQUFRLFEsQUFUTCxBQVNLLEFBQVE7O0FBVGIsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBTmMsQUF1RzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJjZ2Vla3ovZGV2ZWxvcG1lbnQvY2FtcGFpZ24tY29udHJhY3QifQ==