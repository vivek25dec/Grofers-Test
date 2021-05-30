'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertKeyValue = exports.fetchKeyByID = undefined;

var _models = require('../models');

var _utils = require('../utils');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// This method is used to fetch the key value by its key name
var fetchKeyByID = exports.fetchKeyByID = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var key, e, result, _e, _e2;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            key = req.params.key;

            // Check if the key is present in the query params

            if (key) {
              _context.next = 5;
              break;
            }

            e = {
              message: _utils.ERROR_MESSAGE.NOT_FOUND_KEY
            };
            return _context.abrupt('return', (0, _utils.error)(res, e));

          case 5:
            _context.next = 7;
            return _models.Key.findOne({ key: key });

          case 7:
            result = _context.sent;

            if (result) {
              _context.next = 11;
              break;
            }

            _e = {
              message: _utils.ERROR_MESSAGE.NOT_FOUND_KEY
            };
            return _context.abrupt('return', (0, _utils.error)(res, _e));

          case 11:
            return _context.abrupt('return', (0, _utils.success)(res, result));

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](0);
            _e2 = {
              message: _context.t0.message
            };
            return _context.abrupt('return', _context.t0(res, _e2));

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 14]]);
  }));

  return function fetchKeyByID(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// This function is used to upsert key value
var upsertKeyValue = exports.upsertKeyValue = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, key, value, e, query, data, result, _e3, response, _e4;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, key = _req$body.key, value = _req$body.value;

            // This will check if both key and value is present

            if (!(!key || !value)) {
              _context2.next = 5;
              break;
            }

            e = {
              message: _utils.ERROR_MESSAGE.KEY_FIELD_MISSING
            };
            return _context2.abrupt('return', (0, _utils.error)(res, e));

          case 5:
            query = { key: key };
            data = {
              key: key,
              value: value
            };
            _context2.next = 9;
            return _models.Key.findOneAndUpdate(query, data, { upsert: true });

          case 9:
            result = _context2.sent;

            if (result) {
              _context2.next = 13;
              break;
            }

            _e3 = {
              message: _utils.ERROR_MESSAGE.ERROR_UPSERT_KEY
            };
            return _context2.abrupt('return', (0, _utils.error)(res, _e3));

          case 13:
            response = {
              message: "Stored Successfully"
            };
            return _context2.abrupt('return', (0, _utils.success)(res, response));

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2['catch'](0);
            _e4 = {
              message: _context2.t0.message
            };
            return _context2.abrupt('return', _context2.t0(res, _e4));

          case 21:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 17]]);
  }));

  return function upsertKeyValue(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=key.js.map