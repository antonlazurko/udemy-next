import { fetchQuoteById } from '@/entities/quote/model/get-quote-by-id';
import { QuotePageComponent } from './_ui/quote-page-component';

export default async function QuotePage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const quote = await fetchQuoteById(id);

  return <QuotePageComponent quote={quote} />;
}
