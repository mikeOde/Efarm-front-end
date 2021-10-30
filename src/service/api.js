import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

const cookie = localStorage.getItem('access_token'); // gets the token that is saved in the local storage

const token = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + cookie
    },
}

export default{

    checkLogin: (loginData) =>
    axios.post(`${BASE_URL}/login`, loginData),

    checkSignup: (signupData) =>
    axios.post(`${BASE_URL}/register`, signupData)
}