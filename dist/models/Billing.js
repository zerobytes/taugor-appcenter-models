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

var App = require('./App')["default"],
    Company = require('./Company')["default"];
/**
 * @type Billing
 * @property {string} app
 * @property {string} company
 * @property {string} info
 * @property {string} createdBy
 * @property {date} creationDate
 */


var Billing =
/*#__PURE__*/
function (_ModelBase) {
  _inherits(Billing, _ModelBase);

  function Billing() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Billing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Billing).call(this, 'billing'));
    _this.$fieldConfig = {
      app: {
        type: FieldTypes.IdOf(App),
        minLength: 1,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'app').isOfType().minLength().notEmpty().notNull().isValid();
        }
      },
      company: {
        type: FieldTypes.IdOf(Company),
        minLength: 1,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'company').isOfType().minLength().notEmpty().notNull().isValid();
        }
      },
      info: {
        type: FieldTypes.Object,
        defaultValue: {},
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'info').isOfType().isValid();
        }
      }
    };

    _this.$fill(properties);

    return _this;
  }

  return Billing;
}(ModelBase);

var _default = Billing;
exports["default"] = _default;