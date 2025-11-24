'use client'

import Image from 'next/image';
import Link from 'next/link';

export const EditButtonComponent = ({ id }) => (
  <Link
    href={`/quotes/modify/${id}`}>
    <Image
      src="/assets/buttons/edit-pen.svg"
      alt="Delete Quote"
      width={40}
      height={40}
      className='cursor-pointer mt-4 hover:fill-red-500'
      />
  </Link>
);