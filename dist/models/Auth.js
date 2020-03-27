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

var User = require('./User')["default"];

var App = require('./App')["default"];
/**
 * @type Auth
 * @property {string} token
 * @property {string} successorToken
 * @property {boolean} expired
 * @property {string} userId
 * @property {string} fromApp
 * @property {string} createdBy
 * @property {date} creationDate
 */


var Auth =
/*#__PURE__*/
function (_ModelBase) {
  _inherits(Auth, _ModelBase);

  function Auth() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Auth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Auth).call(this, 'auth'));
    _this.$fieldConfig = {
      token: {
        type: FieldTypes.String,
        minLength: 20,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'token').isOfType().minLength().notEmpty().notNull().isValid();
        }
      },
      successorToken: {
        type: FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      expired: {
        type: FieldTypes.Boolean,
        defaultValue: false,
        validate: function validate() {
          return true;
        }
      },
      provider: {
        type: FieldTypes.String,
        defaultValue: 'api',
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'provider').isOfType().notEmpty().notNull().isValid();
        }
      },
      userId: {
        type: FieldTypes.IdOf(User),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'userId').isOfType().minLength().notEmpty().notNull().isValid();
        }
      },
      fromApp: {
        type: FieldTypes.IdOf(App),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'fromApp').notNull().notEmpty().isOfType().isValid();
        }
      }
    };

    _this.$fill(properties);

    return _this;
  }

  return Auth;
}(ModelBase);

var _default = Auth;
exports["default"] = _default;