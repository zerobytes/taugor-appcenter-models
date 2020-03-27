"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Auth", {
  enumerable: true,
  get: function get() {
    return _Auth["default"];
  }
});
Object.defineProperty(exports, "App", {
  enumerable: true,
  get: function get() {
    return _App["default"];
  }
});
Object.defineProperty(exports, "Billing", {
  enumerable: true,
  get: function get() {
    return _Billing["default"];
  }
});
Object.defineProperty(exports, "Company", {
  enumerable: true,
  get: function get() {
    return _Company["default"];
  }
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _Group["default"];
  }
});
Object.defineProperty(exports, "Permission", {
  enumerable: true,
  get: function get() {
    return _Permission["default"];
  }
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function get() {
    return _User["default"];
  }
});
Object.defineProperty(exports, "Franchisee", {
  enumerable: true,
  get: function get() {
    return _Franchisee["default"];
  }
});
Object.defineProperty(exports, "Customer", {
  enumerable: true,
  get: function get() {
    return _Customer["default"];
  }
});
Object.defineProperty(exports, "shapes", {
  enumerable: true,
  get: function get() {
    return _shapes["default"];
  }
});
exports.permissionReference = exports.locationAddress = exports.demoMode = exports.contactPerson = exports.billing = void 0;

var _Auth = _interopRequireDefault(require("./models/Auth"));

var _App = _interopRequireDefault(require("./models/App"));

var _Billing = _interopRequireDefault(require("./models/Billing"));

var _Company = _interopRequireDefault(require("./models/Company"));

var _Group = _interopRequireDefault(require("./models/Group"));

var _Permission = _interopRequireDefault(require("./models/Permission"));

var _User = _interopRequireDefault(require("./models/User"));

var _Franchisee = _interopRequireDefault(require("./models/Franchisee"));

var _Customer = _interopRequireDefault(require("./models/Customer"));

var _shapes = _interopRequireDefault(require("./shapes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Models for export
//Shapes for export
var billing = shapes.billing;
exports.billing = billing;
var contactPerson = shapes.contactPerson;
exports.contactPerson = contactPerson;
var demoMode = shapes.demoMode;
exports.demoMode = demoMode;
var locationAddress = shapes.locationAddress;
exports.locationAddress = locationAddress;
var permissionReference = shapes.permissionReference;
exports.permissionReference = permissionReference;