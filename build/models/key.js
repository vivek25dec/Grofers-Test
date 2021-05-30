'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var KeySchema = new Schema({
  key: {
    type: String,
    index: true
  },
  value: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

var Key = _mongoose2.default.model(_utils.TABLE_NAME.TABLE_KEY, KeySchema);
exports.default = Key;
//# sourceMappingURL=key.js.map