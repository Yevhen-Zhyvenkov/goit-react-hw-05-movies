const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = 'd871c37f03af5f9d732b89f21e2b613f';

export const fetchQueryMovie = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}${query}api_key=${API_KEY}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Error');
    }
  } catch (error) {
    console.log(error);
  }
};
