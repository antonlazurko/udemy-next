import { RANDOM_QUOTES_URL } from '@/shared';

export const fetchQuotes = async () => {
  try {
    const response = await fetch(RANDOM_QUOTES_URL);
    const quotes = await response.json();
    return quotes;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return [];
  }
};