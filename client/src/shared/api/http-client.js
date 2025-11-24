import { normalizeApiError } from "@/shared/lib/error-handler/normalize-errors";

export class HttpClient {
  constructor(baseURL, defaultHeaders = {}, fetchFn = fetch) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...defaultHeaders,
    };

    this.fetchFn = fetchFn.bind(globalThis);
  }

  buildUrl(path, params) {
    if (!params) return `${this.baseURL}${path}`;

    const url = new URL(`${this.baseURL}${path}`);
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.append(k, v);
    });

    return url.toString();
  }

  async request(method, path, { params, body, headers } = {}) {
    const url = this.buildUrl(path, params);
    const options = {
      method,
      headers: { ...this.defaultHeaders, ...headers },
    };

    if (body) options.body = JSON.stringify(body);

    try {
      const res = await this.fetchFn(url, options);

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        const normalized = normalizeApiError(error, res.statusText);

        return {
          ok: false,
          errors: normalized,
        };
      }

      if (res.status === 204) {
        return { ok: true, data: null };
      }

      return { ok: true, data: await res.json() };

    } catch (err) {
      const normalized = normalizeApiError(err);

      return {
        ok: false,
        error: normalized,
      };
    }
  }

  get(path, options) {
    return this.request("GET", path, options);
  }

  post(path, body, options = {}) {
    return this.request("POST", path, { ...options, body });
  }

  patch(path, body, options = {}) {
    return this.request("PATCH", path, { ...options, body });
  }

  delete(path, options) {
    return this.request("DELETE", path, options);
  }
}
