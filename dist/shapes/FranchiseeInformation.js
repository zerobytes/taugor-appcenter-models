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

var FranchiseeInformation =
/*#__PURE__*/
function (_ShapeBase) {
  _inherits(FranchiseeInformation, _ShapeBase);

  function FranchiseeInformation() {
    var _this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, FranchiseeInformation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FranchiseeInformation).call(this, data));
    _this.type = '';
    _this.document_number = '';
    _this.company_name = '';
    _this.managing_partners = '';
    _this.name = '';
    _this.site_url = '';
    _this.email = '';
    _this.phone_numbers = '';
    _this.$fieldConfig = {
      type: {
        type: FieldTypes.String,
        defaultValue: 'individual',
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'type').isOfType().notEmpty().notNull().isValid();
        }
      },
      company_name: {
        type: FieldTypes.String,
        defaultValue: null,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'company_name').isOfType().isValid();
        }
      },
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
      site_url: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'site_url').isOfType().website().notEmpty().notNull().isValid();
        }
      },
      email: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'email').isOfType().email().notEmpty().notNull().isValid();
        }
      },
      phone_numbers: {
        type: FieldTypes.ArrayOf(FieldTypes.ShapedAs(shapes.PagarmePhoneNumber)),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'phone_numbers').isOfType().notEmpty().notNull().isValid();
        }
      },
      managing_partners: {
        type: FieldTypes.ArrayOf(FieldTypes.ShapedAs(shapes.FranchiseeManagingPartner)),
        defaultValue: null,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'managing_partners').isOfType().isValid();
        }
      }
    };
    return _this;
  }

  return FranchiseeInformation;
}(ShapeBase);

var _default = FranchiseeInformation;
exports["default"] = _default;