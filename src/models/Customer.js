const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const shapes = require('../shapes');
class Customer extends ModelBase {
	constructor(properties = null) {
		super('customer');

		this.document_number = '';
		this.name = '';
		this.email = '';
		this.born_at = '';
		this.gender = '';
		this.address = '';
		this.phone = '';

		this.$fieldConfig = {
			document_number: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'document_number')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			name: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'name')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			email: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'email')
						.isOfType()
						.email()
						.notEmpty()
						.notNull()
						.isValid()
			},
			/**
			 * Data de nascimento no formato DDMMYYYY
			 */
			born_at: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'born_at')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			gender: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'gender')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			address: {
				type: FieldTypes.ShapedAs(shapes.PagarmeAddress),
				validate: () =>
					validator(this, 'address')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			phone: {
				type: FieldTypes.ShapedAs(shapes.PagarmePhoneNumber),
				validate: () =>
					validator(this, 'phone')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

export default Customer;
