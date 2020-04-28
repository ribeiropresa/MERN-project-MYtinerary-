import {
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE,
    FETCH_CITY_REQUEST,
    FETCH_CITY_SUCCESS,
    FETCH_CITY_FAILURE
} from '../types';

const initialState = {
    loading: false,
    cities: [],
    error: '',
    city: {},
    cityIsLoading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                cities: action.payload,
                error: ''
            }
        case FETCH_CITIES_FAILURE:
            return {
                ...state,
                loading: false,
                cities: [],
                error: action.payload
            } 
        case FETCH_CITY_REQUEST: 
            return {
                ...state,
                cityIsLoading: true,
            }   
        case FETCH_CITY_SUCCESS: 
            return {
                ...state,
                cityIsLoading: false,
                city: action.payload,
                error: ''
            }
        case FETCH_CITY_FAILURE: 
            return {
                ...state,
                cityIsLoading: false,
                city: {},
                error: action.payload
            }
        default: return state
    }
}

export default reducer