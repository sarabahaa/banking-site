import Axios from 'axios';

const AxiosInstance = Axios.create({
  baseURL: 'https://localhost:3000',
});


export default AxiosInstance;