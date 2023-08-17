'use client';

import Image from 'next/image';
import Link from 'next/link';
import { micromark } from 'micromark';
import { gfmTable, gfmTableHtml } from 'micromark-extension-gfm-table'
import { Interweave } from 'interweave'

export default function Project({
  project: { name, url, md },
}: {
  project: { name: string; url: string, md: string };
}) {
  return (
    <div>
      <aside className='flex gap-4 w-full items-center justify-end'>
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
            width={100}
            height={100}
          />
        )}
        <a href={`https://github.com/fac27/${name}`}><Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' alt='github' width={50} height={50} className='invert' /></a>
      </aside>
      {md ? <Interweave content={micromark(md, { extensions: [gfmTable()], htmlExtensions: [gfmTableHtml()] })} className='mt-8 markdown' /> : null}
    </div>
  );
}
