const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

const App = require('./App').default,
	Company = require('./Company').default;

/**
 * @type Billing
 * @property {string} app
 * @property {string} company
 * @property {string} info
 * @property {string} createdBy
 * @property {date} creationDate
 */
class Billing extends ModelBase {
	constructor(properties = null) {
		super('billing');

		this.$fieldConfig = {
			app: {
				type: FieldTypes.IdOf(App),
				minLength: 1,
				validate: () =>
					validator(this, 'app')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			company: {
				type: FieldTypes.IdOf(Company),
				minLength: 1,
				validate: () =>
					validator(this, 'company')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			info: {
				type: FieldTypes.Object,
				defaultValue: {},
				validate: () =>
					validator(this, 'info')
						.isOfType()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

export default Billing;
