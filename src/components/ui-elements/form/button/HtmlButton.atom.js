import { emptyFunction } from '../../../../config/defaultProps.config';

const HtmlButton = ({
    className="",
    btnText="",
    onClick=emptyFunction
}) =>{
    
    return(
        <button 
            onClick={onClick} 
            className={`text-white shadow-sm rounded-sm p-1 ${className}`}
        >{btnText}</button>
    )
}

export {
    HtmlButton
}