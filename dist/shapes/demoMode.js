"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var omj = require('@zerobytes/object-model-js');

var User = require('../models/User')["default"];

var FieldTypes = omj.FieldTypes;
var validator = omj.Validator;
var ShapeBase = omj.ShapeBase;
/**
 * @type DemoMode
 * @property {FieldTypes.String} account
 * @property {FieldTypes.String} agency
 * @property {FieldTypes.String} bank
 */

var DemoMode =
/*#__PURE__*/
function (_ShapeBase) {
  _inherits(DemoMode, _ShapeBase);

  function DemoMode() {
    var _this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, DemoMode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DemoMode).call(this, data));
    var date = new Date(Date.now());
    date.setDate(date.getDate() + 7);
    _this.active = false;
    _this.expiresOn = date;
    _this.sponsor = '';
    _this.$fieldConfig = {
      active: {
        type: FieldTypes.Boolean,
        defaultValue: false,
        validate: function validate() {
          return true;
        }
      },
      expiresOn: {
        type: FieldTypes.Datetime,
        defaultValue: date,
        //transform: ()=>{},
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'expiresOn').isOfType().isValid();
        }
      },
      sponsor: {
        hidden: true,
        type: FieldTypes.IdOf(User),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'sponsor').isOfType().notEmpty().notNull().isValid();
        }
      }
    };
    return _this;
  }

  return DemoMode;
}(ShapeBase);

module.exports = DemoMode;