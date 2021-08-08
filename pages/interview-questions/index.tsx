import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';
import TechnologyCard from '../../custom-components/TechnologyCard';
import { Technology } from '../../types';

const MOCKED_DATA: Technology[] = [
  {
    _id: 1,
    name: 'React',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley',
    slug: 'react',
  },
  {
    _id: 2,
    name: 'React 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley',
    slug: 'react',
  },
  {
    _id: 3,
    name: 'React 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley',
    slug: 'react',
  },
  {
    _id: 4,
    name: 'React 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley',
    slug: 'react',
  },
  {
    _id: 5,
    name: 'React 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley',
    slug: 'react',
  },

];

const InterviewQuestions = () => (
  <SidebarWithHeader>

    <Stack spacing={4}>
      <Heading>Interview Questions Technologies</Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {MOCKED_DATA.map((technology) => (
          <TechnologyCard
            key={technology._id}
            technology={technology}
          />
        ))}
      </SimpleGrid>

    </Stack>

  </SidebarWithHeader>
);

export const getServerSideProps = withPageAuthRequired();

export default InterviewQuestions;
