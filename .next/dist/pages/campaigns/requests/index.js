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

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\celes\\Downloads\\Programs\\project\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRow',
        value: function renderRow() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    id: index,
                    request: request,
                    address: _this2.props.address,
                    approversCount: _this2.props.approversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Divider, { horizontal: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'tag', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), 'Requests List')), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Table, { color: 'black', inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'ID'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Amount'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Approval'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Approve'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Finalize'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, this.renderRow())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Found ', this.props.requestCount, ' requests')), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, { basic: true, color: 'blue', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'blue', icon: true, labelPosition: 'left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'clipboard check', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), 'Add Requests')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approversCount().call();

                            case 7:
                                approversCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 10:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

                            case 12:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkljb24iLCJIZWFkZXIiLCJEaXZpZGVyIiwiVGFibGUiLCJTZWdtZW50IiwiR3JpZCIsIkxpbmsiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwicmVuZGVyUm93IiwicmVxdWVzdENvdW50IiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFRLEFBQU0sQUFBUSxBQUFTLEFBQU8sQUFBUzs7QUFDdkQsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7OztvQ0FpQlU7eUJBQ1I7O3dCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDL0M7dUNBQU8sQUFBQzt5QkFBRCxBQUNGLEFBQ0w7d0JBRk8sQUFFSCxBQUNKOzZCQUhPLEFBR0UsQUFDVDs2QkFBUyxPQUFBLEFBQUssTUFKUCxBQUlhLEFBQ3BCO29DQUFrQixPQUFBLEFBQUssTUFMaEIsQUFLc0I7O2tDQUx0QjtvQ0FBUCxBQUFPLEFBT1Y7QUFQVTtBQUNQLGlCQURPO0FBRFgsQUFBTyxBQVNWLGFBVFU7Ozs7aUNBVUYsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsMENBQVEsWUFBVDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDQTtBQURBOytCQUNBLEFBQUMsdUNBQUssTUFBTixBQUFXOzhCQUFYO2dDQURBLEFBQ0E7QUFBQTtnQkFIUixBQUNJLEFBQ0ksQUFLSixtQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx3Q0FBTSxPQUFQLEFBQWEsU0FBUSxVQUFyQjs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7K0JBQ0MsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLGdDQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBSEosQUFHSSxBQUNBLDJCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLDhCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBTEosQUFLSSxBQUNBLDZCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBTkosQUFNSSxBQUNBLDRCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBVFIsQUFDQSxBQUNJLEFBT0ksQUFHSiwrQkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLG9CQWJSLEFBQ0ksQUFZSSxBQUFhLEFBQUssQUFFdEIsK0JBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ2UsZUFBQSxBQUFLLE1BRHBCLEFBQzBCLGNBakJsQyxBQUNJLEFBZUksQUFJSiwrQkFBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxPQUFmLEFBQXFCOzhCQUFyQjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBRztBQUFIO0FBQUEsK0JBQUcsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQixRQUFPLE1BQTNCLE1BQWdDLGVBQWhDLEFBQThDOzhCQUE5QztnQ0FBQSxBQUFxRDtBQUFyRDsrQkFBcUQsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBQXJELEFBQXFEO0FBQUE7Z0JBL0I1RSxBQUNJLEFBT0ksQUFvQkksQUFDSSxBQUNJLEFBQ0EsQUFBRyxBQVcxQjs7Ozs7aUgsQUF0RTRCOzs7OztpQ0FDbEI7QSwwQ0FBVyxNLEFBQU0sTUFDbEIsQSxBQURDO0EsMkNBQ1Usd0IsQUFBQSxBQUFTOzt1Q0FDQyxTQUFBLEFBQVMsUUFBVCxBQUFpQixtQixBQUFqQixBQUFvQzs7aUNBQXpEO0E7O3VDQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQixBQUFqQixBQUFrQzs7aUNBQXpEO0E7O3lEQUNpQixBQUFRLFVBQ3JCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFDQyxPQURELEFBRUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDckI7MkNBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUMzQztBLEFBTGtCLEFBQ25CLGlDQUFBLENBRG1COztpQ0FBakI7QTtpRUFRQyxFQUFFLFNBQUYsU0FBVyxVQUFYLFVBQXFCLGNBQXJCLGNBQW1DLGdCLEFBQW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFkWSxBQXlFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvY2VsZXMvRG93bmxvYWRzL1Byb2dyYW1zL3Byb2plY3QifQ==