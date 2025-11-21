'use client';

import { useState } from "react";
import { QUOTES_URL } from "@/shared";

export function CreateQuotePageComponent() {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch(QUOTES_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          author,
          categories: categories
            .split(',')
            .map(c => c.trim())
            .filter(Boolean)
        })
      });

      if (!res.ok) {
        const errData = await res.json();
        setError(errData.errors || { general: [errData.error] });
        return;
      }

      const quote = await res.json();
      setSuccess(`Quote #${quote.id} created successfully!`);
      setText('');
      setAuthor('');
      setCategories('');
    } catch (err) {
      setError({ general: [err.message] });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      {error?.text && <p className="text-red-500 text-sm">{error.text}</p>}

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      {error?.author && <p className="text-red-500 text-sm">{error.author}</p>}

      <input
        type="text"
        placeholder="Categories (comma separated)"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error?.categories && <p className="text-red-500 text-sm">{error.categories}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:opacity-60 transition"
      >
        {loading ? "Creating..." : "Create quote"}
      </button>

      {error?.general && <p className="text-red-500 mt-2">{error.general.join(', ')}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </form>
  );
}
