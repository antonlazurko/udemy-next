import { fetchQuoteById } from '@/entities/quote/model/fetch-quote-by-id';
import { QuotePageComponent } from './_ui/QuotePageComponent';

export default async function QuotePage({ params }) {
  const { id } = await params;
  const quote = await fetchQuoteById(id);

  if(!quote.id){
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-black/40 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <svg className="h-12 w-12 animate-spin text-sky-600 dark:text-sky-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>

          <div className="text-sm text-slate-700 dark:text-slate-200">Loading...</div>
        </div>
      </div>
    );
  }
  return <QuotePageComponent quote={quote} />;
}
