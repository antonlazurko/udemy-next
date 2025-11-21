import { QUOTES_URL } from "@/shared";

export async function patchQuote({ editQuoteId, text, author, categories }) {
  try {
    const res = await fetch(QUOTES_URL + '/' + editQuoteId, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        author,
        categories
      })
    });

    const data = await res.json();

    if (!res.ok) {
      const fieldErrors = {};
      if (Array.isArray(data.errors)) {
        data.errors.forEach(err => {
          const key = err.path || 'general';
          if (!fieldErrors[key]) fieldErrors[key] = [];
          fieldErrors[key].push(err.msg);
        });
      } else {
        fieldErrors.general = [data.error || 'Unknown error'];
      }

      throw fieldErrors;
    }

    return data;
  } catch (err) {
    if (err && typeof err === 'object' && !Array.isArray(err)) {
      throw err;
    }
    throw { general: [err.message || 'Unknown error'] };
  }
}
