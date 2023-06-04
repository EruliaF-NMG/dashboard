import axios from 'axios';
import {  _get } from './lodash.wrappers';
import { checkUserINLocalStorage } from './manageStorage.helper';

/**
 * Generate api header
 * @param { Boolean } isAuth 
 * @returns 
 */
const getHeader=(isAuth)=>{
    const header = {
        accept: 'application/json',
        'Content-Type':'application/json'
    };

    if (isAuth === true) {
        let userData = checkUserINLocalStorage();
        const token = _get(userData, 'result.token', '');
    
        if (token === '') window.location.reload();
    
        header['Authorization'] = `Bearer ${token}`;
    }
    return header;
}

/**
 * request data from api
 * @param {String} apiUrl api parth
 * @param {Object} data request body
 * @param {String} method HTTP method
 */
const callAPI = async (
    apiUrl=null,
    method="GET",
    data={},
    isAuth=true
) => {
    return axios({
        headers: getHeader(isAuth),
        method: method,
        url: apiUrl,
        data: data,
    });
};

export {
    callAPI
}