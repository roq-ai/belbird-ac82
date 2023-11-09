import { UserInterface } from 'interfaces/user';
import { BlogInterface } from 'interfaces/blog';
import { GetQueryInterface } from 'interfaces';

export interface BlogCommentInterface {
  id?: string;
  content?: string;
  author_id: string;
  blog_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  blog?: BlogInterface;
  _count?: {};
}

export interface BlogCommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  author_id?: string;
  blog_id?: string;
}
