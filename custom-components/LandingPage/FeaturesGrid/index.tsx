import React from 'react';
import {
  Box, SimpleGrid, Icon,
} from '@chakra-ui/react';
import Feature from './Feature';
import FEATURE_ITEMS, { FeatureItem } from './featureItems';

const FeaturesGrid = () => (
  <Box py={4} px={{ base: 4, md: 24 }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

      {FEATURE_ITEMS.map((featureItem: FeatureItem) => (
        <Feature
          key={featureItem.title}
          icon={<Icon as={featureItem.icon} w={10} h={10} />}
          title={featureItem.title}
          text={featureItem.text}
        />
      ))}
    </SimpleGrid>
  </Box>
);

export default FeaturesGrid;
