import { QuoteCategoryTag } from '@/shared';
import Link from 'next/link';

export const QuotesListItem = ({ text, author, categories, id }) => (
  <div className='bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg dark:hover:bg-gray-700 hover:bg-amber-50 transition-transform duration-300 ease-out hover:-translate-y-1.5'>
    <Link href={`/quotes/${id}`}
      >
      <p className="mb-4 text-xl italic text-gray-900 dark:text-gray-100">
        {`"${text}"`}
      </p>
    </Link>
    <p className="mb-10 text-right text-xl font-semibold text-gray-700 dark:text-gray-300">
      — <Link href={`/search?author=${author}`} className="hover:underline">{author}</Link>
    </p>
    <div className="flex flex-wrap mt-2">
      {categories.map(category => <QuoteCategoryTag key={category} category={category} />)}
    </div>
  </div>
)