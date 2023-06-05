import { useSelector,useMemo } from 'react-redux';
import { _get } from '../helpers/lodash.wrappers';
import { useFormState } from './useFormState';
import { getStockInfoAPI } from '../config/apiEndPoints.config';
import { defaultStock } from '../config/core.config';

/**
 * used for access report data
 * @returns 
 */
const useChartData=()=>{
    const [inputValue] = useFormState('searchKeyWord','keyWord');
    const responses = useSelector(state => _get(state,`response.${getStockInfoAPI.key}_${inputValue||defaultStock}`,[]));

    return [responses];
}

export {
    useChartData
}