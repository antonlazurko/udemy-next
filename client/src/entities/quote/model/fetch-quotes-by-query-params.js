import { QUOTES_URL, fetchSuccessNotification, fetchErrorNotification } from '@/shared';

export const fetchQuotesByQueryParams = async (queryString = '') => {
  try {
    const response = await fetch(QUOTES_URL + queryString);
    if (!response.ok) {
      const { errors } = await response.json();
      fetchErrorNotification(response.statusText, errors);

      throw new Error(response.statusText);
    }
    const quotes = await response.json();
    fetchSuccessNotification('Quotes fetched successfully');
    return quotes;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return [];
  }
};