import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';

export interface TextAreaFormFieldProps {
      formControl: any;
      fieldName: string;
      defaultValue?: any;
      fieldLabel: string;
      validationRules?: {
          isRequired?: boolean;
          minLength?: number;
      }
  }

const TextAreaFormField = (props: TextAreaFormFieldProps) => {
  const {
    formControl, fieldName, defaultValue, fieldLabel, validationRules,
  } = props;

  const { isRequired, minLength } = validationRules || {};

  const rules = {
    required: isRequired ? `${fieldLabel} field is required` : false,
    ...(minLength ? {
      minLength: {
        value: minLength,
        message: `${fieldLabel} must have a min length of ${minLength} characters`,
      },
    } : {}),
  };

  return (
    <Controller
      name={fieldName}
      control={formControl}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl isInvalid={!!error}>
          <FormLabel>{fieldLabel}</FormLabel>
          <Textarea onChange={onChange} value={value} />
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
};

TextAreaFormField.defaultProps = {
  defaultValue: '',
  validationRules: {},
};

export default TextAreaFormField;
