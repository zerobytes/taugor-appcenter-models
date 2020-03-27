const appReference = require('./appReference');
const billing = require('./billing');
const demoMode = require('./demoMode');
const companyReference = require('./companyReference');
const contactPerson = require('./contactPerson');
const locationAddress = require('./locationAddress');
const permissionReference = require('./permissionReference');
const BankAccount = require('./BankAccount');
const FranchiseeInformation = require('./FranchiseeInformation');
const FranchiseeManagingPartner = require('./FranchiseeManagingPartner');
const PagarmePhoneNumber = require('./PagarmePhoneNumber');
const PagarmeAddress = require('./PagarmeAddress');

module.exports = {
	appReference,
	billing,
	companyReference,
	contactPerson,
	demoMode,
	locationAddress,
	permissionReference,
	BankAccount,
	FranchiseeInformation,
	FranchiseeManagingPartner,
	PagarmePhoneNumber,
	PagarmeAddress
};
