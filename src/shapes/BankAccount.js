const omj = require('@zerobytes/object-model-js');

const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const ShapeBase = omj.ShapeBase;

class BankAccount extends ShapeBase {
	constructor(data = null) {
		super(data);

		this.bank_code = '';
		this.agencia = '';
		this.agencia_dv = '';
		this.conta = '';
		this.type = '';
		this.conta_dv = '';
		this.document_number = '';
		this.legal_name = '';

		this.$fieldConfig = {
			bank_code: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'bank_code')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			agencia: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'agencia')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			agencia_dv: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'agencia_dv')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			conta: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'conta')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			type: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'type')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			conta_dv: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'conta_dv')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			document_number: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'name')
						.document_number()
						.notEmpty()
						.notNull()
						.isValid()
			},
			legal_name: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'legal_name')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			}
		};
	}
}

export default BankAccount;
