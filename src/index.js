import shapes from './shapes';
//Models for export
export { default as Auth } from './models/Auth';
export { default as App } from './models/App';
export { default as Billing } from './models/Billing';
export { default as Company } from './models/Company';
export { default as Group } from './models/Group';
export { default as Permission } from './models/Permission';
export { default as User } from './models/User';
export { default as Franchisee } from './models/Franchisee';
export { default as Customer } from './models/Customer';

const billing = shapes.billing;
const contactPerson = shapes.contactPerson;
const demoMode = shapes.demoMode;
const locationAddress = shapes.locationAddress;
const permissionReference = shapes.permissionReference;

export { shapes, billing, contactPerson, demoMode, locationAddress, permissionReference };
