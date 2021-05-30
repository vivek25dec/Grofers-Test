'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _key = require('./key');

Object.keys(_key).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _key[key];
    }
  });
});
//# sourceMappingURL=index.js.map