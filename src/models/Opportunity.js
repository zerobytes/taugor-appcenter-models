const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

class Opportunity extends ModelBase {
	constructor(properties = null) {
		super('opportunity');

		this.$fieldConfig = {
			incremental: {
				type: FieldTypes.String,
				validate: () => true,
			},
			company: {
				type: FieldTypes.String,
				validate: () => true,
			},
			name: {
				type: FieldTypes.String,
				validate: () => true,
			},
			description: {
				type: FieldTypes.String,
				validate: () => true,
			},
			conversation: {
				type: FieldTypes.Array,
				validate: () => true,
			},
			products: {
				type: FieldTypes.Object,
				validate: () => true,
			},
			priority: {
				type: FieldTypes.String,
				validate: () => true,
			},
			businessValue: {
				type: FieldTypes.String,
				validate: () => true,
			},
			status: {
				type: FieldTypes.String,
				validate: () => true,
			},
			contactOrigin: {
				type: FieldTypes.String,
				validate: () => true,
			},
			prospect: {
				type: FieldTypes.Object,
				validate: () => true,
			},
			identificationNumber: {
				type: FieldTypes.String,
				validate: () => true,
			},
			customer: {
				type: FieldTypes.String,
				validate: () => true,
			},
			expectationLevel: {
				type: FieldTypes.String,
				validate: () => true,
			},
		};

		this.$fill(properties);
	}
}

export default Opportunity;
