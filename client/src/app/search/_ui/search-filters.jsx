'use client';

import { useState } from 'react';
import { Input, Button } from "@/shared";
import { handleResetFilters, handleSearch, onInputChange } from '@/app/search/_model/helpers';

export const SearchFilters = ({ setQuotes }) => {
  const [textFilter, setTextFilter] = useState({});
  const [authorFilter, setAuthorFilter] = useState({});
  const [categoryFilter, setCategoryFilter] = useState({});

  return (
    <div className="flex flex-col gap-2 p-4 mb-6 sm:flex-row sm:gap-2.5 sm:p-10 sm:flex-nowrap">
      <Input
        type="text"
        value={textFilter.text ?? ''}
        name="text"
        placeholder="Text"
        onChange={({ target: { value } }) => onInputChange(value, 'text', setTextFilter)}
        error={textFilter.error}
      />
      <Input
        type="text"
        value={authorFilter.text ?? ''}
        name="author"
        placeholder="Author"
        onChange={({ target: { value } }) => onInputChange(value, 'author', setAuthorFilter)}
        error={authorFilter.error}
      />
      <Input
        type="text"
        value={categoryFilter.text ?? ''}
        name="category"
        placeholder="Category"
        onChange={({ target: { value } }) => onInputChange(value, 'category', setCategoryFilter)}
        error={ categoryFilter.error}
      />
      <Button onClick={() => handleSearch(textFilter, authorFilter, categoryFilter, setQuotes)} className="sm:w-auto w-full">
        Search
      </Button>
      <Button onClick={() => handleResetFilters(setTextFilter, setAuthorFilter, setCategoryFilter, setQuotes)} className="sm:w-auto w-full" variant="secondary">
        Reset
      </Button>
    </div>
  );
};
