import axios, { Method } from 'axios';
import { BASE_URL } from '../constants/config';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-type': 'application/json' },
});

interface MakeRequestParams {
  method: Method;
  url?: string;
  baseURL?: string;
  headers?: any;
  params?: any;
  data?: any;
}

const DEFAULT_ERROR_MESSAGE = 'Something went wrong';

export const makeRequest = async (params: MakeRequestParams) => {
  try {
    const { data } = await axiosInstance.request(params);
    return { data, error: null };
  } catch (err) {
    return {
      data: { success: false },
      error: {
        message: DEFAULT_ERROR_MESSAGE,
      },
    };
  }
};
