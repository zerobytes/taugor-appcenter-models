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

var FieldTypes = omj.FieldTypes;
var validator = omj.Validator;
var ShapeBase = omj.ShapeBase;

var PagarmeAddress =
/*#__PURE__*/
function (_ShapeBase) {
  _inherits(PagarmeAddress, _ShapeBase);

  function PagarmeAddress() {
    var _this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, PagarmeAddress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PagarmeAddress).call(this, data));
    _this.street = '';
    _this.complementary = '';
    _this.street_number = '';
    _this.neighborhood = '';
    _this.city = '';
    _this.state = '';
    _this.zipcode = '';
    _this.country = '';
    _this.$fieldConfig = {
      street: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'street').isOfType().notEmpty().notNull().isValid();
        }
      },
      complementary: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'complementary').isOfType().notEmpty().notNull().isValid();
        }
      },
      street_number: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'street_number').isOfType().notEmpty().notNull().isValid();
        }
      },
      neighborhood: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'neighborhood').isOfType().notEmpty().notNull().isValid();
        }
      },
      city: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'city').isOfType().notEmpty().notNull().isValid();
        }
      },
      state: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'state').isOfType().notEmpty().notNull().isValid();
        }
      },
      zipcode: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'zipcode').isOfType().notEmpty().notNull().isValid();
        }
      },
      country: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'country').isOfType().notEmpty().notNull().isValid();
        }
      }
    };
    return _this;
  }

  return PagarmeAddress;
}(ShapeBase);

var _default = PagarmeAddress;
exports["default"] = _default;