"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var success = function success(res) {
  var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

  var result = {
    success: true,
    response: response
  };
  return res.status(status).json(result);
};

var error = function error(res) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  var result = {
    success: false,
    e: e
  };
  return res.status(status).json(result);
};

exports.success = success;
exports.error = error;
//# sourceMappingURL=helper.js.map