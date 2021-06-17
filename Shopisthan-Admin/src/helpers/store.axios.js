import axios from 'axios';
import { api } from '../urlConfig';

const token = window.localStorage.getItem('storetoken');

const storeAxiosIntance = axios.create({
   baseURL: api,
   headers:{
     'Authorization': token ? "Bearer " + token : ""
   }
});

export default storeAxiosIntance;