import { GetQueryInterface } from 'interfaces';

export interface AdminRoleInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AdminRoleGetQueryInterface extends GetQueryInterface {
  id?: string;
}
