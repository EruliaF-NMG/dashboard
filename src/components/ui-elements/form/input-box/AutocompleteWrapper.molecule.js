
import { Autocomplete } from './Autocomplete.molecule';
import { searchDataAPI } from '../../../../config/apiEndPoints.config';


const AutocompleteWrapper = ({
    className="",
    placeholder="",
    inputStyleClass="",
    formWrapperStyle=""
}) =>{

    return (
        <Autocomplete 
            className={className}
            placeholder={placeholder}
            setGroupName={"searchKeyWord"}
            name='keyWord'
            displayKey="T"
            formWrapperStyle={formWrapperStyle}
            inputStyleClass={inputStyleClass}
            apiKey={searchDataAPI.key}
            apiUrl={searchDataAPI.url}
        />
    )
}

export {
    AutocompleteWrapper
}