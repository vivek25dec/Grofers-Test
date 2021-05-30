'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('../controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET key by id  */
router.get('/:key', function (req, res, next) {
  return (0, _controller.fetchKeyByID)(req, res);
});

router.post("/", function (req, res) {
  return (0, _controller.upsertKeyValue)(req, res);
});

exports.default = router;
//# sourceMappingURL=key.js.map