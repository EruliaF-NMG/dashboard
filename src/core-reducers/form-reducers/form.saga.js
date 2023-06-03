import { put, takeLatest } from 'redux-saga/effects';

import { 
    initFormObjectKey, removeFormObjectKey, 
    setErrorsKey, updateFromObjectKey,
    
    initFormObjectReducerKey, removeFormObjectReducerKey, 
    setErrorsReducerKey, updateFromObjectReducerKey 
} from '../../config/actionKeys.config';

/**
 * Generate form group object
 * @param {Object} payload 
 */
function* initFromObject({payload}) { 
    yield put({ 
        type: initFormObjectReducerKey, 
        payload:payload
    });
}

/**
 * @description Remove form group
 * @param {String} formGroupKey 
 */
function* removeFromGroup({formGroupKey}) { 
    yield put({ 
        type: removeFormObjectReducerKey, 
        payload:formGroupKey
    });
}

/**
 * Set form error
 * @param {String} formGroupKey 
 * @param {Object} payload 
 */
function* setFormError({payload}) { 
    yield put({ 
        type: setErrorsReducerKey, 
        payload,
    });
}

/**
 * Set form input change
 * @param {Object} payload 
 */
function* changeInput({payload}) { 
    yield put({ 
        type: updateFromObjectReducerKey, 
        payload,
    });
}

function* formActionWatcher() {
    yield takeLatest(initFormObjectKey, initFromObject);
    yield takeLatest(removeFormObjectKey, removeFromGroup);
    yield takeLatest(setErrorsKey, setFormError);
    yield takeLatest(updateFromObjectKey, changeInput);
}

export default formActionWatcher;