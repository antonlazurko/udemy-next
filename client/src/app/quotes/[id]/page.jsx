import { notFound } from 'next/navigation';
import { getQuoteById } from '@/entities/quote/model/get-quote-by-id';
import { QuotePageComponent } from './_ui/quote-page-component';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { ok, data} = await getQuoteById(id);

  if (!data?.id) {
    return {
      title: 'Quote Not Found',
      description: 'The quote you are looking for does not exist.'
    };
  }

  return {
    title: `Quote #${data.id} by ${data.author || 'Unknown'}`,
    description: data.text
  };
}


export default async function QuotePage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const { ok, data} = await getQuoteById(id);

  return ok ? <QuotePageComponent quote={data} /> : notFound();

}
