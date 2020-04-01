const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

class License extends ModelBase {
	constructor(properties = null) {
		super('license');

		this.$fieldConfig = {
			app: {
				type: FieldTypes.String,
				minLength: 1,
				validate: () =>
					validator(this, 'app')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			company: {
				type: FieldTypes.String,
				minLength: 1,
				validate: () =>
					validator(this, 'company')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			amount: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'amount')
						.isOfType()
						.isValid()
			},
			type: {
				type: FieldTypes.String,

				validate: () =>
					validator(this, 'type')
						.isOfType()
						.isValid()
			},
			planId: {
				type: FieldTypes.String,

				validate: () =>
					validator(this, 'planId')
						.isOfType()
						.isValid()
			},
			subscriptionId: {
				type: FieldTypes.String,

				validate: () =>
					validator(this, 'subscriptionId')
						.isOfType()
						.isValid()
			},
			status: {
				type: FieldTypes.String,

				validate: () =>
					validator(this, 'status')
						.isOfType()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

export default License;
