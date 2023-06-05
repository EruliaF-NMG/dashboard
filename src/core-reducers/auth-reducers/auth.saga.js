import { put, takeLatest,call } from 'redux-saga/effects';

import { callAPI } from '../../helpers/axios.wrapper';
import { authAPI } from '../../config/apiEndPoints.config';
import { decodeJWT } from '../../helpers/common.helper';
import { setAuthData, logoutUser } from '../../helpers/manageStorage.helper';
import { 
    removeAuthUserKey,
    removeAuthDataKey,
    authUserKey,
    setAuthDataKey,
    setPageLoadReducerKey,
    syncWithLocalStorageKey,
    guestUserKey
} from '../../config/actionKeys.config';

/**
 * authenticate user
 * @param {Object}  
 */
function* login({payload}) { 
    yield put({ 
        type: setPageLoadReducerKey, 
        payload:true
    });
    // call api
    const authResponse = yield call(callAPI,authAPI.url,"POST",payload,false);
    // get Data from JWT
    let userData = decodeJWT( authResponse.data.accessToken );
    userData = {
        ...userData,
        isAuth:true
    }

    yield put({ 
        type: setAuthDataKey, 
        payload:userData
    });

    setAuthData(userData);

    yield put({ 
        type: setPageLoadReducerKey, 
        payload:false
    });

}

/**
 * remove login user
 */
function* logOut() { 
    logoutUser();
    yield put({ 
        type: removeAuthDataKey, 
    });
}

/**
 * sync with LocalStorage
 */
function* syncWithLocalStorage({payload}) { 
    yield put({ 
        type: setAuthDataKey, 
        payload
    });
}


/**
 * sync with LocalStorage
 */
function* setASGuestUser() { 
    yield put({ 
        type: removeAuthDataKey,
    });
}

function* authActionWatcher() {
    yield takeLatest(authUserKey, login);
    yield takeLatest(removeAuthUserKey, logOut);
    yield takeLatest(syncWithLocalStorageKey, syncWithLocalStorage);
    yield takeLatest(guestUserKey, setASGuestUser);
}

export default authActionWatcher;