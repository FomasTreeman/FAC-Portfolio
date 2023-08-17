'use client';

import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import Project from './Project';
import PROJECTS from '@/../public/projects'


export default function Home() {
  return (
    <Tabs variant="soft-rounded" colorScheme="green" isFitted isLazy>
      <TabList id='tab-list' className="border-b-2 border-x-2 rounded-full">
        {PROJECTS.map(({ name }) => (
          <Tab key={crypto.randomUUID()}>{name}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {PROJECTS.map((project) => (
          <TabPanel key={crypto.randomUUID()} className='relative'>
            <Project project={project} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
