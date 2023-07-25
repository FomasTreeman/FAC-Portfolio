'use client';

import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import Project from './Project';

export default function Home() {
  const PROJECTS = [
    {
      name: 'rent-shield',
      url: 'https://rent-shield.vercel.app/',
    },
    {
      name: 'a-maze',
      url: 'https://main--enchanting-churros-a4027f.netlify.app/',
    },
    { name: 'mood-map', url: 'https://mood-map.vercel.app/' },
    { name: 'sobSessions' },
    { name: 'Zaroff-S' },
    { name: 'FAC-Tales' },
    { name: 't33n-ang5t' },
    { name: 'fess-booth' },
  ];

  const projects = PROJECTS.map((project) => project.name);

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
