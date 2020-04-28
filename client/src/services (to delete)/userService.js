//old code

// import authHeader  from './authHeader';

// export const handleResponse = (response) => {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 logoutUser();
//                 window.location.reload(true);
//             }
//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }
//         return data;
//     });
// }

// export const loginUser = (user) => {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };
//     console.log('carlos')
//     return fetch(`/users/login`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             return user;
//         });
// }

// export const logoutUser = () => {
//     localStorage.removeItem('token');
// }

// // export const getAllUsers = () => {
// //     const requestOptions = {
// //         method: 'GET',
// //         headers: authHeader()
// //     };
// //     return fetch(`/users`, requestOptions).then(handleResponse);
// // }

// export const getUserById = (id) => {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };
//     return fetch(`/users/${id}`, requestOptions).then(handleResponse);
// }

// export const registerUser = (user) => {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };
//     return fetch(`/users/registration`, requestOptions).then(handleResponse);
// }

// export const updateUser = (user) => {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };
//     return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);
// }

// // export const deleteUser = (id) => {
// //     const requestOptions = {
// //         method: 'DELETE',
// //         headers: authHeader()
// //     };
// //     return fetch(`/users/${id}`, requestOptions).then(handleResponse);
// // }

