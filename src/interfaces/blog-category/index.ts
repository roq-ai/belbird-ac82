import { GetQueryInterface } from 'interfaces';

export interface BlogCategoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BlogCategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
