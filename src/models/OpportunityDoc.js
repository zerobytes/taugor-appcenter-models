const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

class OpportunityDoc extends ModelBase {
	constructor(properties = null) {
		super('opportunityDoc');

		this.$fieldConfig = {
			company: {
				type: FieldTypes.String,
				validate: () => true,
			},
			type: {
				type: FieldTypes.String,
				validate: () => true,
			},
			opportunity: {
				type: FieldTypes.String,
				validate: () => true,
			},
			document: {
				type: FieldTypes.Object,
				validate: () => true,
			},
		};

		this.$fill(properties);
	}
}

export default OpportunityDoc;
