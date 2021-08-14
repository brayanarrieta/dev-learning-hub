import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';

export interface FormFieldProps {
    controlField: any;
    fieldName: string;
    defaultValue?: any;
    fieldLabel: string;
    validationRules?: {
        isRequired?: boolean;
        minLength?: number;
    }
}

const FormField = (props: FormFieldProps) => {
  const {
    controlField, fieldName, defaultValue, fieldLabel, validationRules,
  } = props;

  const { isRequired, minLength } = validationRules || {};

  const rules = {
    required: isRequired ? `${fieldLabel} field is required` : false,
    ...(minLength ? {
      value: minLength,
      message: `${fieldLabel} must have a min length of ${minLength} characters`,
    } : {}),
  };
  return (
    <Controller
      name={fieldName}
      control={controlField}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl isInvalid={!!error}>
          <FormLabel>{fieldLabel}</FormLabel>
          <Input onChange={onChange} value={value} />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
};

FormField.defaultProps = {
  defaultValue: '',
  validationRules: {},
};

export default FormField;
