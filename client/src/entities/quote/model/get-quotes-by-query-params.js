import { api } from '@/shared/api/base-api';

export const getQuotesByQueryParams = async (queryString = '') => {

  return api.get(`/quotes${queryString}`)
};