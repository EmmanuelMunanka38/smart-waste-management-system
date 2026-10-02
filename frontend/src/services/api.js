import { mockApiFetch } from './mockApi.js'

const useMockData = import.meta.env.MODE !== 'test' && import.meta.env.VITE_USE_MOCK_DATA !== 'false'

export function apiFetch(input, options) {
  return useMockData ? mockApiFetch(input, options) : fetch(input, options)
}
