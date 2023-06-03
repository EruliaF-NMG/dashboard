import { 
    setAuthDataKey,
    removeAuthDataKey
} from '../../config/actionKeys.config';

const initObject={
    userName:"",
    profileImage:"",
    token:"",
    isAuth:null
}

const authReducer = (state = initObject, action) => {
    switch (action.type) {
        case setAuthDataKey:
            return {
                ...state,
                userName:action.payload.userName,
                profileImage:action.payload.profileImage,
                token:action.payload.token,
                isAuth:action.payload.isAuth
            };           
        case removeAuthDataKey:
            console.log("4");
            return {
                ...initObject,
                isAuth:false
            }
        default:
            return state;
    }
};

export default authReducer;