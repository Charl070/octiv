import axios from 'axios';

const API_BASE_URL = 'https://api-octiv-test.vercel.app/api/places';

export const fetchPlaces = async (params: { page: number; limit: number }) => {
  try {
    const { data } = await axios.get(API_BASE_URL, { params });
    return data;
  } catch (error: any) {
    console.error('Error fetching places:', error);
    throw new Error(
      error?.response?.data?.message ||
        'Something went wrong while fetching places'
    );
  }
};

export const fetchPlaceById = async (id: string) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/${id}`);
    return data;
  } catch (error: any) {
    console.error('Error fetching place by ID:', error);
    throw new Error(
      error?.response?.data?.message ||
        'Something went wrong while fetching the place details'
    );
  }
};
