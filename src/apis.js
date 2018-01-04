import axios from 'axios';

export const afterShipSlugs = {
    'aftership.com': 'australia-post',
    'track24.net': 'australia-post'
};

export const afterShipApi = axios.create({
    baseURL: 'https://api.aftership.com/v4',
    timeout: 60000,
    headers: {
        'aftership-api-key': '98a2519a-ec98-47db-9467-f7af26e1a2e8',
        'Content-Type': 'application/json'
    }
});
