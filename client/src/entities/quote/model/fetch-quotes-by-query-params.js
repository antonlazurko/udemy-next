import { QUOTES_URL } from '@/shared';

export const fetchQuotesByQueryParams = async (queryString) => {
  try {
    const response = await fetch(QUOTES_URL + '&' + queryString);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const quotes = await response.json();
    return quotes;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return [];
  }
};