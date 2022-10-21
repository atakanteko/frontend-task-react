import axios from 'axios';

const service = axios.create({
    timeout: 20000,
    headers: {
        common: {
            Accept: 'application/json',
        },
        'Content-Type': 'application/json; charset=UTF-8',
    },
});

export default service;
