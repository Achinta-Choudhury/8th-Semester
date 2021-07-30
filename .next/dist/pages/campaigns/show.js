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

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\celes\\Downloads\\Programs\\project\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignShow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Divider, { horizontal: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'tag', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), 'Campaign Details')), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, divided: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, { compact: true, basic: true, color: 'violet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: _this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            })), _react2.default.createElement(_semanticUiReact.Segment, { basic: true, color: 'blue', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + _this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'blue', icon: true, labelPosition: 'left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'eye', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }), 'View Requests')))))))));
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',

        //return {cardInfo.map(render)};
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                image: 'https://bit.ly/2Uf6Ckr',
                header: manager,
                meta: "Manager Address",
                description: "The manager created this campaign and inside this there are several transaction requests",
                style: { overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1)' }
            }, {
                image: 'https://bit.ly/2UriRtY ',
                header: minimumContribution,
                meta: 'Minimum Contributuion (wei)',
                description: "This ammount of is to be contributed to vote for the transactions",
                style: { overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1' }
            }, {
                image: 'https://bit.ly/3rf4Pry',
                header: requestsCount,
                meta: 'Number of Requests',
                description: "This is the money that is to be used from the contract. Requests must be approved by approvers",
                style: { overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1' }
            }, {
                image: 'https://bit.ly/3hKkZpJ',
                header: approversCount,
                meta: 'Eligible Voters',
                description: "Contributers are eligible to vote for managers requests",
                style: { overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1' }
            }, {
                image: 'https://bit.ly/3xPP3pp',
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance',
                description: "Remaining amount of money in the Campaign",
                style: { overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1' }
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            });
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiSWNvbiIsIlNlZ21lbnQiLCJIZWFkZXIiLCJEaXZpZGVyIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInJlbmRlciIsInJlbmRlckNhcmRzIiwicHJvcHMiLCJhZGRyZXNzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJpbWFnZSIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiYmFja2dyb3VuZENvbG9yIiwidXRpbHMiLCJmcm9tV2VpIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBTSxBQUFRLEFBQU0sQUFBUyxBQUFROztBQUNwRCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs0TixBQWdFRSxTQUFTLFlBQU0sQUFDZjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsMENBQVEsWUFBVDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsdUNBQUssTUFBTixBQUFXOzhCQUFYO2dDQURKLEFBQ0k7QUFBQTtnQkFIWixBQUNJLEFBQ0ksQUFLSixzQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNLO0FBREw7cUJBREosQUFDSSxBQUNLLEFBQUssQUFHVixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CLEdBQUcsU0FBdkI7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLDBDQUFRLFNBQVQsTUFBaUIsT0FBakIsTUFBdUIsT0FBdkIsQUFBNkI7OEJBQTdCO2dDQUFBLEFBQXNDO0FBQXRDOytCQUFzQyxBQUFDLDBDQUFlLFNBQVMsTUFBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FEMUMsQUFDSSxBQUFzQyxBQUN0QztBQURzQztpQ0FDdEMsQUFBQywwQ0FBUSxPQUFULE1BQWUsT0FBZixBQUFxQjs4QkFBckI7Z0NBQUEsQUFDQTtBQURBOytCQUNBLEFBQUMsOEJBQUssdUJBQXFCLE1BQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFBRztBQUFIO0FBQUEsK0JBQUcsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQixRQUFPLE1BQTNCLE1BQWdDLGVBQWhDLEFBQThDOzhCQUE5QztnQ0FBQSxBQUFxRDtBQUFyRDsrQkFBcUQsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBQXJELEFBQXFEO0FBQUE7Z0JBbkJwRixBQUNJLEFBT0ksQUFLSSxBQUNJLEFBQ0ksQUFFSSxBQUNBLEFBQ0ksQUFBRyxBQVk5QjtBOzs7O2FBQ0Q7OztzQ0FuRlU7eUJBT1YsS0FQVSxBQU9MO2dCQVBLLEFBRVYsaUJBRlUsQUFFVjtnQkFGVSxBQUdWLGlCQUhVLEFBR1Y7Z0JBSFUsQUFJViw2QkFKVSxBQUlWO2dCQUpVLEFBS1YsdUJBTFUsQUFLVjtnQkFMVSxBQU1WLHdCQU5VLEFBTVYsQUFHSjs7Z0JBQU07dUJBQ0YsQUFDVyxBQUNQO3dCQUZKLEFBRVksQUFDUjtzQkFISixBQUdVLEFBQ047NkJBSkosQUFJaUIsQUFDYjt1QkFBTyxFQUFDLGNBQUQsQUFBZSxjQUFjLGlCQU45QixBQUNWLEFBS1csQUFBOEM7QUFMekQsQUFDSSxhQUZNO3VCQVFWLEFBQ1csQUFDUDt3QkFGSixBQUVZLEFBQ1I7c0JBSEosQUFHVSxBQUNOOzZCQUpKLEFBSWlCLEFBQ2I7dUJBQU8sRUFBQyxjQUFELEFBQWUsY0FBYyxpQkFiOUIsQUFRVixBQUtXLEFBQThDO0FBTHpELEFBQ0k7dUJBTUosQUFDVyxBQUNQO3dCQUZKLEFBRVksQUFDUjtzQkFISixBQUdVLEFBQ047NkJBSkosQUFJaUIsQUFDYjt1QkFBTyxFQUFDLGNBQUQsQUFBZSxjQUFjLGlCQXBCOUIsQUFlVixBQUtXLEFBQThDO0FBTHpELEFBQ0k7dUJBTUosQUFDVyxBQUNQO3dCQUZKLEFBRVksQUFDUjtzQkFISixBQUdVLEFBQ047NkJBSkosQUFJaUIsQUFDYjt1QkFBTyxFQUFDLGNBQUQsQUFBZSxjQUFjLGlCQTNCOUIsQUFzQlYsQUFLVyxBQUE4QztBQUx6RCxBQUNJO3VCQU1KLEFBQ1csQUFDUDt3QkFBUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FGL0IsQUFFWSxBQUE0QixBQUNwQztzQkFISixBQUdVLEFBQ047NkJBSkosQUFJaUIsQUFDYjt1QkFBTyxFQUFDLGNBQUQsQUFBZSxjQUFjLGlCQWxDNUMsQUFBYyxBQTZCVixBQUtXLEFBQThDLEFBR3pEO0FBUkEsQUFDSTtpREFPRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7OztrSCxBQTNEa0I7Ozs7O2lDQUNuQjtBLDJDQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O3VDQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOztpQ0FBOUM7QTs7NkNBR08sTUFBQSxBQUFNLE1BRFosQUFDa0IsQUFDckI7eURBQXFCLFFBRmxCLEFBRWtCLEFBQVEsQUFDN0I7NkNBQVMsUUFITixBQUdNLEFBQVEsQUFDakI7bURBQWUsUUFKWixBQUlZLEFBQVEsQUFDdkI7b0RBQWdCLFFBTGIsQUFLYSxBQUFRLEFBQ3hCOzZDQUFTLFEsQUFOTixBQU1NLEFBQVE7QUFOZCxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFOZSxBQW9HM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9jZWxlcy9Eb3dubG9hZHMvUHJvZ3JhbXMvcHJvamVjdCJ9