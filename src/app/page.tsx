'use client';

import Home from '@/components/Home';
import Image from 'next/image';
import { Text } from '@chakra-ui/react';

export default function page() {
  return (
    <>
      <header className="flex justify-between items-center">
        <Image
          src="fac.svg"
          alt="fac"
          width={100}
          height={100}
          className="invert m-6"
        />
        <Text fontSize="xl" className="m-6">
          Thomas Freeman
        </Text>
      </header>
      <Home />;
    </>
  );
}
