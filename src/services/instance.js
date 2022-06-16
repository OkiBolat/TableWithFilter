import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://627e7af6271f386ceff90b8a.mockapi.io/items'
});