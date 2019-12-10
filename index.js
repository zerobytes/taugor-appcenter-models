//Models for export
const Company = require('./src/models/Company').default;
const Group = require('./src/models/Group').default;
const Permission = require('./src/models/Permission').default;
const User = require('./src/models/User').default;

//Shapes for export
const shapes = require('./src/shapes');
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
