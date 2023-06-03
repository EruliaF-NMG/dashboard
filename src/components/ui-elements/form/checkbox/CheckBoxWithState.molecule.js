import { useSelector,useDispatch } from 'react-redux';

import { emptyFunction } from '../../../../config/defaultProps.config';
import { CheckBox } from './CheckBox.molecule';
import { _get } from '../../../../helpers/lodash.wrappers';
import { changeInput } from '../../../../helpers/core-actions/form.action';

const CheckBoxWithState = ({
    name="",
    inputStyleClass="",
    wrapperStyleClass="",
    labelStyleClass="",
    labelElement=null,
    setGroupName="",
    onChange=emptyFunction
}) => {
    const dispatch = useDispatch();
    const inputValue = useSelector(state => _get(state,`formState.${setGroupName}.${name}`,false));

    return (
        <CheckBox
            name={name}
            inputStyleClass={inputStyleClass}
            wrapperStyleClass={wrapperStyleClass}
            labelStyleClass={labelStyleClass}
            labelElement={labelElement}
            isChecked={inputValue}
            onChange={(value,key)=>{
                dispatch(changeInput(setGroupName,name,value));
                onChange(value,key);
            }}
        />
    )
}

export {
    CheckBoxWithState
}