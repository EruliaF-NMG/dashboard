import { useSelector,useDispatch } from 'react-redux';
import { InputBox } from './InputBox.molecule';
import { emptyFunction, htmlInputTypes } from '../../../../config/defaultProps.config';
import { _get } from '../../../../helpers/lodash.wrappers';
import { changeInput } from '../../../../helpers/core-actions/form.action';

const InputBoxWithState = ({
    name="",
    inputStyleClass="",
    placeholder="",
    type=htmlInputTypes.TEXT,
    wrapperStyleClass="",
    iconElement=null,
    setGroupName="",
    onChange=emptyFunction,
    onClick=emptyFunction
}) => {

    const dispatch = useDispatch();
    const inputValue = useSelector(state => _get(state,`formState.${setGroupName}.${name}`,''));
    const errors = useSelector(state => _get(state,`formState.${setGroupName}._errors`,[]));

    const getErrorMessage = () => {
        const errorObject = errors.find(item => item.property === name)||{};
        return errorObject.message || "";
    }

    return (
        <InputBox
            name={name}
            inputStyleClass={inputStyleClass}
            placeholder={placeholder}
            value={inputValue}
            errorText={getErrorMessage()}
            type={type}
            wrapperStyleClass={wrapperStyleClass}
            iconElement={iconElement}
            onChange={(value,key)=>{
                dispatch(changeInput(setGroupName,name,value));
                onChange(value,key);
            }}
            onClick={onClick}
        />
    )
}

export {
    InputBoxWithState
}