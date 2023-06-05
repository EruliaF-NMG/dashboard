import PropTypes from 'prop-types';

import { emptyFunction } from '../../../../config/defaultProps.config';

const HtmlCheckBox = ({
    name="",
    className="",
    isChecked=false,
    onChange=emptyFunction
}) =>{
    return (
        <input 
            data-testid={`test_id_${name}`}
            name={name}
            type="checkbox" 
            className={`w-4 h-4 text-purple-700 rounded-sm focus:ring-purple-700 ${className}`}
            checked={isChecked}
            onChange={()=>onChange(!isChecked,name)}
        />
    )
}

HtmlCheckBox.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    isChecked: PropTypes.any,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
}

export {
    HtmlCheckBox
}