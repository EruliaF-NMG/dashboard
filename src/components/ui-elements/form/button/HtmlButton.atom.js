import PropTypes from 'prop-types';
import { emptyFunction } from '../../../../config/defaultProps.config';

const HtmlButton = ({
    className="",
    name="",
    btnText="",
    onClick=emptyFunction
}) =>{
    
    return(
        <button 
            name={name}
            onClick={onClick} 
            className={`text-white shadow-sm rounded-sm p-1 ${className}`}
        >{btnText}</button>
    )
}

HtmlButton.propTypes = {
    name: PropTypes.string,
    btnText: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export {
    HtmlButton
}