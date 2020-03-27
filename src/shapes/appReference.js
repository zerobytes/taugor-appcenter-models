const omj = require('@zerobytes/object-model-js');
const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const ShapeBase = omj.ShapeBase;

/**
 * @type AppReference
 * @property {FieldTypes.String} uid
 * @property {FieldTypes.String} code
 */
class AppReference extends ShapeBase {
	constructor(data = null) {
		super(data);
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

export default AppReference;
