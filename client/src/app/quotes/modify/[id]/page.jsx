import { ModifyQuotePageComponent } from "../ui/modify-quote-page";
import { getQuoteById } from '@/entities/quote/model/get-quote-by-id';

export default async function EditQuoteComponent({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const quote = await getQuoteById(id);
  return <ModifyQuotePageComponent editQuote={quote }/>
}