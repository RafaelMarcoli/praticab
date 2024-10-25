"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Tokencontrollers = require('../controllers/Tokencontrollers'); var _Tokencontrollers2 = _interopRequireDefault(_Tokencontrollers);

const router = new (0, _express.Router)();

router.post("/", _Tokencontrollers2.default.store);

exports. default = router;
