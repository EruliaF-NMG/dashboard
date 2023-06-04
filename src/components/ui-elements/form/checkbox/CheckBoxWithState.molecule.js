import { emptyFunction } from '../../../../config/defaultProps.config';
import { CheckBox } from './CheckBox.molecule';
import { changeInput } from '../../../../helpers/core-actions/form.action';
import { useFormState } from '../../../../custom-hooks/useFormState';

const CheckBoxWithState = ({
    name="",
    inputStyleClass="",
    wrapperStyleClass="",
    labelStyleClass="",
    labelElement=null,
    setGroupName="",
    onChange=emptyFunction
}) => {

    const [inputValue,getErrorMessage,onChangeInput] = useFormState(setGroupName,name);

    return (
        <CheckBox
            name={name}
            inputStyleClass={inputStyleClass}
            wrapperStyleClass={wrapperStyleClass}
            labelStyleClass={labelStyleClass}
            labelElement={labelElement}
            isChecked={inputValue}
            onChange={(value,key)=>{
                onChangeInput(value);
                onChange(value,key);
            }}
        />
    )
}

export {
    CheckBoxWithState
}