const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

const User = require('./User').default;
const Permission = require('./Permission').default;
const Company = require('./Company').default;

/**
 * @type Group
 * @property {string} name
 * @property {string} description
 * @property {array<string>} tag
 * @property {array<UserId>} members
 * @property {array<PermissionReference>} permissions
 * @property {array<CompanyId>} company
 * @property {string} createdBy
 * @property {date} creationDate
 */
class Group extends ModelBase {
	constructor(properties = null) {
		super('group');

		this.$fieldConfig = {
			name: {
				type: FieldTypes.String,
				order: true,
				validate: () => validator(this, 'name').isOfType().notEmpty().notNull().isValid(),
			},
			description: {
				type: FieldTypes.String,
				validate: () => validator(this, 'description').isOfType().isValid(),
			},
			tag: {
				type: FieldTypes.ArrayOf(FieldTypes.String),
				defaultValue: [],
				validate: () => true,
			},
			members: {
				type: FieldTypes.ArrayOf(FieldTypes.IdOf(User)),
				defaultValue: [],
				validate: () => true,
			},
			permissions: {
				type: FieldTypes.ArrayOf(FieldTypes.IdOf(Permission)),
				defaultValue: [],
				validate: () => true,
			},
			isSalesmanGroup: {
				type: FieldTypes.Boolean,
				validate: () => true,
			},
			company: {
				type: FieldTypes.IdOf(Company),
				validate: () => validator(this, 'company').isOfType().isValid(),
			},
		};

		this.$fill(properties);
	}
}

export default Group;
