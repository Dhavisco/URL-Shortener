import axios from 'axios';

interface ShortenResponse {
  result_url: string;
}

export const shortenUrl = async (url: string): Promise<ShortenResponse> => {
  const response = await axios.post('https://shortlyurl-proxy.onrender.com/shorten', { url });
  return response.data;
};
