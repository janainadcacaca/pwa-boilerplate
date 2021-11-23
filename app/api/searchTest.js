import { get } from './request';

export const search = (text) => {
  const endpoint = 'https://dummyapi.io/data/v1/user';
  return get(endpoint, { query: text });
};
