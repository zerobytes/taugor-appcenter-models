const omj = require('@zerobytes/object-model-js');
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const ShapeBase = omj.ShapeBase;

/**
 * @type DemoMode
 * @property {FieldTypes.String} account
 * @property {FieldTypes.String} agency
 * @property {FieldTypes.String} bank
 */
class DemoMode extends ShapeBase {
	constructor(data = null) {
		super(data);
		this.active = false;
		this.expiresOn = Date.now();
		this.sponsor = '';
		this.$fieldConfig = {
			active: {
				type: FieldTypes.Boolean,
				defaultValue: false,
				validate: () => true
			},
			expiresOn: {
				type: FieldTypes.Datetime,
				validate: () =>
					validator(this, 'expiresOn')
						.isOfType()
						.isValid()
			},
			sponsor: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'sponsor')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			}
		};
	}
}
module.exports = DemoMode;
