import * as React from 'react';
import {
  Flex,
  Box,
  Input,
  FormLabel,
  FormControl,
  VStack,
  FormErrorMessage,
  Checkbox,
  Button
} from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import './CommonForm.css';
import { components } from './input';

const CommonForm: React.FC = () => {

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  const InputText = components['text'];
  const InputPassword = components['password'];

  console.log('NODE_ENV = ' + process.env.NODE_ENV);
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: any) => {
            alert(JSON.stringify(values, null, 2));
          }}>
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <InputText
                label="Email Address"
                fieldName="email"
                errors={errors}
                touched={touched}></InputText>
              <InputPassword
                errors={errors}
                touched={touched}></InputPassword>
              <Field
                as={Checkbox}
                id="rememberMe"
                name="rememberMe"
                colorScheme="green"
                >Remember me?</Field>
              <Button colorScheme="red" type="submit">Login</Button>
            </VStack>
          </Form>
        )}
        </Formik>
      </Box>
    </Flex>
  ) 
}

export default CommonForm;