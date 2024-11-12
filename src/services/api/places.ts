import axios from 'axios';

const API_BASE_URL = 'https://api-octiv-test.vercel.app/api/places';

export const fetchPlaces = async (params: { page: number; limit: number }) => {
  const { data } = await axios.get(API_BASE_URL, { params });
  return data;
};

export const fetchPlaceById = async (id: string) => {
  const { data } = await axios.get(`${API_BASE_URL}/${id}`);
  return data;
};
