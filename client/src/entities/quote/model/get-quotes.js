import { QUOTES_URL, fetchSuccessNotification, fetchErrorNotification, RANDOM_LIMIT } from '@/shared';

export const getQuotes = async () => {
  try {
    const response = await fetch(`${QUOTES_URL}?limit=${RANDOM_LIMIT}`);
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