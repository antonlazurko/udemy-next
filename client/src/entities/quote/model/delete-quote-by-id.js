import { api } from '@/shared/api/base-api';

export const deleteQuoteById = (id) => api.delete(`/quotes/${id}`);