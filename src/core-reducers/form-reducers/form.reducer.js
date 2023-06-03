import { 
    initFormObjectReducerKey, removeFormObjectReducerKey, 
    setErrorsReducerKey, updateFromObjectReducerKey 
} from '../../config/actionKeys.config';


const formReducer = (state = {}, action) => {
    switch (action.type) {
        case initFormObjectReducerKey:
            return {
                ...state,
                ...action.payload
            };           
        case removeFormObjectReducerKey:
            delete state[action.payload];
            return state; 
        case updateFromObjectReducerKey:  
            return {
                ...state,
                [action.payload.formGroupKey]:{
                    ...state[action.payload.formGroupKey],
                    [action.payload.inputKey]:action.payload.value,
                    _updateStatus:!state[action.payload.formGroupKey]["_updateStatus"]
                }
            }; 
        case setErrorsReducerKey:
            console.log(action,"=======");
            return {
                ...state,
                [action.payload.formGroupKey]:{
                    ...state[action.payload.formGroupKey],
                    _errors:action.payload.errors,
                    _updateStatus:!state[action.payload.formGroupKey]["_updateStatus"]
                }
            };
        default:
            return state;
    }
};

export default formReducer;