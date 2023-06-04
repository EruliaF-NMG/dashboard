import { 
    requestByAPIKey
} from '../../config/actionKeys.config';
import {emptyFunction} from '../../config/defaultProps.config';

export const requestData=(apiUrl,stateKey,cb=emptyFunction)=>({
    type: requestByAPIKey,
    payload:{
        apiUrl,
        stateKey,
        cb
    }
});