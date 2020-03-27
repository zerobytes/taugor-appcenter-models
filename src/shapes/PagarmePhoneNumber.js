const omj = require('@zerobytes/object-model-js');

const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const ShapeBase = omj.ShapeBase;

class PagarmePhoneNumber extends ShapeBase {
	constructor(data = null) {
		super(data);

		this.ddd = '';
		this.number = '';
		this.type = '';

		this.$fieldConfig = {
			ddd: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'ddd')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			number: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'number')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			type: {
				type: FieldTypes.String,
				defaultValue: 'mobile',
				validate: () =>
					validator(this, 'type')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			}
		};
	}
}

module.exports = PagarmePhoneNumber;
