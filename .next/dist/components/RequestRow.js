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

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\celes\\Downloads\\Programs\\project\\components\\RequestRow.js';


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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context2.sent;
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var readyToFinalize = request.approvalCount > approversCount / 2;
            return _react2.default.createElement(_semanticUiReact.Table.Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, request.description), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _web2.default.utils.fromWei(request.value)), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, request.recipient), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, request.approvalCount, '/', approversCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { basic: true, onClick: this.onApprove, color: 'green', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Aprrove')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { basic: true, onClick: this.onFinalize, color: 'yellow', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUNGLHFGQUFZLG1CQUFBOzBCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNGO0FBREUsdUNBQ1Msd0JBQVMsTUFBQSxBQUFLLE1BRHZCLEFBQ1MsQUFBb0I7NENBRDdCO21DQUVlLGNBQUEsQUFBSyxJQUZwQixBQUVlLEFBQVM7OzZCQUExQjtBQUZFLGdEQUFBOzRDQUFBO21DQUdGLFNBQUEsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDLEtBQUssRUFBQyxNQUFNLFNBSHpELEFBR0YsQUFBb0QsQUFBTyxBQUFTOzs2QkFIbEU7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QSxtQixBQU1aLHNGQUFhLG9CQUFBOzBCQUFBOzRFQUFBOzBCQUFBO3VEQUFBOzZCQUNIO0FBREcsdUNBQ1Esd0JBQVMsTUFBQSxBQUFLLE1BRHRCLEFBQ1EsQUFBb0I7NkNBRDVCO21DQUVjLGNBQUEsQUFBSyxJQUZuQixBQUVjLEFBQVM7OzZCQUExQjtBQUZHLGlEQUFBOzZDQUFBO21DQUdILFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0QsS0FBSyxFQUFDLE1BQU0sU0FIekQsQUFHSCxBQUFxRCxBQUFPLEFBQVM7OzZCQUhsRTs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBOzs7OztpQ0FLSjt5QkFDaUMsS0FEakMsQUFDc0M7Z0JBRHRDLEFBQ0UsWUFERixBQUNFO2dCQURGLEFBQ00saUJBRE4sQUFDTTtnQkFETixBQUNlLHdCQURmLEFBQ2UsQUFDcEI7O2dCQUFNLGtCQUFpQixRQUFBLEFBQVEsZ0JBQWdCLGlCQUEvQyxBQUE4RCxBQUM5RDttQ0FDQyxjQUFELHVCQUFBLEFBQU8sT0FBSSxVQUFVLFFBQXJCLEFBQTZCLFVBQVUsVUFBVSxtQkFBbUIsQ0FBQyxRQUFyRSxBQUE2RTs4QkFBN0U7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFhO0FBQWI7QUFBQSxlQURKLEFBQ0ksQUFDQSxxQkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLHVCQUZKLEFBRUksQUFBcUIsQUFDckIsOEJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFhO0FBQWI7QUFBQSw2QkFBYSxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBSHBDLEFBR0ksQUFBYSxBQUEyQixBQUN4Qyx5QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLHVCQUpKLEFBSUksQUFBcUIsQUFDckIsNEJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFhO0FBQWI7QUFBQSx1QkFBQSxBQUFxQixlQUFnQixLQUx6QyxBQUtJLEFBQ0EsaUNBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNLO0FBREw7QUFBQSx1QkFDSyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2YsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsU0FBUyxLQUF2QixBQUE0QixXQUFVLE9BQXRDLEFBQTRDOzhCQUE1QztnQ0FBQTtBQUFBO2FBQUEsRUFSYixBQU1JLEFBRVMsQUFJVCw2QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0s7QUFETDtBQUFBLHVCQUNLLEFBQVEsV0FBUixBQUFtQix1QkFDaEIsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsU0FBUyxLQUF2QixBQUE0QixZQUFXLE9BQXZDLEFBQTZDOzhCQUE3QztnQ0FBQTtBQUFBO2FBQUEsRUFmWixBQUNBLEFBWUksQUFFUSxBQU1mOzs7OztBQUdMLEEsQUF2Q3lCOztrQkF1Q3pCLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9jZWxlcy9Eb3dubG9hZHMvUHJvZ3JhbXMvcHJvamVjdCJ9