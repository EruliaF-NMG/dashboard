import { put, takeLatest,call } from 'redux-saga/effects';

import { callAPI } from '../../helpers/axios.wrapper';
import { 
    requestByAPIKey,
    setRequestDataKey
} from '../../config/actionKeys.config';

/**
 * request Data by api
 * @param {Object}  
 */
function* requestData({payload}) { 
    // call api
    try{
        const result = yield call(callAPI,payload.apiUrl);
        if(result.data.status !== "ERROR") {
            yield put({ 
                type: setRequestDataKey, 
                payload: {
                    stateKey:payload.stateKey,
                    result:result.data.results
                }
            });
            payload.cb(null,result);
        }
    } catch(ex){
        alert(ex.response.data.error);
    }
}

function* responseActionWatcher() {
    yield takeLatest(requestByAPIKey, requestData);
}

export default responseActionWatcher;