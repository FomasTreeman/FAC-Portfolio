'use client';

import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import Project from './Project';

export default function Home() {
  const projects = [
    'rent-shield',
    'a-maze',
    'mood-map',
    'sob-sessions',
    'Zaroff-S',
    'FAC-Tales',
    't33n-ang5t',
    'fess-booth',
  ];

  return (
    <Tabs variant="soft-rounded" colorScheme="green" isFitted>
      <TabList className="border-b-2 border-x-2 rounded-3xl">
        {projects.map((name) => (
          <Tab key={crypto.randomUUID()}>{name}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {projects.map((name) => (
          <TabPanel key={crypto.randomUUID()}>
            <h1>{name}</h1>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
