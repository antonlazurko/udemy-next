import { notFound } from "next/navigation";

import { fetchQuoteById } from '@/entities/quote/model/fetch-quote-by-id';
import { QuotePageComponent } from './_ui/QuotePageComponent';

export default async function QuotePage({ params }) {
  const { id } = await params;
  const quote = await fetchQuoteById(id);

  if (!quote?.id || quote.error) notFound();

  return <QuotePageComponent quote={quote} />;
}
