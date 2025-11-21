import { deleteQuoteById } from '@/entities/quote/model/delete-quote-by-id';

export const deleteQuote = async (id) => {
  const response = await deleteQuoteById(id);
  return response
}