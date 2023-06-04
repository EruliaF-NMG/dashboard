import { useSelector,useDispatch } from 'react-redux';

import { Autocomplete } from './Autocomplete.molecule';
import { searchDataAPI,getStockInfoAPI } from '../../../../config/apiEndPoints.config';
import { requestData } from '../../../../helpers/core-actions/request.actions';
import { _get } from '../../../../helpers/lodash.wrappers';


const AutocompleteWrapper = ({
    className="",
    inputStyleClass="",
    formWrapperStyle=""
}) =>{
    const responses = useSelector(state => _get(state,`response`,{}));
    const dispatch = useDispatch();

    const getData=(value)=>{
        const stateKey= `${getStockInfoAPI.key}_${value}`;
        if(_get(responses,`${stateKey}`,[]).length === 0 )  dispatch(requestData(getStockInfoAPI.url.replace('{STOCK_NAME}', value),stateKey));
    }

    return (
        <Autocomplete 
            className={className}
            setGroupName={"searchKeyWord"}
            name='keyWord'
            displayKey="T"
            formWrapperStyle={formWrapperStyle}
            inputStyleClass={inputStyleClass}
            apiKey={searchDataAPI.key}
            apiUrl={searchDataAPI.url}
            onChange={(value)=>getData(value)}
        />
    )
}

export {
    AutocompleteWrapper
}