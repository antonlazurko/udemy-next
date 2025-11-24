import { api } from "@/shared/api/base-api";
export async function postQuote({ text, author, categories }) {
  return api.post('/quotes', { text, author, categories });
}
