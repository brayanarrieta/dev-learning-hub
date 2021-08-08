import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import SidebarWithHeader from '../../../custom-components/Layout/SidebarWithHeader';

const TechnologyQuestions = () => (
  <SidebarWithHeader>
    TechnologyQuestions
  </SidebarWithHeader>
);

export const getServerSideProps = withPageAuthRequired();

export default TechnologyQuestions;
