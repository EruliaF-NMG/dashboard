import { emptyFunction,htmlInputTypes } from '../../../../config/defaultProps.config';

const HtmlInput = ({
    name="",
    className="",
    placeholder="",
    value="",
    type=htmlInputTypes.TEXT,
    onChange=emptyFunction,
    onClick=emptyFunction
}) =>{
    return (
        <input 
            type={type}
            name={name}
            className={`text-sm rounded-sm block w-full pl-10 p-1 placeholder-custom-gray-300 border border-custom-gray-300 focus:ring-custom-purple-500 focus:border-custom-purple-500 ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={(event)=>onChange(event.target.value,name)}
            onClick={(event)=>onClick(event)}
        />
    )
}

export {
    HtmlInput
}