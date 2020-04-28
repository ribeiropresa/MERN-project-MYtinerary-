import axios from 'axios';
import {
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE,
    FETCH_CITY_REQUEST,
    FETCH_CITY_SUCCESS,
    FETCH_CITY_FAILURE
} from '../types';

export const fetchCitiesRequest = () => {
    return {
        type: FETCH_CITIES_REQUEST
    }
}

export const fetchCityRequest = () => {
    return {
        type: FETCH_CITY_REQUEST
    }
}

export const fetchCitiesSuccess = cities => {
    return {
        type: FETCH_CITIES_SUCCESS,
        payload: cities
    }
}

export const fetchCitySuccess = city => {
    return {
        type: FETCH_CITY_SUCCESS,
        payload: city
    }
}

export const fetchCitiesFailure = error => {
    return {
        type: FETCH_CITIES_FAILURE,
        payload: error
    }
}

export const fetchCityFailure = error => {
    return {
        type: FETCH_CITY_FAILURE,
        payload: error
    }
}

export const fetchCities = () => {
    return (dispatch) => {
        dispatch(fetchCitiesRequest)
        axios.get(`/cities/`)
            .then(response => {
                if (response.data.success) {
                const cities = response.data.cities
                dispatch(fetchCitiesSuccess(cities))
                } else {
                    const errorMsg = response.data.msg
                    dispatch(fetchCitiesFailure(errorMsg)) 
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCitiesFailure(errorMsg))
            })
    }
}

export const fetchOneCities = (city) => {
    return (dispatch) => {
        dispatch(fetchCityRequest)
        axios.get(`/cities/${city}`)
            .then(response => {
                if (response.data.success) {
                    const city = response.data.city
                    dispatch(fetchCitySuccess(city))
                } else {
                    const errorMsg = response.data.msg
                    dispatch(fetchCityFailure(errorMsg)) 
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCityFailure(errorMsg))
            })
    }
}

