import { useSelector,useDispatch } from 'react-redux'
import { HtmlButton } from './HtmlButton.atom';
import { emptyFunction } from '../../../../config/defaultProps.config';
import { _get } from '../../../../helpers/lodash.wrappers';
import { setFormError } from '../../../../helpers/core-actions/form.action';
import validate from '../../../../helpers/validator';

const ButtonWithState=({
    className="",
    btnText="",
    setGroupName="",
    validateObject=null,
    onClick=emptyFunction,
    onSubmitAction=emptyFunction,
})=>{

    const dispatch = useDispatch();
    const formObject = useSelector(state => _get(state,`formState.${setGroupName}`,{}));


    const onClickBtn=()=>{
        if(validateObject !=null ) {
            validate(formObject)
                .setFields(_get(validateObject,'fields',{}))
                .setRules(_get(validateObject,'rules',{}))
                .setMessage(_get(validateObject,'message',{}))
                .run((error, result) => {
                    if (error) {
                        dispatch(setFormError(setGroupName,error))
                        onClick(error, null);
                    } else {
                        dispatch(onSubmitAction(formObject,onClick))
                    }
                });
        }
    }

    return (
        <HtmlButton
            className={className}
            btnText={btnText}
            onClick={()=>onClickBtn()}
        />
    );
}

export {
    ButtonWithState
}