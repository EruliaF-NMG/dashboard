import { 
    authUserKey,
    syncWithLocalStorageKey,
    guestUserKey
} from '../../config/actionKeys.config';

export const loginUser=(formObject)=>({
    type: authUserKey,
    payload:formObject
});

export const syncWithLocalStorage=(payload)=>({
    type: syncWithLocalStorageKey,
    payload
});

export const setASGuestUser=()=>({
    type: guestUserKey,
});