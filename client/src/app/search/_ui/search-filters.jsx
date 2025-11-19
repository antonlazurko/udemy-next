'use client';

import { useState } from 'react';
import { Input, Button } from "@/shared";
import { fetchQuotesByQueryParams } from '@/entities/quote/model/fetch-quotes-by-query-params';
import { createSearchQueryParams } from '@/app/search/_model/helpers';


export const SearchFilters = ({ setQuotes }) => {

  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')

  const handleSearch = async() => {
    const queryString = createSearchQueryParams(text, author, category);
    const quotes = await fetchQuotesByQueryParams(queryString);
    setQuotes(quotes);
  }

  return (
    <div className="flex gap-[30px] p-10 mb-6">
      <Input
        type="text"
        value={text}
        name="text"
        placeholder="Text"
        onChange={({ target: { value } }) => setText(value)}
      />
      <Input
        type="text"
        value={author}
        name="author"
        placeholder="Author"
        onChange={({ target: { value } }) => setAuthor(value)}
        />
      <Input
        type="text"
        value={category}
        name="category"
        placeholder="Category"
        onChange={({ target: { value } }) => setCategory(value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}