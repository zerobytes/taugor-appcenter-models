"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var omj = require('@zerobytes/object-model-js');

var FieldTypes = omj.FieldTypes;
var validator = omj.Validator;
var ShapeBase = omj.ShapeBase;

var BankAccount =
/*#__PURE__*/
function (_ShapeBase) {
  _inherits(BankAccount, _ShapeBase);

  function BankAccount() {
    var _this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, BankAccount);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BankAccount).call(this, data));
    _this.bank_code = '';
    _this.agencia = '';
    _this.agencia_dv = '';
    _this.conta = '';
    _this.type = '';
    _this.conta_dv = '';
    _this.document_number = '';
    _this.legal_name = '';
    _this.$fieldConfig = {
      bank_code: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'bank_code').isOfType().notEmpty().notNull().isValid();
        }
      },
      agencia: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'agencia').isOfType().notEmpty().notNull().isValid();
        }
      },
      agencia_dv: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'agencia_dv').isOfType().notEmpty().notNull().isValid();
        }
      },
      conta: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'conta').isOfType().notEmpty().notNull().isValid();
        }
      },
      type: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'type').isOfType().notEmpty().notNull().isValid();
        }
      },
      conta_dv: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'conta_dv').isOfType().notEmpty().notNull().isValid();
        }
      },
      document_number: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'name').document_number().notEmpty().notNull().isValid();
        }
      },
      legal_name: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'legal_name').isOfType().notEmpty().notNull().isValid();
        }
      }
    };
    return _this;
  }

  return BankAccount;
}(ShapeBase);

module.exports = BankAccount;