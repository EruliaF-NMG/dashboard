import { emptyFunction } from '../../../../config/defaultProps.config';
import { HtmlCheckBox } from './HtmlCheckBox.atom';

const CheckBox = ({
    name="",
    inputStyleClass="",
    wrapperStyleClass="",
    labelStyleClass="",
    labelElement=null,
    isChecked=false,
    onChange=emptyFunction
}) => {
    return (
        <div className={`flex items-center mb-8 ${wrapperStyleClass}`}>
            <HtmlCheckBox
                name={name}
                id={name}
                className={inputStyleClass}
                isChecked={isChecked}
                onChange={onChange}
            />
            <label htmlFor={name} className={`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${labelStyleClass}`}>{labelElement}</label>
        </div>
    )
}

export {
    CheckBox
}