import { api } from "@/shared/api/base-api";

export async function patchQuote({ editQuoteId, text, author, categories }) {
    return await api.patch(`/quotes/${editQuoteId}`, { text, author, categories });
}
