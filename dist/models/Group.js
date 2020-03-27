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

var User = require('./User')["default"];

var Permission = require('./Permission')["default"];

var Company = require('./Company')["default"];
/**
 * @type Group
 * @property {string} name
 * @property {string} description
 * @property {array<string>} tag
 * @property {array<UserId>} members
 * @property {array<PermissionReference>} permissions
 * @property {array<CompanyId>} company
 * @property {string} createdBy
 * @property {date} creationDate
 */


var Group =
/*#__PURE__*/
function (_ModelBase) {
  _inherits(Group, _ModelBase);

  function Group() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Group);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Group).call(this, 'group'));
    _this.$fieldConfig = {
      name: {
        type: FieldTypes.String,
        order: true,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'name').isOfType().notEmpty().notNull().isValid();
        }
      },
      description: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'description').isOfType().isValid();
        }
      },
      tag: {
        type: FieldTypes.ArrayOf(FieldTypes.String),
        defaultValue: [],
        validate: function validate() {
          return true;
        } // validator(this, 'tag')
        // 	.isOfType()
        // 	.notEmpty()
        // 	.notNull()
        // 	.isValid()

      },
      members: {
        type: FieldTypes.ArrayOf(FieldTypes.IdOf(User)),
        defaultValue: [],
        validate: function validate() {
          return true;
        } // validator(this, 'members')
        // 	.isOfType()
        // 	.isValid()

      },
      permissions: {
        type: FieldTypes.ArrayOf(FieldTypes.IdOf(Permission)),
        //TODO: implement final saving format
        // transform: (model, value) => value.map((item) => new PermissionReference(item)),
        defaultValue: [],
        validate: function validate() {
          return true;
        } // validator(this, 'permissions')
        // 	.isOfType()
        // 	.isValid()

      },
      company: {
        type: FieldTypes.IdOf(Company),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'company').isOfType().isValid();
        }
      }
    };

    _this.$fill(properties);

    return _this;
  }

  return Group;
}(ModelBase);

exports["default"] = Group;