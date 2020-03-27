const omj = require('@zerobytes/object-model-js');

const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const ShapeBase = omj.ShapeBase;

class FranchiseeManagingPartner extends ShapeBase {
	constructor(data = null) {
		super(data);

		this.type = '';
		this.document_number = '';
		this.email = '';
		this.name = '';

		this.$fieldConfig = {
			type: {
				type: FieldTypes.String,
				defaultValue: 'individual',
				validate: () =>
					validator(this, 'type')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			document_number: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'document_number')
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
			name: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'name')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			}
		};
	}
}

export default FranchiseeManagingPartner;
