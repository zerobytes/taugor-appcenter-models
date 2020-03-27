"use strict";

var appReference = require('./appReference');

var billing = require('./billing');

var demoMode = require('./demoMode');

var companyReference = require('./companyReference');

var contactPerson = require('./contactPerson');

var locationAddress = require('./locationAddress');

var permissionReference = require('./permissionReference');

var BankAccount = require('./BankAccount');

var FranchiseeInformation = require('./FranchiseeInformation');

var FranchiseeManagingPartner = require('./FranchiseeManagingPartner');

var PagarmePhoneNumber = require('./PagarmePhoneNumber');

var PagarmeAddress = require('./PagarmeAddress');

module.exports = {
  appReference: appReference,
  billing: billing,
  companyReference: companyReference,
  contactPerson: contactPerson,
  demoMode: demoMode,
  locationAddress: locationAddress,
  permissionReference: permissionReference,
  BankAccount: BankAccount,
  FranchiseeInformation: FranchiseeInformation,
  FranchiseeManagingPartner: FranchiseeManagingPartner,
  PagarmePhoneNumber: PagarmePhoneNumber,
  PagarmeAddress: PagarmeAddress
};