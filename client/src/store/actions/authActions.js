import axios from 'axios';
import { returnErrors } from './errorsActions';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../types';

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    axios.get('/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}

export const register = (newUser) => dispatch => {
    console.log(newUser)
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const body = JSON.stringify(newUser);
    axios.post('/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
        });
    });
}

export const login = ({ email, password }) => dispatch => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const body = JSON.stringify({ email, password });
    axios.post('/auth', body, config)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            return dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
        });
    });
}

export const logout = () => {
    localStorage.removeItem('token')
    return {
        type: LOGOUT_SUCCESS
    }
}

export const tokenConfig = () => {

    const token = localStorage.getItem('token');

    //headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    if(token) {
        config.headers['x-auth-token'] = token;
    };

    return config;
}