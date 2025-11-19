import { fetchQuotesByQueryParams } from '@/entities/quote/model/fetch-quotes-by-query-params';
import { FILTERS_NAMES } from './constants';
import { CATEGORY_REGEX, TEXT_TOO_SHORT_ERROR, CATEGORY_TEXT_NOT_VALID_ERROR } from '@/shared/constants';


export const createSearchQueryParams = (text, author, category) => {
  const query = new URLSearchParams();
  if (text) query.append('text', text);
  if (author) query.append('author', author);
  if (category) query.append('category', category);
  return query.size ? '&' + query.toString() : '';
}

export const isFiltersNotValid = (textFilter, authorFilter, categoryFilter) => textFilter.error || authorFilter.error || categoryFilter.error

export const handleSearch = async (textFilter = {}, authorFilter = {}, categoryFilter = {}, setQuotes) => {
  if(isFiltersNotValid(textFilter, authorFilter, categoryFilter)) return
  const queryString = createSearchQueryParams(textFilter.text, authorFilter.text, categoryFilter.text);
  if(!queryString) return
  const quotes = await fetchQuotesByQueryParams(queryString);
  setQuotes(quotes);
};

export const handleResetFilters = (setTextFilter, setAuthorFilter, setCategoryFilter, setQuotes) => {
  setTextFilter({});
  setAuthorFilter({});
  setCategoryFilter({});
  setQuotes([]);
};

export const onInputChange = (text, name, setFilter) => {
  let error;
  if(name === FILTERS_NAMES.text || name === FILTERS_NAMES.author) error = text.length > 0 && text.length < 2 && TEXT_TOO_SHORT_ERROR;
  if(name === FILTERS_NAMES.category) error = text && !CATEGORY_REGEX.test(text) && CATEGORY_TEXT_NOT_VALID_ERROR;
  setFilter({text, error})
}