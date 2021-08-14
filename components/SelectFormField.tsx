import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FormFieldProps } from './FormField';

interface SelectOption {
  label: string;
  value: any;
}

interface SelectFormFieldProps extends Omit<FormFieldProps, 'validationRules'> {
    validationRules?: {
        isRequired?: boolean;
    };
    options: SelectOption[];
    defaultValue?: any;
}

const SelectFormField = (props: SelectFormFieldProps) => {
  const {
    controlField,
    fieldName,
    defaultValue,
    fieldLabel,
    validationRules,
    options,
  } = props;

  const { isRequired } = validationRules || {};

  const rules = {
    required: isRequired ? `${fieldLabel} field is required` : false,
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
          <Select
            placeholder={`Select the ${fieldLabel}`}
            onChange={onChange}
            value={value}
          >
            {
              options.map((option: SelectOption) => (
                <option
                  key={`select-option-${option.label}-${option.value}`}
                  value={option.value}
                >
                  {option.value}
                </option>
              ))
            }
          </Select>
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
};

SelectFormField.defaultProps = {
  defaultValue: '',
  validationRules: {},
};

export default SelectFormField;
