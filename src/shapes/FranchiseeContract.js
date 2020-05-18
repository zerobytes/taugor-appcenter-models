const omj = require('@zerobytes/object-model-js');
const User = require('../models/User').default;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const ShapeBase = omj.ShapeBase;

class FranchiseeContract extends ShapeBase {
	constructor(data = null) {
		super(data);

		this.$fieldConfig = {
			fixedMonthlyRoyalities: {
				//Fixo mensal
				type: FieldTypes.Float,
				validate: () => true,
			},
			marketingTax: {
				//Taxa de marketing
				type: FieldTypes.Float,
				validate: () => true,
			},
			marketingDueDate: { type: FieldTypes.Datetime, validate: () => true }, // DATA  VENCIMENTO DO ROYALTY
			variableMonthlyRoayltiesPercent: {
				//Royalties variáveis
				type: FieldTypes.Float,
				validate: () => true,
			},
			royaltiesDueDate: { type: FieldTypes.Datetime, validate: () => true }, // DATA  VENCIMENTO DO ROYALTY
			variableRoyaltiesDueDate: { type: FieldTypes.Datetime, validate: () => true }, // DATA  VENCIMENTO DO ROYALTY
			//daysUntilFirstWarning: RELATED WITH CANCELATION AFTER BLOCKED STATUS
			//daysUntilContractReview: RELATED WITH CANCELATION AFTER BLOCKED STATUS
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
				//active
				//overdue
				//suspended
				//blocked-franchisee-overdue
				//blocked-franchisee-non-compliance
				//blocked-franchisor-decision
				//canceled
				type: FieldTypes.String,
				validate: () => true,
			},
			history: {
				//Need to specify TICKET NUMBER and a REASON
				type: FieldTypes.Array,
				validate: () => true,
			},
			geographicRegions: {
				//
				type: FieldTypes.Object,
				validate: () => true,
			},
			//OCTADESK realizar INTEGRAÇÃO COM API

			isUsingOwnBrand: { type: FieldTypes.Boolean, validate: () => true },
			//Percentual de repasse para o franqueado
			onlineSalesFranchiseePercent: { type: FieldTypes.Float, validate: () => true },
			onlineSalesStatus: {
				//
				type: FieldTypes.String,
				validate: () => true,
			},
		};
	}
}
export default FranchiseeContract;
