import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bY8ZBkPEfamEECgS589dFoxCEB7usxYkqQcc0AB98-M'
    }
});