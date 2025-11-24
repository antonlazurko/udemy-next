'use client';
import { useRouter } from 'next/navigation';
import { deleteQuoteById } from '@/entities/quote/model/delete-quote-by-id';
import { fetchErrorNotification, fetchSuccessNotification } from '@/shared';
import Image from 'next/image';

export const DeleteButtonComponent = ({ id }) => {
  const router = useRouter();

  const onClickDelete = async () => {
    try {
      const { ok, errors } = await deleteQuoteById(id);
      if (!ok) {
        throw errors
      }

      fetchSuccessNotification(`Quote #${id} deleted successfully! Redirecting...`);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch ({errors}) {
      fetchErrorNotification(errors)
    }
  };

  return (
    <Image
      src="/assets/buttons/delete-icon.svg"
      alt="Delete Quote"
      width={24}
      height={24}
      className='cursor-pointer mt-4 hover:fill-red-500'
      onClick={onClickDelete}
    />
  );
}