'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Project({
  project: { name, url },
}: {
  project: { name: string; url: string };
}) {
  return (
    <div className="flex items-center justify-center h-full">
      {url ? (
        <Link
          href={url}
          className="rounded-md bg-blue-500 p-1 hover:bg-blue-800"
        >
          {url}
        </Link>
      ) : (
        <Image
          src="https://media1.giphy.com/media/KEkCunyitU0BjSFKJs/200.gif"
          alt="coming soon"
          width={400}
          height={400}
        />
      )}
    </div>
  );
}
