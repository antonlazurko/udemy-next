import { QuotesListItem } from './list-item';

export const QuotesList =({quotes = []}) => {
  if (!quotes.length) {
    return <h3 className="text-center text-2xl dark:text-white mt-3">No quotes found.</h3>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
      { quotes.map(quote => <QuotesListItem key={quote.id} {...quote}/>) }
    </div>
  )
}