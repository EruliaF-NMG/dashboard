import { 
    authUserKey,
    syncWithLocalStorageKey,
    guestUserKey,
    removeAuthUserKey
} from '../../config/actionKeys.config';

/**
 * init form object
 * @param {Object} formObject 
 * @returns 
 */
export const loginUser=(formObject)=>({
    type: authUserKey,
    payload:formObject
});

/**
 * sync With LocalStorage
 * @param {Object} payload 
 * @returns 
 */
export const syncWithLocalStorage=(payload)=>({
    type: syncWithLocalStorageKey,
    payload
});

/**
 * update user state for guest
 * @returns 
 */
export const setASGuestUser=()=>({
    type: guestUserKey,
});

/**
 * logout user and clear state
 * @returns 
 */
export const logoutUser=()=>({
    type: removeAuthUserKey,
});
