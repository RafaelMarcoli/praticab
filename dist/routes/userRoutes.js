"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Usercontrollers = require('../controllers/Usercontrollers'); var _Usercontrollers2 = _interopRequireDefault(_Usercontrollers);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

//router.get("/", loginRequired, userController.index);
//router.get("/:id", userController.show);

router.post("/", _loginRequired2.default, _Usercontrollers2.default.store);
router.put("/", _loginRequired2.default, _Usercontrollers2.default.update);
router.delete("/", _loginRequired2.default, _Usercontrollers2.default.delete);

exports. default = router;
