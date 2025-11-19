export const createSearchQueryParams = (text, author, category) => {
  const query = new URLSearchParams();
  if (text) query.append('text', text);
  if (author) query.append('author', author);
  if (category) query.append('category', category);
  return query.toString();
}