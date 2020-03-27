const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const shapes = require('../shapes');
class Franchisee extends ModelBase {
	constructor(properties = null) {
		super('franchisee');

		this.$fieldConfig = {
			/**
			 * Essa propriedade define a porcentagem referente
			 * ao valor a receber que o recebedor pode antecipar
			 * junto ao Pagar.me. Por padrão, novos recebedores
			 * possuem essa propriedade com valor 0.
			 */
			anticipatable_volume_percentage: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'anticipatable_volume_percentage')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			/**
			 * Define se o recebedor pode receber antecipações automáticas.
			 */
			automatic_anticipation_enabled: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'automatic_anticipation_enabled')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			/**
			 * Essa propriedade deverá conter o id de uma conta bancária
			 * previamente criada. Mais em: Criando uma conta bancária
			 */
			bank_account: {
				type: FieldTypes.ShapeAs(shapes.BankAccount),
				validate: () =>
					validator(this, 'bank_account')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			/**
			 * Essa propriedade define em qual dia as transferências
			 * automáticas são feitas para o recebedor,
			 * dado o transfer_interval escolhido.
			 */
			transfer_day: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'transfer_day')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
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
				validate: () =>
					validator(this, 'transfer_enabled')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			/**
			 * Essa propriedade define com qual frequência os valores
			 * disponíveis no Pagar.me são transferidos automaticamente
			 * para a conta bancária do recebedor. Os valores são:
			 * daily, weekly, monthly, que respectivamente significam diário, semanal e mensal.
			 */
			transfer_interval: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'transfer_interval')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			/**
			 * Campo usado para receber informações cadastrais de um recebedor.
			 * Este recebedor pode ser pessoal física ou pessoa jurídica,
			 * onde cada um tem formato especifico.
			 */
			register_information: {
				type: FieldTypes.ShapedAs(shapes.FranchiseeInformation),
				validate: () =>
					validator(this, 'geographic_region')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			/**
			 * Objeto com dados adicionais do recebedor.
			 * Toda e Qualquer informação que for específica do controle
			 * do App Center, não diretamente relacionada com o Pagar.me
			 */
			metadata: {
				type: FieldTypes.Object,
				validate: () =>
					validator(this, 'metadata')
						.isOfType()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

export default Franchisee;
