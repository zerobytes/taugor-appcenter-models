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

var generateSalt = omj.generateSalt;
var ModelBase = omj.ModelBase;
var FieldTypes = omj.FieldTypes;
var validator = omj.Validator;

var Company = require('./Company')["default"],
    Group = require('./Group')["default"],
    shapes = require('../shapes');
/**
 * @type User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} taxDocument
 * @property {string} provider
 * @property {array<any>} addresses
 * @property {string} birthdate
 * @property {string} user
 * @property {string} email
 * @property {boolean} emailVerified
 * @property {string} password
 * @property {string} salt
 * @property {boolean} superadmin
 * @property {string} phoneCountry
 * @property {string} phoneArea
 * @property {string} phone
 * @property {array<CompanyReference>} companies
 * @property {array<string>} groups
 * @property {string} createdBy
 * @property {date} creationDate
 */


var User =
/*#__PURE__*/
function (_ModelBase) {
  _inherits(User, _ModelBase);

  function User() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, User);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(User).call(this, 'user'));
    _this.$fieldConfig = {
      firstName: {
        type: FieldTypes.String,
        order: true,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'firstName').isOfType().notEmpty().notNull().isValid();
        }
      },
      lastName: {
        type: FieldTypes.String,
        order: true,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'lastName').isOfType().notEmpty().notNull().isValid();
        }
      },
      taxDocument: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'taxDocument').isOfType().isValid();
        }
      },
      provider: {
        type: FieldTypes.String,
        defaultValue: 'email',
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'provider').isOfType().isValid();
        }
      },
      birthdate: {
        type: FieldTypes.Date,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'provider').isOfType().notEmpty().notNull().isValid();
        }
      },
      user: {
        type: FieldTypes.String,
        transform: function transform(model, value) {
          return !!value && typeof value === 'string' ? value.trim().toLowerCase() : value;
        },
        minLength: 3,
        order: true,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'user').isOfType().notEmpty().notNull().minLength().isValid();
        }
      },
      email: {
        type: FieldTypes.String,
        transform: function transform(model, value) {
          return !!value && typeof value === 'string' ? value.trim().toLowerCase() : value;
        },
        minLength: 5,
        order: true,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'email').isOfType().notEmpty().notNull().minLength().email().isValid();
        }
      },
      emailVerified: {
        type: FieldTypes.Boolean,
        defaultValue: false,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'emailVerified').isOfType().isValid();
        }
      },
      password: {
        type: FieldTypes.String,
        "protected": true,
        // transform: (model, value) => pwdHash(value, model.salt),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'password').isOfType().notEmpty().notNull().isValid();
        }
      },
      salt: {
        //TODO: implement hidden field function
        type: FieldTypes.String,
        //protected: true,
        hidden: true,
        defaultValue: generateSalt(10),
        // transform: (model, value) => {},
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'salt').isOfType().isValid();
        }
      },
      superadmin: {
        type: FieldTypes.Boolean,
        "protected": true,
        defaultValue: false,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'superadmin').isOfType().isValid();
        }
      },
      phoneCountry: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'phoneCountry').isOfType().isValid();
        }
      },
      phoneArea: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'phoneArea').isOfType().isValid();
        }
      },
      phone: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'phone').isOfType().isValid();
        }
      },
      addresses: {
        type: FieldTypes.ArrayOf(FieldTypes.ShapedAs(shapes.locationAddress)),
        defaultValue: [],
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'addresses').isOfType().isValid();
        }
      },
      companies: {
        type: FieldTypes.ArrayOf(FieldTypes.IdOf(Company)),
        defaultValue: [],
        // transform: (model, value) => value.map((item) => new CompanyReference(item)),
        validate: function validate() {
          return true;
        } // validator(this, 'companies')
        // 	.isOfType()
        // 	.isValid()

      },
      groups: {
        type: FieldTypes.ArrayOf(FieldTypes.IdOf(Group)),
        defaultValue: [],
        validate: function validate() {
          return true;
        } // validator(this, 'groups')
        // 	.isOfType()
        // 	.isValid()

      }
    };

    _this.$fill(properties);

    return _this;
  }

  return User;
}(ModelBase);

var _default = User;
exports["default"] = _default;