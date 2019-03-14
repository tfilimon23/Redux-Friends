import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('http://localhost:5000/api/login', creds).then(res => {
    localStorage.setItem('token', res.data.payload);
    });
};

export const getFriends = () => dispatch => {
    dispatch ({ type: GET_FRIENDS_START });

    axios
    .get('http://localhost:5000/api/friends', {
        headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res =>{
        console.log(res.data);
        dispatch ({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch ({ types: GET_FRIENDS_FAILURE, payload: err.response });
    });
};

export const addFriend = () => dispatch => {
    
}