import { getQuotesByQueryParams } from '@/entities/quote/model/get-quotes-by-query-params';
import { FILTERS_NAMES } from './constants';
import { CATEGORY_REGEX, TEXT_TOO_SHORT_ERROR, CATEGORY_VALIDATION_ERROR, LIMIT_VALIDATION_ERROR, LIMIT_REQUIRED_ERROR } from '@/shared/constants';
import { fetchErrorNotification } from '@/shared';

export const createSearchQueryParams = (text, author, category, limit) => {
  const query = new URLSearchParams();
  if (text) query.append(FILTERS_NAMES.text, text);
  if (author) query.append(FILTERS_NAMES.author, author);
  if (category) query.append(FILTERS_NAMES.category, category);
  if (limit) query.append(FILTERS_NAMES.limit, limit);
  return query.size ? '?' + query.toString() : '';
}

export const isFiltersNotValid = (textFilter, authorFilter, categoryFilter, limitFilter) => textFilter.error || authorFilter.error || categoryFilter.error || limitFilter.error;

export const handleSearch = async (textFilter = {}, authorFilter = {}, categoryFilter = {}, limitFilter = {}, setQuotes, router) => {
  if(isFiltersNotValid(textFilter, authorFilter, categoryFilter, limitFilter)) return
  const queryString = createSearchQueryParams(textFilter.text, authorFilter.text, categoryFilter.text, limitFilter.text);
  if(!queryString) return
  router?.push(queryString);
  try {
    const { data : quotes, ok, errors } = await getQuotesByQueryParams(queryString);
    if (!ok) {
      throw errors
    }
    setQuotes(quotes);
  } catch (errors) {
    fetchErrorNotification(errors)
  }
};

export const handleResetFilters = (setTextFilter, setAuthorFilter, setCategoryFilter, setLimitFilter, setQuotes) => {
  setTextFilter({});
  setAuthorFilter({});
  setCategoryFilter({});
  setLimitFilter({});
  setQuotes([]);
};

const validateFilter = (name, value) => {
  switch (name) {
    case FILTERS_NAMES.text:
    case FILTERS_NAMES.author:
      return value && value.length < 2 ? TEXT_TOO_SHORT_ERROR : null;

    case FILTERS_NAMES.category:
      return value && !CATEGORY_REGEX.test(value)
        ? CATEGORY_VALIDATION_ERROR
        : null;

    case FILTERS_NAMES.limit:
      if (value === '') return LIMIT_REQUIRED_ERROR;
      const n = Number(value);
      return n < 1 || n > 500 ? LIMIT_VALIDATION_ERROR : null;

    default:
      return null;
  }
};

export const onInputChange = (text, name, setFilter) => {
  const error = validateFilter(name, text);
  setFilter({text, error})
}