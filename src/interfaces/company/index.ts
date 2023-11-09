import { ProductInterface } from 'interfaces/product';
import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  product?: ProductInterface[];
  service?: ServiceInterface[];
  user?: UserInterface[];

  _count?: {
    product?: number;
    service?: number;
    user?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  name?: string;
}
