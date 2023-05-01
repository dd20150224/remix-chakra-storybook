import React from "react";
import {
  Input,
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

// types
import { type IFieldConfig } from '../../../types';

import { Field, FormikErrors, FormikTouched } from 'formik';

interface IInputText {
  fieldConfig: IFieldConfig;
  errors: any;
  touched: any;
}
const InputText: React.FC<IInput> = ({
  fieldConfig,
  errors,
  touched}: IInputText) => {

  const isError = errors[fieldConfig.id];

  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={fieldConfig.id}>{fieldConfig.label}</FormLabel>
      <Field
        as={Input}
        id={fieldConfig.id}
        name={fieldConfig.id}
        type={fieldConfig.type}
        variant="filled"
      />
      {!isError &&
        fieldConfig.helperText && (
          <FormHelperText>{fieldConfig.helperText}</FormHelperText>
        )}
      {isError && (
        <FormErrorMessage>{errors[fieldConfig.id]}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputText;
