import { create } from 'apisauce';

const api = create({
  baseURL: 'https://api.gitbub.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'GitHubApp',
  },
});

export default api;
