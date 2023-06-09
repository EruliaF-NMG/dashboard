import { all } from 'redux-saga/effects';
import formActionWatcher from '../core-reducers/form-reducers/form.saga';
import uiActionWatcher from '../core-reducers/ui-reducers/ui.saga';
import authActionWatcher from '../core-reducers/auth-reducers/auth.saga';
import responseActionWatcher from '../core-reducers/response-reducers/response.saga';

export default function* rootSaga() {
    yield all([
        formActionWatcher(),
        uiActionWatcher(),
        authActionWatcher(),
        responseActionWatcher(),
    ]);
}