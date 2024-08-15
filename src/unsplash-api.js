import axios from 'axios';

const accessKey = 'X9ld6t78k0M6uPfb9gIRRXGI8BJPkaRixmcuzYVqwmQ';

axios.defaults.baseURL = `https://api.unsplash.com`;

export const fetchGallery = async (query, page) => {
  const params = {
    client_id: accessKey,
    query: query,
    page: page,
    per_page: 20,
  };

  const response = await axios.get('/search/photos', {
    params: params,
  });

  console.log(response.data);
  return response.data;
};
