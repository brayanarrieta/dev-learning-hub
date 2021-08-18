import { useRadioGroup, VStack } from '@chakra-ui/react';
import React from 'react';
import RadioCard from './RadioCard';

interface RadioCardGroupProps {
    options: {label: string, value: any}[];
    onChange: any;
    name: string;
    defaultValue?: string;
}

const RadioCardGroup = (props: RadioCardGroupProps) => {
  const {
    options, onChange, name, defaultValue,
  } = props;

  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange,
  });

  const group = getRootProps();

  return (
    <VStack {...group}>
      {options.map(({ value, label }) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {label}
          </RadioCard>
        );
      })}
    </VStack>
  );
};

RadioCardGroup.defaultProps = {
  defaultValue: null,
};

export default RadioCardGroup;
