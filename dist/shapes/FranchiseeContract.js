"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var omj = require('@zerobytes/object-model-js');

var User = require('../models/User')["default"];

var FieldTypes = omj.FieldTypes;
var validator = omj.Validator;
var ShapeBase = omj.ShapeBase;

var FranchiseeContract =
/*#__PURE__*/
function (_ShapeBase) {
  _inherits(FranchiseeContract, _ShapeBase);

  function FranchiseeContract() {
    var _this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, FranchiseeContract);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FranchiseeContract).call(this, data));
    _this.$fieldConfig = {
      monthlyMinimum: {
        type: FieldTypes.Float,
        validate: function validate() {
          return true;
        }
      },
      startedAt: {
        type: FieldTypes.Datetime,
        validate: function validate() {
          return true;
        }
      },
      expiresAt: {
        type: FieldTypes.Datetime,
        validate: function validate() {
          return true;
        }
      },
      endedAt: {
        type: FieldTypes.Datetime,
        validate: function validate() {
          return true;
        }
      },
      status: {
        type: FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      history: {
        type: [],
        validate: function validate() {
          return true;
        }
      },
      geographicRegions: {
        type: FieldTypes.Object,
        validate: function validate() {
          return true;
        }
      },
      onlineSalesStatus: {
        type: FieldTypes.String,
        validate: function validate() {
          return true;
        }
      }
    };
    return _this;
  }

  return FranchiseeContract;
}(ShapeBase);

var _default = FranchiseeContract;
exports["default"] = _default;