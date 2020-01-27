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
		const date = new Date(Date.now());
		date.setDate(date.getDate() + 7);

		this.active = false;
		this.expiresOn = date;
		this.sponsor = '';
		this.$fieldConfig = {
			active: {
				type: FieldTypes.Boolean,
				defaultValue: false,
				validate: () => true
			},
			expiresOn: {
				type: FieldTypes.Datetime,
				// defaultValue: (new Date()).setDate()
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
