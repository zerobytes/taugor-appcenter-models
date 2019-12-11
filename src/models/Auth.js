const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

const User = require('./User').default;
const Company = require('./Company').default;
const App = require('./App').default;

/**
 * @type Auth
 * @property {string} userId
 * @property {string} companyid
 * @property {string} fromApp
 * @property {string} createdBy
 * @property {date} creationDate
 */
class Auth extends ModelBase {
	constructor(properties = null) {
		super('auth');

		this.$fieldConfig = {
			userId: {
				type: FieldTypes.IdOf(User),
				validate: () =>
					validator(this, 'userId')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			companyId: {
				type: FieldTypes.IdOf(Company),
				validate: () =>
					validator(this, 'companyId')
						.notNull()
						.notEmpty()
						.isOfType()
						.isValid()
			},
			fromApp: {
				type: FieldTypes.IdOf(App),
				validate: () =>
					validator(this, 'fromApp')
						.notNull()
						.notEmpty()
						.isOfType()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

exports.default = Auth;
