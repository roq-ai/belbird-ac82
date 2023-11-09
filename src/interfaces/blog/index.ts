import { BlogCommentInterface } from 'interfaces/blog-comment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BlogInterface {
  id?: string;
  title: string;
  content?: string;
  author_id: string;
  published_at?: any;
  contentimg: boolean;
  created_at?: any;
  updated_at?: any;
  blog_comment?: BlogCommentInterface[];
  user?: UserInterface;
  _count?: {
    blog_comment?: number;
  };
}

export interface BlogGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  author_id?: string;
}
