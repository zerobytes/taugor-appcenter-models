const omj = require('@zerobytes/object-model-js');
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const ShapeBase = omj.ShapeBase;

/**
 * @type CompanyReference
 * @property {FieldTypes.String} uid
 * @property {FieldTypes.String} code
 */
class CompanyReference extends ShapeBase {
	constructor() {
		super();
		this.uid = '';
		this.code = '';
		this.$fieldConfig = {
			uid: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'uid')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			code: {
				type: FieldTypes.String,
				minLength: 1,
				validate: () =>
					validator(this, 'code')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			}
		};
	}
}

module.exports = CompanyReference;
