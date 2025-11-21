import { notFound } from 'next/navigation';
import { getQuoteById } from '@/entities/quote/model/get-quote-by-id';
import { QuotePageComponent } from './_ui/quote-page-component';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const quote = await getQuoteById(id);

  if (!quote?.id) {
    return {
      title: 'Quote Not Found',
      description: 'The quote you are looking for does not exist.'
    };
  }

  return {
    title: `Quote #${quote.id} by ${quote.author || 'Unknown'}`,
    description: quote.text
  };
}


export default async function QuotePage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const quote = await getQuoteById(id);

  return quote?.id ? <QuotePageComponent quote={quote} /> : notFound();;
}
