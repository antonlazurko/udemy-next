export function normalizeApiError(error, statusText) {
  return {
    statusText: statusText ||
      error?.message ||
      error?.statusText ||
      "Unexpected API Error",
    errors: error?.errors || [{path: error?.message }] || error,
  };
}
