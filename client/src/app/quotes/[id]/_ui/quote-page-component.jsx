'use client';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { QuoteCategoryTag } from '@/shared';
import { deleteQuote } from '../_model/helpers';
export const QuotePageComponent = ({ quote }) => {
  const router = useRouter();
  const { text, author, categories, id } = quote;
  const onClickDelete = async () => {
    const response = await deleteQuote(id);
    if (!response.ok) {
      toast.error(`Error deleting quote with id ${id}: ${response.statusText}`);
    }
    else {
      toast.success(`Quote with id ${id} deleted successfully. Redirecting...`);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }
  return (
    <section className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-12">
      <article className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 shadow-sm rounded-2xl p-6 sm:p-8 lg:p-10">
      <header className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100 leading-tight">
            Quote #{id}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">A short note / thought</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-xs text-slate-500 dark:text-slate-400">by</span>
          <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">{author || 'Unknown'}</span>
        </div>
      </header>
      <div className="mt-2">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-800 dark:text-slate-100 italic">“{text}”</p>
      </div>
      <footer className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => <QuoteCategoryTag key={category} category={category} />)}
        </div>
        <Image
          src="/assets/buttons/delete-icon.svg"
          alt="Delete Quote"
          width={24}
          height={24}
          className='cursor-pointer mt-4 hover:fill-red-500'
          onClick={onClickDelete}
        />
      </footer>
    </article>
  </section>
  )
}
