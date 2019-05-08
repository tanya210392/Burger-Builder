import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-841fc.firebaseio.com/'
});

export default instance;