import { api } from "@/shared/api/base-api";
import { RANDOM_LIMIT } from '@/shared';

export const getQuotes = async () => {
  return api.get(`/quotes/?limit=${RANDOM_LIMIT}`);
};