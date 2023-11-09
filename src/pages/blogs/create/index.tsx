import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { blogValidationSchema } from 'validationSchema/blogs';
import { UserInterface } from 'interfaces/user';
import { BlogInterface } from 'interfaces/blog';

function BlogCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: BlogInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.blog.create({ data: values as RoqTypes.blog });
      resetForm();
      router.push('/blogs');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<BlogInterface>({
    initialValues: {
      title: '',
      content: '',
      published_at: new Date(new Date().toDateString()),
      contentimg: false,
      author_id: (router.query.author_id as string) ?? null,
    },
    validationSchema: blogValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Blogs',
              link: '/blogs',
            },
            {
              label: 'Create Blog',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Blog
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.title}
            label={'Title'}
            props={{
              name: 'title',
              placeholder: 'Title',
              value: formik.values?.title,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.content}
            label={'Content'}
            props={{
              name: 'content',
              placeholder: 'Content',
              value: formik.values?.content,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="published_at" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Published At
            </FormLabel>
            <DatePicker
              selected={formik.values?.published_at ? new Date(formik.values?.published_at) : null}
              onChange={(value: Date) => formik.setFieldValue('published_at', value)}
            />
          </FormControl>

          <FormControl
            id="contentimg"
            display="flex"
            alignItems="center"
            mb="4"
            isInvalid={!!formik.errors?.contentimg}
          >
            <FormLabel htmlFor="switch-contentimg">Contentimg</FormLabel>
            <Switch
              id="switch-contentimg"
              name="contentimg"
              onChange={formik.handleChange}
              value={formik.values?.contentimg ? 1 : 0}
            />
            {formik.errors?.contentimg && <FormErrorMessage>{formik.errors?.contentimg}</FormErrorMessage>}
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'author_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/blogs')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'blog',
    operation: AccessOperationEnum.CREATE,
  }),
)(BlogCreatePage);
