import { 
    requestByAPIKey
} from '../../config/actionKeys.config';
import {emptyFunction} from '../../config/defaultProps.config';

/**
 * request api data
 * @param {String} apiUrl 
 * @param {String} stateKey 
 * @param {Function} cb 
 * @returns 
 */
export const requestData=(apiUrl,stateKey,cb=emptyFunction)=>({
    type: requestByAPIKey,
    payload:{
        apiUrl,
        stateKey,
        cb
    }
});