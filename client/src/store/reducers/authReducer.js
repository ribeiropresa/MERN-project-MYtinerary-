import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            };
        default:
            return state
    }
}



// DELETE AFTER TEST

// const users = (state = initialState, action) => {
//     switch (action.type) {
//         case GETALL_REQUEST:
//             return {
//                 loading: true
//             };
//         case GETALL_SUCCESS:
//             return {
//                 items: action.users
//             };
//         case GETALL_FAILURE:
//             return {
//                 error: action.error
//             };
//         case DELETE_REQUEST:
//             return {
//                 ...state,
//                 item: state.items.map(user =>
//                     user.id === action.id
//                         ? {...user, deleting: true}
//                         : user
//                 )
//             };
//         case DELETE_SUCCESS:
//             return {
//                 items: state.items.filter(user => user.id !== action.id)
//             };
//         case DELETE_FAILURE:
//             return {
//                 ...state,
//                 items: state.items.map(user => {
//                     if (user.id === action.id) {
//                         const {deleting, ...userCopy} = user;
//                         return { ...userCopy, deleteError: action.error};
//                     }
//                     return user;
//                 })
//             };
//         default:
//             return state
//     }
// }

// export default users