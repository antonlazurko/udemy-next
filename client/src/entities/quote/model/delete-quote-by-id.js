import { QUOTES_URL } from '@/shared';
export const deleteQuoteById = (id) => {
  return fetch(`${QUOTES_URL}${id}`, {
    method: 'DELETE'
  })
}