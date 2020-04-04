const omj = require('@zerobytes/object-model-js');
const generateSalt = omj.generateSalt;
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

const Company = require('./Company').default,
	Group = require('./Group').default,
	shapes = require('../shapes');

class User extends ModelBase {
	constructor(properties = null) {
		super('user');

		this.$fieldConfig = {
			firstName: {
				type: FieldTypes.String,
				order: true,
				validate: () =>
					validator(this, 'firstName')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			lastName: {
				type: FieldTypes.String,
				order: true,
				validate: () =>
					validator(this, 'lastName')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			taxDocument: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'taxDocument')
						.isOfType()
						.isValid()
			},
			provider: {
				type: FieldTypes.String,
				defaultValue: 'email',
				validate: () =>
					validator(this, 'provider')
						.isOfType()
						.isValid()
			},
			birthdate: {
				type: FieldTypes.Date,
				validate: () =>
					validator(this, 'provider')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			user: {
				type: FieldTypes.String,
				transform: (model, value) =>
					!!value && typeof value === 'string' ? value.trim().toLowerCase() : value,
				minLength: 3,
				order: true,
				validate: () =>
					validator(this, 'user')
						.isOfType()
						.notEmpty()
						.notNull()
						.minLength()
						.isValid()
			},
			customer: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'user')
						.isOfType()
						.notEmpty()
						.notNull()
						.minLength()
						.isValid()
			},
			email: {
				type: FieldTypes.String,
				transform: (model, value) =>
					!!value && typeof value === 'string' ? value.trim().toLowerCase() : value,
				minLength: 5,
				order: true,
				validate: () =>
					validator(this, 'email')
						.isOfType()
						.notEmpty()
						.notNull()
						.minLength()
						.email()
						.isValid()
			},
			emailVerified: {
				type: FieldTypes.Boolean,
				defaultValue: false,
				validate: () =>
					validator(this, 'emailVerified')
						.isOfType()
						.isValid()
			},
			password: {
				type: FieldTypes.String,
				protected: true,
				validate: () =>
					validator(this, 'password')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			salt: {
				type: FieldTypes.String,
				hidden: true,
				defaultValue: generateSalt(10),
				validate: () =>
					validator(this, 'salt')
						.isOfType()
						.isValid()
			},
			superadmin: {
				type: FieldTypes.Boolean,
				protected: true,
				defaultValue: false,
				validate: () =>
					validator(this, 'superadmin')
						.isOfType()
						.isValid()
			},
			companyadmin: {
				type: FieldTypes.Boolean,
				protected: true,
				defaultValue: false,
				validate: () =>
					validator(this, 'companyadmin')
						.isOfType()
						.isValid()
			},
			phoneCountry: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'phoneCountry')
						.isOfType()
						.isValid()
			},
			phoneArea: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'phoneArea')
						.isOfType()
						.isValid()
			},
			phone: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'phone')
						.isOfType()
						.isValid()
			},
			addresses: {
				type: FieldTypes.ArrayOf(FieldTypes.ShapedAs(shapes.locationAddress)),
				defaultValue: [],
				validate: () =>
					validator(this, 'addresses')
						.isOfType()
						.isValid()
			},
			companies: {
				type: FieldTypes.ArrayOf(FieldTypes.IdOf(Company)),
				defaultValue: [],
				validate: () => true
			},
			groups: {
				type: FieldTypes.ArrayOf(FieldTypes.IdOf(Group)),
				defaultValue: [],
				validate: () => true
			},
			applications: {
				type: FieldTypes.Object,
				defaultValue: {},
				validate: () => true
			},
			active: {
				type: FieldTypes.ArrayOf(FieldTypes.IdOf(Company)),
				validate: () => true
			}
		};

		this.$fill(properties);
	}
}

export default User;
