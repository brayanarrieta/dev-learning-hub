import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import FormField from '../../../components/FormField';
import SelectFormField from '../../../components/SelectFormField';
import { CommunityRequestType } from '../../../constants/enums';

interface CommonFormProps {
    formControl: any;
}

const CommonForm = (props: CommonFormProps) => {
  const { formControl } = props;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      <FormField
        formControl={formControl}
        fieldName="title"
        fieldLabel="Community Request Title"
        validationRules={{
          isRequired: true,
          minLength: 10,
        }}
      />

      <SelectFormField
        formControl={formControl}
        fieldName="type"
        fieldLabel="Community Request Type"
        validationRules={{
          isRequired: true,
        }}
        options={[
          {
            value: CommunityRequestType.COURSE,
            label: CommunityRequestType.COURSE,
          },
          {
            value: CommunityRequestType.CODE_SNIPPET,
            label: CommunityRequestType.CODE_SNIPPET,
          },
          {
            value: CommunityRequestType.INTERVIEW_QUESTION,
            label: CommunityRequestType.INTERVIEW_QUESTION,
          },
        ]}
      />
    </SimpleGrid>
  );
};

export default CommonForm;
