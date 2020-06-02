const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

const Group = require('./Group').default,
	App = require('./App').default,
	User = require('./User').default;

const shapes = require('../shapes');

class Campaign extends ModelBase {
	constructor(properties = null) {
		super('Campaign');

		this.$fieldConfig = {
			name: {
				type: FieldTypes.String,
				validate: () => true,
			},
			description: {
				type: FieldTypes.String,
				validate: () => true,
			},
			origin: {
				type: FieldTypes.String,
				validate: () => true,
			},
			targetAudience: {
				type: FieldTypes.Object,
				validate: () => true,
			},
			investment: {
				type: FieldTypes.String,
				validate: () => true,
			},
			startedAt: {
				type: FieldTypes.String,
				validate: () => true,
			},
			executionHistory: {
				type: FieldTypes.Array,
				validate: () => true,
			},
			leads: {
				type: FieldTypes.String,
				validate: () => true,
			},
			meta: {
				type: FieldTypes.Object,
				validate: () => true,
			},
		};

		this.$fill(properties);
	}
}

export default Campaign;
