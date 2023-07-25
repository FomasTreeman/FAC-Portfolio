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
    { name: 'sobSessions', url: '' },
    { name: 'Zaroff-S', url: '' },
    { name: 'FAC-Tales', url: '' },
    { name: 't33n-ang5t', url: '' },
    { name: 'fess-booth', url: '' },
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
        {PROJECTS.map((project) => (
          <TabPanel key={crypto.randomUUID()}>
            <Project project={project} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
