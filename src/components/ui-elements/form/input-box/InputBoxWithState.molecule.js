import PropTypes from 'prop-types';
import { InputBox } from './InputBox.molecule';
import { emptyFunction, htmlInputTypes } from '../../../../config/defaultProps.config';
import { useFormState } from '../../../../custom-hooks/useFormState';

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
    const [inputValue,getErrorMessage,onChangeInput] = useFormState(setGroupName,name);

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
                onChangeInput(value);
                onChange(value,key);
            }}
            onClick={onClick}
        />
    )
}

InputBoxWithState.propTypes = {
    name: PropTypes.string,
    inputStyleClass: PropTypes.string,
    type: PropTypes.string,
    wrapperStyleClass: PropTypes.string,
    setGroupName:PropTypes.string,
    iconElement:PropTypes.node,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
}

export {
    InputBoxWithState
}