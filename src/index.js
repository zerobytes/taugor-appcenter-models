//Models for export
const Company = require('./models/Company').default;
const Group = require('./models/Group').default;
const Permission = require('./models/Permission').default;
const User = require('./models/User').default;

//Shapes for export
const shapes = require('./shapes');
const billing = shapes.billing;
const contactPerson = shapes.contactPerson;
const locationAddress = shapes.locationAddress;
const permissionReference = shapes.permissionReference;

module.exports = {
	Company,
	Group,
	Permission,
	User,
	billing,
	contactPerson,
	locationAddress,
	permissionReference
};
