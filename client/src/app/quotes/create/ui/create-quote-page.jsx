'use client';

import { useState } from "react";
import { z as zod } from "zod";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { postQuote } from '@/entities/quote/model/post-quote';
import { Button, Input } from "@/shared";
import { ErrorsComponent } from "./errors-component";

const quoteSchema = zod.object({
  text: zod.string().min(10, "Text should be at least 10 characters"),
  author: zod.string().min(1, "Author is required"),
  categories: zod.array(zod.string()).min(1, "Categories must contain at least one item")
});

export function CreateQuotePageComponent() {
  const router = useRouter()

  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const categoriesArray = categories
      .split(',')
      .map(c => c.trim())
      .filter(Boolean);

    const parseResult = quoteSchema.safeParse({
      text,
      author,
      categories: categoriesArray
    });

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      setError(fieldErrors);
      setLoading(false);
      return;
    }

    try {
      const quote = await postQuote({
        text,
        author,
        categories: categoriesArray
      });

      toast.success(`Quote #${quote.id} created successfully! Redirecting...`);
      router.push('/quotes/' + quote.id);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-12">
      <h1 className="text-center text-3xl mb-6 dark:text-white">Create a new quote</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
        {error?.text && (<ErrorsComponent errors={error.text} />)}

        <Input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          disabled={loading}
        />
        {error?.author && (<ErrorsComponent errors={error.author} />)}

        <Input
          type="text"
          placeholder="Categories (comma separated)"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          disabled={loading}
        />
        {error?.categories && <ErrorsComponent errors={error.categories} />}


        <Button
          type="submit"
          disabled={loading}
          >
          {loading ? "Creating..." : "Create quote"}
        </Button>

        {error?.general && <ErrorsComponent errors={error.general} />}
      </form>
    </section>
  );
}
