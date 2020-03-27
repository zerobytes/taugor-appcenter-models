const omj = require('@zerobytes/object-model-js');

const FieldTypes = omj.FieldTypes;
const validator = omj.Validator;
const ShapeBase = omj.ShapeBase;

class FranchiseeInformation extends ShapeBase {
	constructor(data = null) {
		super(data);
		this.type = '';
		this.document_number = '';
		this.company_name = '';
		this.managing_partners = '';
		this.name = '';
		this.site_url = '';
		this.email = '';
		this.phone_numbers = '';
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
			company_name: {
				type: FieldTypes.String,
				defaultValue: null,
				validate: () =>
					validator(this, 'company_name')
						.isOfType()
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
			name: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'name')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			site_url: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'site_url')
						.isOfType()
						.website()
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
			phone_numbers: {
				type: FieldTypes.ArrayOf(FieldTypes.ShapedAs(shapes.PagarmePhoneNumber)),
				validate: () =>
					validator(this, 'phone_numbers')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			managing_partners: {
				type: FieldTypes.ArrayOf(FieldTypes.ShapedAs(shapes.FranchiseeManagingPartner)),
				defaultValue: null,
				validate: () =>
					validator(this, 'managing_partners')
						.isOfType()
						.isValid()
			}
		};
	}
}

module.exports = FranchiseeInformation;
