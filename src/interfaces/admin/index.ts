import { GetQueryInterface } from 'interfaces';

export interface AdminInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AdminGetQueryInterface extends GetQueryInterface {
  id?: string;
}
