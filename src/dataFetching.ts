import axios from 'axios';
import { toast } from 'react-toastify';
import getErrorMessage from './helpers/getErrorMessage';

export const fetchListingsData = async ({
  minLat,
  maxLat,
  minLon,
  maxLon,
  searchQuery,
}: {
  minLat: number;
  maxLat: number;
  minLon: number;
  maxLon: number;
  searchQuery: string;
}) => {
  try {
    const response = await axios.get(
      `https://listings-app-backend.onrender.com/listings?minLat=${minLat}&maxLat=${maxLat}&minLon=${minLon}&maxLon=${maxLon}${
        searchQuery ? `&searchQuery=${searchQuery}` : ''
      }`,
    );
    return response.data.data.listings;
  } catch (error) {
    toast.error(getErrorMessage(error));
    return [];
  }
};

export const createNewListing = async (formData: FormData) => {
  try {
    const response = await axios.post(
      'https://listings-app-backend.onrender.com/listings',
      formData,
    );
    return response;
  } catch (error) {
    toast.error(getErrorMessage(error));
    return getErrorMessage(error);
  }
};
