import { GetQueryInterface } from 'interfaces';

export interface ProductCategoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ProductCategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
