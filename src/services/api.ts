// faz comunicação entre front-end e back-end

import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:4000',
});