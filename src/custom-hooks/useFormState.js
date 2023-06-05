import { useSelector,useDispatch } from 'react-redux';
import { _get } from '../helpers/lodash.wrappers';
import { changeInput } from '../helpers/core-actions/form.action';

/**
 * set and get input values for global state
 * @param {*} setGroupName 
 * @param {*} name 
 * @returns 
 */
const useFormState=(setGroupName,name)=>{

    const dispatch = useDispatch();
    const inputValue = useSelector(state => _get(state,`formState.${setGroupName}.${name}`,''));
    const errors = useSelector(state => _get(state,`formState.${setGroupName}._errors`,[]));

    const getErrorMessage = () => {
        const errorObject = errors.find(item => item.property === name)||{};
        return errorObject.message || "";
    }

    const onChangeInput = (value) =>{
        dispatch(changeInput(setGroupName,name,value));
    }

    return [inputValue,getErrorMessage,onChangeInput];

}

export {
    useFormState
}