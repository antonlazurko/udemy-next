'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteQuoteById } from '@/entities/quote/model/delete-quote-by-id';
import { fetchErrorNotification, fetchSuccessNotification } from '@/shared';
import Image from 'next/image';

export const DeleteButtonComponent = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onClickDelete = async () => {
    try {
      setLoading(true);
      const { ok, errors } = await deleteQuoteById(id);
      if (!ok) {
        throw errors
      }

      fetchSuccessNotification(`Quote #${id} deleted successfully! Redirecting...`);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch ({errors}) {
      setLoading(false);
      fetchErrorNotification(errors)
    }
  };

  return (
    <Image
      src="/assets/icons/delete-icon.svg"
      alt="Delete Quote"
      width={24}
      height={24}
      className={`cursor-pointer mt-4 hover:scale-110 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={loading ? undefined : onClickDelete}
    />
  );
}