import * as yup from 'yup';

export const blogValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().nullable(),
  published_at: yup.date().nullable(),
  contentimg: yup.boolean().required(),
  author_id: yup.string().nullable().required(),
});
