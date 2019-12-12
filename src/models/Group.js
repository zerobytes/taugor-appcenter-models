const omj = require('@zerobytes/object-model-js');
const ModelBase = omj.ModelBase;
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;

const User = require('./User').default;
const Permission = require('./Permission').default;
const PermissionReference = require('../shapes').permissionReference;
const CompanyReference = require('../shapes').companyReference;

/**
 * @type Group
 * @property {string} name
 * @property {string} description
 * @property {array<string>} tag
 * @property {array<User>} members
 * @property {array<PermissionReference>} permissions
 * @property {CompanyReference} company
 * @property {string} createdBy
 * @property {date} creationDate
 */
class Group extends ModelBase {
	constructor(properties = null) {
		super('group');

		this.$fieldConfig = {
			name: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'name')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			description: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'description')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			tag: {
				type: FieldTypes.ArrayOf(FieldTypes.String),
				validate: () =>
					validator(this, 'tag')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			members: {
				type: FieldTypes.ArrayOf(User),
				validate: () =>
					validator(this, 'members')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			permissions: {
				type: FieldTypes.ArrayOf(Permission),
				//TODO: implement final saving format
				saveAs: (model) => new PermissionReference(model),
				validate: () =>
					validator(this, 'permissions')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			company: {
				type: FieldTypes.ShapedAs(CompanyReference),
				saveAs: (model) => new CompanyReference(model),
				validate: () =>
					validator(this, 'company')
						.isOfType()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

exports.default = Group;
