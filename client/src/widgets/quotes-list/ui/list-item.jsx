import { QuoteCategoryTag } from '@/shared';

export const QuotesListItem = ({ text, author, categories }) => (
  <div
    className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg"
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
)