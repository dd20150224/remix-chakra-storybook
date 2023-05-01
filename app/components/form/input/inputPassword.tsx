import React from "react";
import { Input, FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/react";

import { 
  Field, 
  type FormikErrors, 
  type FormikTouched
} from "formik";

interface IInput {
  label?: string;
  fieldName?: string;
  errors: FormikErrors<any>; 
  touched: FormikTouched<any>;
}
const InputPassword: React.FC<IInput> = ({
  label='Password',
  fieldName='password',
  errors,
  touched
}: IInput) => {
  return (
    <FormControl isInvalid={!!errors.password && touched.password}>
      <FormLabel htmlFor={fieldName}>{label}</FormLabel>
      <Field
        as={Input}
        id={fieldName}
        name={fieldName}
        type="password"
        variant="filled"
      />
       <FormErrorMessage>{errors.password}</FormErrorMessage>
    </FormControl>
  );
};

export default InputPassword;
