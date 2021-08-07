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

export const makeRequest = async (params: MakeRequestParams) => axiosInstance.request(params);
