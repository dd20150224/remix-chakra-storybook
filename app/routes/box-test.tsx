import React from 'react';

import {
  Box,
  VStack,
  Button
} from '@chakra-ui/react';

import {type IFieldConfig} from '../types';

import { Formik, Form } from 'formik';
import { components } from '../components/form/input';

const InputText = components['text'];

interface Values {

}

const fieldConfigs: IFieldConfig[] = [
  {
    id: 'field1',
    label: 'Course Goal 1',
    placeholder: 'Please input goal 1',
    helperText: 'dfgfd',  
    type: 'text'
  },
  {
    id: 'field2',
    label: 'Course Goal 2',
    placeholder: 'Please input goal 2',
    helperText: '',  
    type: 'text'
  },

]
export default function BoxTest() {
  return (
    <Box mt={10} w={80} mx="auto" bg="white" rounded="md" p="4" boxShadow="xl">
      <Formik
        initialValues={{
          goal1: "(Please input goal 1)",
        }}
        onSubmit={(values: any) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={2} align="flex-start">
              {fieldConfigs.map((fieldConfig) => (
                <InputText
                  key={fieldConfig.id}
                  fieldConfig={fieldConfig}
                  errors={errors}
                  touched={touched}
                ></InputText>
              ))}
              <Button w={20} colorScheme="red">
                Add Goal
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

