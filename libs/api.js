import axios from 'axios';
import Endpoints from '../constants/Endpoints';

export const fetchCircles = () => {
    return axios.get(Endpoints.CIRCLES)
        .then(res => res.data)
        .then(data => ({data}))
        .catch(error => ({error}));
}