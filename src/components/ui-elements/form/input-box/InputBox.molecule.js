import { emptyFunction, htmlInputTypes } from '../../../../config/defaultProps.config';
import { HtmlInput } from './HtmlInput.atom';

const InputBox = ({
    name="",
    inputStyleClass="",
    placeholder="",
    value="",
    errorText="",
    type=htmlInputTypes.TEXT,
    wrapperStyleClass="",
    mainWrapperStyleClass="",
    errorStyleClass="",
    iconElement=null,
    onChange=emptyFunction,
    onClick=emptyFunction
}) =>{
    return (
        <div className={`mb-2 ${mainWrapperStyleClass}`}>
            <div className={`relative ${wrapperStyleClass}`}>
                <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none`}>
                    {iconElement}
                </div>
                <HtmlInput 
                    name={name}
                    className={inputStyleClass} 
                    placeholder={placeholder}
                    value={value}
                    type={type}
                    onChange={onChange}
                    onClick={onClick}
                />
            </div>
            <p className={`text-red-400 text-xs min-h-[16px] ${errorStyleClass}`}>{errorText}</p>
        </div>
    )
}

export {
    InputBox
}