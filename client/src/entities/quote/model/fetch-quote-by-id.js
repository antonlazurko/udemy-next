import { QUOTES_BY_ID_URL } from '@/shared';

export const fetchQuoteById = async (id) => {
  try {
    const numericId = Number(id);

    if (!Number.isInteger(numericId) || numericId <= 0) {
      return {};
    }

    const response = await fetch(QUOTES_BY_ID_URL + numericId);
    if (response.status === 404) {
      const error = await response.json();
      return { error };
    }

    if (!response.ok) {
      return {};
    }

    const quote = await response.json();
    return quote ?? {};
  } catch (error) {
    return {};
  }
};
