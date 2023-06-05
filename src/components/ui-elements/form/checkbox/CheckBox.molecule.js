import PropTypes from 'prop-types';

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

CheckBox.propTypes = {
    name: PropTypes.string,
    inputStyleClass: PropTypes.string,
    wrapperStyleClass: PropTypes.string,
    labelStyleClass: PropTypes.string,
    labelElement: PropTypes.node,
    isChecked: PropTypes.any,
    onChange: PropTypes.func,
}

export {
    CheckBox
}