const omj = require('@zerobytes/object-model-js');
const generateSalt = omj.generateSalt;
const pwdHash = omj.pwdHash;
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

const Company = require('./Company'),
	Group = require('./Group').default,
	shapes = require('../shapes');

/**
 * @type User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} provider
 * @property {array<any>} addresses
 * @property {string} birthdate
 * @property {string} user
 * @property {string} email
 * @property {boolean} emailVerified
 * @property {string} password
 * @property {string} salt
 * @property {string} taxDocument
 * @property {string} phoneCountry
 * @property {string} phoneArea
 * @property {string} phone
 * @property {array<CompanyReference>} companies
 * @property {array<string>} groups
 * @property {string} createdBy
 * @property {date} creationDate
 */
class User extends ModelBase {
	constructor(properties = null) {
		super('user');

		this.$fieldConfig = {
			firstName: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'firstName')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			lastName: {
				type: FieldTypes.String,
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
				validate: () =>
					validator(this, 'provider')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			addresses: {
				type: FieldTypes.ArrayOf(FieldTypes.ShapedAs(shapes.locationAddress)),
				validate: () =>
					validator(this, 'addresses')
						.isOfType()
						.notNull()
						.notEmpty()
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
				validate: () =>
					validator(this, 'user')
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
						.notEmpty()
						.notNull()
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
				transform: (model, value) => pwdHash(value, model.salt),
				validate: () =>
					validator(this, 'email')
						.isOfType()
						.notEmpty()
						.notNull()
						.email()
						.isValid()
			},
			salt: {
				//TODO: implement hidden field function
				type: FieldTypes.String,
				//protected: true,
				hidden: true,
				defaultValue: generateSalt(10),
				// transform: (model, value) => {},
				validate: () =>
					validator(this, 'email')
						.isOfType()
						.notEmpty()
						.notNull()
						.email()
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
						.notEmpty()
						.notNull()
						.isValid()
			},
			companies: {
				type: FieldTypes.ArrayOf(FieldTypes.IdOf(Company)),
				// transform: (model, value) => value.map((item) => new CompanyReference(item)),
				validate: () =>
					validator(this, 'companies')
						.isOfType()
						.isValid()
			},
			groups: {
				type: FieldTypes.ArrayOf(FieldTypes.IdOf(Group)),
				validate: () =>
					validator(this, 'groups')
						.isOfType()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

exports.default = User;
