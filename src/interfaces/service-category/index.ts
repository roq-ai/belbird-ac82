import { GetQueryInterface } from 'interfaces';

export interface ServiceCategoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ServiceCategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
