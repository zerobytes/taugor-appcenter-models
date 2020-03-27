"use strict";

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

var shapes = require('../shapes');

var Customer =
/*#__PURE__*/
function (_ModelBase) {
  _inherits(Customer, _ModelBase);

  function Customer() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Customer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Customer).call(this, 'customer'));
    _this.document_number = '';
    _this.name = '';
    _this.email = '';
    _this.born_at = '';
    _this.gender = '';
    _this.address = '';
    _this.phone = '';
    _this.$fieldConfig = {
      document_number: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'document_number').isOfType().notEmpty().notNull().isValid();
        }
      },
      name: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'name').isOfType().notEmpty().notNull().isValid();
        }
      },
      email: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'email').isOfType().email().notEmpty().notNull().isValid();
        }
      },

      /**
       * Data de nascimento no formato DDMMYYYY
       */
      born_at: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'born_at').isOfType().notEmpty().notNull().isValid();
        }
      },
      gender: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'gender').isOfType().notEmpty().notNull().isValid();
        }
      },
      address: {
        type: FieldTypes.ShapedAs(shapes.PagarmeAddress),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'address').isOfType().notEmpty().notNull().isValid();
        }
      },
      phone: {
        type: FieldTypes.ShapedAs(shapes.PagarmePhoneNumber),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'phone').isOfType().notEmpty().notNull().isValid();
        }
      }
    };

    _this.$fill(properties);

    return _this;
  }

  return Customer;
}(ModelBase);

exports["default"] = Customer;