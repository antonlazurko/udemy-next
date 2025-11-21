import { QuoteCategoryTag } from '@/shared';
import Link from 'next/link';

export const QuotesListItem = ({ text, author, categories, id }) => (
  <Link href={`/quotes/${id}`} className='transition-transform duration-300 ease-out hover:-translate-y-1.5'>
    <div
      className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg dark:hover:bg-gray-700 hover:bg-amber-50"
      >
      <p className="mb-4 text-xl italic text-gray-900 dark:text-gray-100">
        {`"${text}"`}
      </p>
      <p className="mb-10 text-right text-xl font-semibold text-gray-700 dark:text-gray-300">
        — {author}
      </p>
      <div className="flex flex-wrap mt-2">
        {categories.map(category => <QuoteCategoryTag key={category} category={category} />)}
      </div>
    </div>
  </Link>
)