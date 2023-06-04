import { 
    setRequestDataKey
} from '../../config/actionKeys.config';

const initObject={
}

const responseReducer = (state = initObject, action) => {
    switch (action.type) {
        case setRequestDataKey:
            return {
                ...state,
                [action.payload.stateKey]:action.payload.result
            };           
        default:
            return state;
    }
};

export default responseReducer;