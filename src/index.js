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

//Shapes for export
import shapes from './shapes';
export { shapes };
export const billing = shapes.billing;
export const contactPerson = shapes.contactPerson;
export const demoMode = shapes.demoMode;
export const locationAddress = shapes.locationAddress;
export const permissionReference = shapes.permissionReference;
