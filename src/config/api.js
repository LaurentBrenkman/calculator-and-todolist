import axios from 'axios';

// Create base URL API
export const API = axios.create({
  baseURL: 'https://api.kontenbase.com/query/api/v1/060d6e58-6d24-49d1-be31-16c07ff237a8',
});
