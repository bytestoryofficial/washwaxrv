/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import DICTIONARY from '../constants/Dictionary.js';

export const BASE_API = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: BASE_API + '/api',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(DICTIONARY.accessToken);
    if (!token) return config;
    if (config?.headers) {
      config.headers = { Authorization: `Bearer ${token}` };
      return config;
    }
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

const createReduxApi = ({ prefix, method, endpoint, parameters }) => {
  return createAsyncThunk(prefix, async (payload, { rejectWithValue }) => {
    try {
      if (payload?.params) {
        const response = await api({
          method: method,
          url: endpoint,
          data: payload,
          params: payload?.params,
        });
        return response.data;
      }

      const response = await api({
        method: method,
        url: endpoint,
        data: payload,
        params: parameters,
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        return rejectWithValue({
          error: true,
          message: error.response.data.error.detail,
        });
      } else {
        return rejectWithValue({ error: true, message: error.data });
      }
    }
  });
};

export { createReduxApi };
export default api;
