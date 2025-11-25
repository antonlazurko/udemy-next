'use client'

import Image from 'next/image';
import Link from 'next/link';

export const EditButtonComponent = ({ id }) => (
    <Link
      href={`/quotes/modify/${id}`}>
      <Image
        src="/assets/icons/edit-pen.svg"
        alt="Delete Quote"
        width={32}
        height={32}
        className='cursor-pointer mt-4 hover:fill-red-500 hover:scale-110 transition'
        />
    </Link>
  );