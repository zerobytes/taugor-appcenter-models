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

var Group = require('./Group')["default"],
    App = require('./App')["default"],
    User = require('./User')["default"];

var shapes = require('../shapes');
/**
 * @type Company
 * @property {string} name
 * @property {string} code
 * @property {string} description
 * @property {string} identificationNumber
 * @property {string} address
 * @property {string} primaryPhone
 * @property {string} secondaryPhone
 * @property {string} primaryEmail
 * @property {string} secondaryEmail
 * @property {string} website
 * @property {string} owner
 * @property {array}  contacts
 * @property {object} billing
 * @property {string} parent
 * @property {array} groups
 * @property {array} apps
 * @property {string} createdBy
 * @property {date} creationDate
 */


var Company =
/*#__PURE__*/
function (_ModelBase) {
  _inherits(Company, _ModelBase);

  function Company() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Company);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Company).call(this, 'company'));
    _this.$fieldConfig = {
      identificationNumber: {
        type: FieldTypes.String,
        minLengh: 10,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'identificationNumber').isOfType().notEmpty().notNull().minLength().isValid();
        }
      },
      name: {
        type: FieldTypes.String,
        order: true,
        minLength: 3,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'name').isOfType().minLength().notEmpty().notNull().isValid();
        }
      },
      fantasyName: {
        type: FieldTypes.String,
        order: true,
        minLength: 3,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'fantasyName').isOfType().minLength().isValid();
        }
      },
      code: {
        type: FieldTypes.String,
        minLength: 1,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'code').isOfType().minLength().notEmpty().notNull().isValid();
        }
      },
      description: {
        type: FieldTypes.String,
        minLength: 10,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'description').isOfType().minLength().isValid();
        }
      },
      address: {
        type: FieldTypes.String,
        minLengh: 10,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'address').isOfType().notEmpty().notNull().minLength().isValid();
        }
      },
      primaryPhone: {
        type: FieldTypes.String,
        minLength: 8,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'primaryPhone').isOfType().notEmpty().notNull().minLength().isValid();
        }
      },
      secondaryPhone: {
        type: FieldTypes.String,
        minLength: 8,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'secondaryPhone').isOfType().minLength().isValid();
        }
      },
      primaryEmail: {
        type: FieldTypes.String,
        transform: function transform(model, value) {
          return !!value && typeof value === 'string' ? value.trim().toLowerCase() : value;
        },
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'primaryEmail').isOfType().email().notEmpty().notNull().minLength().isValid();
        }
      },
      secondaryEmail: {
        type: FieldTypes.String,
        transform: function transform(model, value) {
          return !!value && typeof value === 'string' ? value.trim().toLowerCase() : value;
        },
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'secondaryEmail').isOfType().email().isValid();
        }
      },
      website: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'website').isOfType().website().isValid();
        }
      },
      paymentOk: {
        type: FieldTypes.Boolean,
        defaultValue: false,
        validate: function validate() {
          return true;
        }
      },
      demoMode: {
        type: FieldTypes.ShapedAs(shapes.demoMode),
        defaultValue: new shapes.demoMode({
          active: false
        }),
        validate: function validate() {
          return true;
        }
      },
      owner: {
        type: FieldTypes.IdOf(User),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'owner').isOfType().isValid();
        }
      },
      contacts: {
        type: FieldTypes.ArrayOf(FieldTypes.ShapedAs(shapes.contactPerson)),
        defaultValue: [],
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'contacts').isOfType().isValid();
        }
      },
      billing: {
        type: FieldTypes.ShapedAs(shapes.billing),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'billing').isOfType().isValid();
        }
      },
      parent: {
        type: FieldTypes.IdOf(Company),
        validate: function validate() {
          return true;
        }
      },
      groups: {
        type: FieldTypes.ArrayOf(FieldTypes.IdOf(Group)),
        defaultValue: [],
        validate: function validate() {
          return true;
        }
      },
      apps: {
        type: FieldTypes.ArrayOf(FieldTypes.IdOf(App)),
        defaultValue: [],
        validate: function validate() {
          return true;
        }
      },
      receiverId: {
        type: FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      customerId: {
        type: FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      customerObject: {
        type: FieldTypes.Object,
        validate: function validate() {
          return true;
        }
      },
      isSelfEmployed: {
        type: FieldTypes.Boolean,
        validate: function validate() {
          return true;
        }
      },
      isIncludedInOnlineSales: {
        type: FieldTypes.Boolean,
        validate: function validate() {
          return true;
        }
      },
      isFranchiseeContractBlocked: {
        type: FieldTypes.Boolean,
        validate: function validate() {
          return true;
        }
      },
      geographicRegions: {
        type: FieldTypes.Object,
        validate: function validate() {
          return true;
        }
      }
    };

    _this.$fill(properties);

    return _this;
  }

  return Company;
}(ModelBase);

var _default = Company;
exports["default"] = _default;