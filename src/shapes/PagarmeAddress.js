const omj = require('@zerobytes/object-model-js');

const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const ShapeBase = omj.ShapeBase;

class PagarmeAddress extends ShapeBase {
	constructor(data = null) {
		super(data);

		this.street = '';
		this.complementary = '';
		this.street_number = '';
		this.neighborhood = '';
		this.city = '';
		this.state = '';
		this.zipcode = '';
		this.country = '';

		this.$fieldConfig = {
			street: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'street')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			complementary: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'complementary')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			street_number: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'street_number')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			neighborhood: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'neighborhood')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			city: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'city')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			state: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'state')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			zipcode: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'zipcode')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			country: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'country')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			}
		};
	}
}

module.exports = PagarmeAddress;
