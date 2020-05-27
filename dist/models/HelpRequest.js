"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var omj = require('@zerobytes/object-model-js');

var ModelBase = omj.ModelBase;
var FieldTypes = omj.FieldTypes;
var validator = omj.Validator;

var HelpRequest =
/*#__PURE__*/
function (_ModelBase) {
  _inherits(HelpRequest, _ModelBase);

  function HelpRequest() {
    var _this$$fieldConfig;

    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, HelpRequest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HelpRequest).call(this, 'helpRequest'));
    _this.$fieldConfig = (_this$$fieldConfig = {
      reason: {
        type: FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      opportunity: {
        type: FieldTypes.Object,
        validate: function validate() {
          return true;
        }
      },
      customer: {
        type: FieldTypes.String,
        validate: function validate() {
          return true;
        }
      }
    }, _defineProperty(_this$$fieldConfig, "reason", {
      type: FieldTypes.String,
      validate: function validate() {
        return true;
      }
    }), _defineProperty(_this$$fieldConfig, "responsible", {
      type: FieldTypes.Object,
      validate: function validate() {
        return true;
      }
    }), _defineProperty(_this$$fieldConfig, "lastMessage", {
      type: FieldTypes.Object,
      validate: function validate() {
        return true;
      }
    }), _defineProperty(_this$$fieldConfig, "finished", {
      type: FieldTypes.Boolean,
      validate: function validate() {
        return true;
      }
    }), _defineProperty(_this$$fieldConfig, "conversation", {
      type: FieldTypes.String,
      validate: function validate() {
        return true;
      }
    }), _this$$fieldConfig);

    _this.$fill(properties);

    return _this;
  }

  return HelpRequest;
}(ModelBase);

var _default = HelpRequest;
exports["default"] = _default;