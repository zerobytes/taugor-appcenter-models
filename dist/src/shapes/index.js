"use strict";

var billing = require('./billing');

var companyReference = require('./companyReference');

var contactPerson = require('./contactPerson');

var locationAddress = require('./locationAddress');

var permissionReference = require('./permissionReference');

module.exports = {
  billing: billing,
  companyReference: companyReference,
  contactPerson: contactPerson,
  locationAddress: locationAddress,
  permissionReference: permissionReference
};