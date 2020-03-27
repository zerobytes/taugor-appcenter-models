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

var shapes = require('../shapes');

var Franchisee =
/*#__PURE__*/
function (_ModelBase) {
  _inherits(Franchisee, _ModelBase);

  function Franchisee() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Franchisee);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Franchisee).call(this, 'franchisee'));
    _this.$fieldConfig = {
      /**
       * Essa propriedade define a porcentagem referente
       * ao valor a receber que o recebedor pode antecipar
       * junto ao Pagar.me. Por padrão, novos recebedores
       * possuem essa propriedade com valor 0.
       */
      anticipatable_volume_percentage: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'anticipatable_volume_percentage').isOfType().notEmpty().notNull().isValid();
        }
      },

      /**
       * Define se o recebedor pode receber antecipações automáticas.
       */
      automatic_anticipation_enabled: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'automatic_anticipation_enabled').isOfType().notEmpty().notNull().isValid();
        }
      },

      /**
       * Essa propriedade deverá conter o id de uma conta bancária
       * previamente criada. Mais em: Criando uma conta bancária
       */
      bank_account: {
        type: FieldTypes.ShapeAs(shapes.BankAccount),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'bank_account').isOfType().notEmpty().notNull().isValid();
        }
      },

      /**
       * Essa propriedade define em qual dia as transferências
       * automáticas são feitas para o recebedor,
       * dado o transfer_interval escolhido.
       */
      transfer_day: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'transfer_day').isOfType().notEmpty().notNull().isValid();
        }
      },

      /**
       * Essa propriedade define se o recebedor pode receber seus
       * pagamentos automaticamente, no dia e no intervalo que forem definidos.
       * Os valores possíveis são:
       * 1 a 5 se transfer_interval for igual a weekly
       * 1 a 31 se transfer_interval for igual a monthly
       * 0 se transfer_interval for igual daily
       */
      transfer_enabled: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'transfer_enabled').isOfType().notEmpty().notNull().isValid();
        }
      },

      /**
       * Essa propriedade define com qual frequência os valores
       * disponíveis no Pagar.me são transferidos automaticamente
       * para a conta bancária do recebedor. Os valores são:
       * daily, weekly, monthly, que respectivamente significam diário, semanal e mensal.
       */
      transfer_interval: {
        type: FieldTypes.String,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'transfer_interval').isOfType().notEmpty().notNull().isValid();
        }
      },

      /**
       * Campo usado para receber informações cadastrais de um recebedor.
       * Este recebedor pode ser pessoal física ou pessoa jurídica,
       * onde cada um tem formato especifico.
       */
      register_information: {
        type: FieldTypes.ShapedAs(shapes.FranchiseeInformation),
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'geographic_region').isOfType().notEmpty().notNull().isValid();
        }
      },

      /**
       * Objeto com dados adicionais do recebedor.
       * Toda e Qualquer informação que for específica do controle
       * do App Center, não diretamente relacionada com o Pagar.me
       */
      metadata: {
        type: FieldTypes.Object,
        validate: function validate() {
          return validator(_assertThisInitialized(_this), 'metadata').isOfType().isValid();
        }
      }
    };

    _this.$fill(properties);

    return _this;
  }

  return Franchisee;
}(ModelBase);

var _default = Franchisee;
exports["default"] = _default;