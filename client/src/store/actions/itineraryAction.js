import axios from 'axios';
import {
    FETCH_ITINERARIES_REQUEST,
    FETCH_ITINERARIES_SUCCESS,
    FETCH_ITINERARIES_FAILURE
} from '../types';

export const fetchItinerariesRequest = () => {
    return {
        type: FETCH_ITINERARIES_REQUEST
    }
}

export const fetchItinerariesSuccess = Itineraries => {
    return {
        type: FETCH_ITINERARIES_SUCCESS,
        payload: Itineraries
    }
}

export const fetchItinerariesFailure = error => {
    return {
        type: FETCH_ITINERARIES_FAILURE,
        payload: error
    }
}

export const fetchItineraries = (city) => {
    return (dispatch) => {
        dispatch(fetchItinerariesRequest)
        axios.get(`/itineraries/${city}`)
            .then(response => {
                if (response.data.success) {
                    const itineraries = response.data.itineraries;
                    dispatch(fetchItinerariesSuccess(itineraries))
                } else {
                    const errorMsg = response.data.msg
                    dispatch(fetchItinerariesFailure(errorMsg)) 
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchItinerariesFailure(errorMsg))
            })
    }
}