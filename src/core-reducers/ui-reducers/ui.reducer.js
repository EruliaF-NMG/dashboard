import { 
    setPageLoadReducerKey
} from '../../config/actionKeys.config';

const initObject={
    isPageLoad:false
}

const uiReducer = (state = initObject, action) => {
    switch (action.type) {
        case setPageLoadReducerKey:
            return {
                ...state,
                isPageLoad:action.payload,
            };           
        default:
            return state;
    }
};

export default uiReducer;