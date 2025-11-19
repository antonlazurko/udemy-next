import { RANDOM_QUOTES_URL, fetchSuccessNotification, fetchErrorNotification } from '@/shared';

export const fetchQuotes = async () => {
  try {
    const response = await fetch(RANDOM_QUOTES_URL);
    if (!response.ok) {
      const { errors } = await response.json();
      fetchErrorNotification(response.statusText, errors);

      throw new Error(response.statusText);
    }
    const quotes = await response.json();
    fetchSuccessNotification('Quotes fetched successfully');
    return quotes;
  } catch (error) {
    if(error instanceof TypeError){fetchErrorNotification(error.name, [{ value: error.name, path: error.name, msg: error.message }]);}
    return [];
  }
};