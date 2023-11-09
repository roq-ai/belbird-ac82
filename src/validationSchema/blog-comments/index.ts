import * as yup from 'yup';

export const blogCommentValidationSchema = yup.object().shape({
  content: yup.string().nullable(),
  author_id: yup.string().nullable().required(),
  blog_id: yup.string().nullable().required(),
});
