interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Admin'],
  tenantName: 'Company',
  applicationName: 'belbird',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage admin roles', 'Manage service categories', 'Manage product categories', 'Manage blogs'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0be23881-a58c-41c9-b141-9a92f237fd0a',
};
