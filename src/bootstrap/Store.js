import createSagaMiddleware from 'redux-saga';
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import formReducer from '../core-reducers/form-reducers/form.reducer';
import uiReducer from '../core-reducers/ui-reducers/ui.reducer';
import authReducer from '../core-reducers/auth-reducers/auth.reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
    formState: formReducer,
    uiState: uiReducer,
    authState: authReducer,
})

const store = createStore(
    allReducers,
   applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

const Store =({
    children=null
})=>{
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Store;