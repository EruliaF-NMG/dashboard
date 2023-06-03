import { put, takeLatest } from 'redux-saga/effects';

import { 
    setPageLoadKey,
    
    setPageLoadReducerKey
} from '../../config/actionKeys.config';

function* setPageLoad({ payload }) { 
    yield put({ 
        type: setPageLoadReducerKey, 
        payload
    });
}

function* uiActionWatcher() {
    yield takeLatest(setPageLoadKey, setPageLoad);
}

export default uiActionWatcher;