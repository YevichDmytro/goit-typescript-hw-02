import axios from 'axios';
import { ResponseData } from './types/Images.types';

const accessKey = 'X9ld6t78k0M6uPfb9gIRRXGI8BJPkaRixmcuzYVqwmQ';

axios.defaults.baseURL = `https://api.unsplash.com`;

export const fetchGallery = async (
  query: string,
  page: number
): Promise<ResponseData> => {
  const params = {
    client_id: accessKey,
    query: query,
    page: page,
    per_page: 20,
  };

  try {
    const response = await axios.get('/search/photos', {
      params: params,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
