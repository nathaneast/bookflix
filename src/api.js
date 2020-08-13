import axios from 'axios';

const api_key = 'F6802FA00954F880AB63D61DD7E5A9BC604A1BCB049C9D54B3D2B3EF14504E81';

export const bestSellerApi = () => axios.get(`/api/bestSeller.api?key=${api_key}&categoryId=100&output=json`);
export const newBookApi = () => axios.get(`/api/newBook.api?key=${api_key}&categoryId=100&output=json`);
export const recommendApi = () => axios.get(`/api/recommend.api?key=${api_key}&categoryId=100&output=json`);
export const searchApi = term => axios.get(`/api/search.api?key=${api_key}&output=json&query=${term}`);
