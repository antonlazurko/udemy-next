import { notFound } from 'next/navigation';
import { QUOTES_BY_ID_URL } from '@/shared';

export const fetchQuoteById = async (id) => {
  try {
    const numericId = Number(id);

    if (!Number.isInteger(numericId) || numericId <= 0) {
      return {};
    }

    const response = await fetch(QUOTES_BY_ID_URL + numericId, {
      cache: "no-store",
      next: { revalidate: 0 }
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const quote = await response.json();
    return quote ?? {};
  } catch (error) {
    notFound();
  }
};
