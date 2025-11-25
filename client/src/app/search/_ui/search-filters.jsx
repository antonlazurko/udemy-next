'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Input, Button } from "@/shared";
import { handleResetFilters, handleSearch, onInputChange } from '@/app/search/_model/helpers';

export const SearchFilters = ({ setQuotes }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const [textFilter, setTextFilter] = useState({});
  const [authorFilter, setAuthorFilter] = useState({});
  const [categoryFilter, setCategoryFilter] = useState({});
  const [limitFilter, setLimitFilter] = useState({text: '10'});

  const onSearchButtonClick = () => {
    handleSearch(textFilter, authorFilter, categoryFilter, limitFilter, setQuotes, router);
  }

  const onResetButtonClick = () => {
    handleResetFilters(setTextFilter, setAuthorFilter, setCategoryFilter, setLimitFilter, setQuotes);
    router.push(path);
  }

  useEffect(() => {
    if (searchParams.size) {
      const initText = searchParams.get('text') ?? '';
      const initAuthor = searchParams.get('author') ?? '';
      const initCategory = searchParams.get('category') ?? '';
      const initLimit = searchParams.get('limit') ?? '10';
      setTextFilter({ text: initText });
      setAuthorFilter({ text: initAuthor });
      setCategoryFilter({ text: initCategory });
      setLimitFilter({ text: initLimit });
      handleSearch(textFilter, authorFilter, { text: searchParams.get('category') }, limitFilter, setQuotes);
    }
  }, [searchParams]);

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
      <Input
        type="number"
        value={limitFilter.text ?? ''}
        name="limit"
        placeholder="Limit"
        onChange={({ target: { value } }) => onInputChange(value, 'limit', setLimitFilter)}
        error={ limitFilter.error}
      />
      <Button onClick={ onSearchButtonClick } className="sm:w-auto w-full">
        Search
      </Button>
      <Button onClick={onResetButtonClick} className="sm:w-auto w-full" variant="secondary">
        Reset
      </Button>
    </div>
  );
};
