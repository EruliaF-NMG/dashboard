import { emptyFunction } from '../../../../config/defaultProps.config';

const HtmlCheckBox = ({
    name="",
    className="",
    isChecked=false,
    onChange=emptyFunction
}) =>{
    return (
        <input 
            name={name}
            type="checkbox" 
            className={`w-4 h-4 text-purple-700 rounded-sm focus:ring-purple-700 ${className}`}
            checked={isChecked}
            onChange={()=>onChange(!isChecked,name)}
        />
    )
}

export {
    HtmlCheckBox
}