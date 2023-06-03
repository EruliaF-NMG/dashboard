import axios from 'axios';


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