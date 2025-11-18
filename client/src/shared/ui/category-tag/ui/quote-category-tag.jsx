export const QuoteCategoryTag = ({ category }) => (
  <span
    key={category}
    className="text-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full mr-2 mb-2"
  >
    {category}
  </span>
)