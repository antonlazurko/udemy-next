'use client';

import { useState } from 'react';
import { Input, Button } from "@/shared";
import { fetchQuotesByQueryParams } from '@/entities/quote/model/fetch-quotes-by-query-params';
import { createSearchQueryParams } from '@/app/search/_model/helpers';

export const SearchFilters = ({ setQuotes }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = async (textVal = '', authorVal = '', categoryVal = '') => {
    const queryString = createSearchQueryParams(textVal, authorVal, categoryVal);
    const quotes = await fetchQuotesByQueryParams(queryString);
    setQuotes(quotes);
  };

  const handleResetFilters = () => {
    setText('');
    setAuthor('');
    setCategory('');
    handleSearch();
  };

  return (
    <div className="flex flex-col gap-2 p-4 mb-6 sm:flex-row sm:gap-2.5 sm:p-10 sm:flex-nowrap">
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
      <Button onClick={() => handleSearch(text, author, category)} className="sm:w-auto w-full">
        Search
      </Button>
      <Button onClick={handleResetFilters} className="sm:w-auto w-full">
        Reset
      </Button>
    </div>
  );
};
