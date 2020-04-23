const omj = require('@zerobytes/object-model-js');
const User = require('../models/User').default;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const ShapeBase = omj.ShapeBase;

class FranchiseeContract extends ShapeBase {
	constructor(data = null) {
		super(data);

		this.$fieldConfig = {
			monthlyMinimum: {
				type: FieldTypes.Float,
				validate: () => true,
			},
			startedAt: {
				type: FieldTypes.Datetime,
				validate: () => true,
			},
			expiresAt: {
				type: FieldTypes.Datetime,
				validate: () => true,
			},
			endedAt: {
				type: FieldTypes.Datetime,
				validate: () => true,
			},
			status: {
				type: FieldTypes.String,
				validate: () => true,
			},
			history: {
				type: [],
				validate: () => true,
			},
			geographicRegions: {
				type: FieldTypes.Object,
				validate: () => true,
			},
			onlineSalesStatus: {
				type: FieldTypes.String,
				validate: () => true,
			},
		};
	}
}
export default FranchiseeContract;
