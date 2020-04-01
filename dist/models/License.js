"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var omj = require('@zerobytes/object-model-js');

var ModelBase = omj.ModelBase;
var FieldTypes = omj.FieldTypes;
var validator = omj.Validator;

var License =
/*#__PURE__*/
function (_ModelBase) {
  _inherits(License, _ModelBase);

  function License() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, License);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(License).call(this, 'license'));
    _this.$fieldConfig = {
      app: {
        type: FieldTypes.String,
        minLength: 1,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'app').isOfType().minLength().notEmpty().notNull().isValid();
        }
      },
      company: {
        type: FieldTypes.String,
        minLength: 1,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'company').isOfType().minLength().notEmpty().notNull().isValid();
        }
      },
      amount: {
        type: FieldTypes.Integer,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'amount').isOfType().isValid();
        }
      },
      demoStartedAt: {
        type: FieldTypes.Datetime,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'demoStartedAt').isOfType().isValid();
        }
      },
      demoExpiresAt: {
        type: FieldTypes.Datetime,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'demoExpiresAt').isOfType().isValid();
        }
      },
      used: {
        type: FieldTypes.Integer,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'used').isOfType().isValid();
        }
      },
      type: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'type').isOfType().isValid();
        }
      },
      planId: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'planId').isOfType().isValid();
        }
      },
      subscriptionId: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'subscriptionId').isOfType().isValid();
        }
      },
      status: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'status').isOfType().isValid();
        }
      },
      history: {
        type: FieldTypes.Array,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'history').isOfType().isValid();
        }
      }
    };

    _this.$fill(properties);

    return _this;
  }

  return License;
}(ModelBase);

var _default = License;
exports["default"] = _default;