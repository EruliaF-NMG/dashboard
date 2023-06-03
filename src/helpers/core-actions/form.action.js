import { 
    initFormObjectKey, removeFormObjectKey, 
    setErrorsKey, updateFromObjectKey 
} from '../../config/actionKeys.config';

/**
 * Generate form group object
 * @param {String} formGroupKey 
 * @param {Boolean} isLoad 
 * @param {Object} formObject 
 * @param {Array} error 
 */
export const initFormObject = (formGroupKey,isLoad=false,formObject={},error=[]) => ({
    type: initFormObjectKey,
    payload: {
        [formGroupKey]:{
            _formGroupKey:formGroupKey,
            _updateStatus:false,
            _onLoad:isLoad,
            _errors:error,
            ...formObject,
        }
    }
});

/**
 * @description Remove form group
 * @param {String} formGroupKey 
 */
export const removeFromGroup=(formGroupKey)=>({
    type: removeFormObjectKey,
    formGroupKey,
});

/**
 * Set form error
 * @param {String} formGroupKey 
 * @param {Array} errors 
 */
export const setFormError = (formGroupKey,errors) => ({
    type: setErrorsKey,
    payload:{
        formGroupKey,
        errors,
    }
});

/**
 * Set form input change
 * @param {String} formGroupKey 
 * @param {String} inputKey 
 * @param {String|Number} value 
 */
export const changeInput = (formGroupKey="",inputKey="",value="") => ({
    type: updateFromObjectKey,
    payload: {
        formGroupKey,
        inputKey,
        value
    }
});