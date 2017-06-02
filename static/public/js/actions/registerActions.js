import axios from 'axios';

export function userRegisterRequest(data) {
    return dispatch => {
        return axios.post('/api/users', data);
    }
}
