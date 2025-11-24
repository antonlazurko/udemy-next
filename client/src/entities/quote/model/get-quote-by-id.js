import { api } from '@/shared/api/base-api';

export const getQuoteById = async (id) => {
  const numericId = Number(id);
  if (!Number.isInteger(numericId) || numericId <= 0) {
    return {};
  }
  return api.get(`/quotes/${id}`);
};
