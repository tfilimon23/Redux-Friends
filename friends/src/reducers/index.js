import {
    LOGIN_START,
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE,
} from '../actions';

const initialState = {
    friends: [],
    error: null,
    loggingIn: false,
    fetchingFriends: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: {
            return {
                ...state,
                loggingIn: true
            };
        }
        case GET_FRIENDS_START: {
            return {
                ...state,
                error: '',
                fetchingFriends: true,
            };
        }
        case GET_FRIENDS_SUCCESS: {
            return {
                ...state,
                error: '',
                fetchingFriends: false,
                friends: action.payload
            };
        }
        case GET_FRIENDS_FAILURE: {
            return {
                ...state,
                error: '',
                fetchingFriends: false
            }
        }
        default:
        return state;
    }
};

export default reducer;

