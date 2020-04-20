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
				type: FieldTypes.Integer,
				validate: () =>
					validator(this, 'amount')
						.isOfType()
						.isValid()
			},
			demoStartedAt: {
				type: FieldTypes.Datetime,
				validate: () =>
					validator(this, 'demoStartedAt')
						.isOfType()
						.isValid()
			},
			demoExpiresAt: {
				type: FieldTypes.Datetime,
				validate: () =>
					validator(this, 'demoExpiresAt')
						.isOfType()
						.isValid()
			},
			used: {
				type: FieldTypes.Integer,
				validate: () =>
					validator(this, 'used')
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
			resetPeriodicity: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'resetPeriodicity')
						.isOfType()
						.isValid()
			},
			status: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'status')
						.isOfType()
						.isValid()
			},
			history: {
				type: FieldTypes.Array,
				validate: () =>
					validator(this, 'history')
						.isOfType()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

export default License;
