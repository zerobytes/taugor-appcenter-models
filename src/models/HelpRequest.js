const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

class HelpRequest extends ModelBase {
	constructor(properties = null) {
		super('helpRequest');

		this.$fieldConfig = {
			reason: {
				type: FieldTypes.String,
				validate: () => true,
			},
			opportunity: {
				type: FieldTypes.Object,
				validate: () => true,
			},
			customer: {
				type: FieldTypes.String,
				validate: () => true,
			},
			reason: {
				type: FieldTypes.String,
				validate: () => true,
			},
			responsible: {
				type: FieldTypes.Object,
				validate: () => true,
			},
			lastMessage: {
				type: FieldTypes.Object,
				validate: () => true,
			},
			finished: {
				type: FieldTypes.Boolean,
				validate: () => true,
			},
			conversation: {
				type: FieldTypes.String,
				validate: () => true,
			},
		};

		this.$fill(properties);
	}
}

export default HelpRequest;
