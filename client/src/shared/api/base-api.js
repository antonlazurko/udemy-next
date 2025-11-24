import { HttpClient } from './http-client';

export const api = new HttpClient(process.env.NEXT_PUBLIC_API_URL);
