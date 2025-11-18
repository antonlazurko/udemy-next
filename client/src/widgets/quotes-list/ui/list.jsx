import { QuotesListItem } from './list-item';

export const QuotesList =({quotes}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {quotes.map(quote => <QuotesListItem key={quote.id} {...quote}/>)}
    </div>
  )
}