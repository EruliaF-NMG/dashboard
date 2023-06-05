import { useState,useRef,useEffect,memo } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import { InputBox } from './InputBox.molecule';
import { FormWrapper } from '../form-wrapper/FormWrapper.atom'
import { Icon,faSearch } from '../../common/Icon.atom';
import { Card } from '../../common/Card.atom';
import { useFormState } from '../../../../custom-hooks/useFormState';
import { requestData } from '../../../../helpers/core-actions/request.actions';
import { _get } from '../../../../helpers/lodash.wrappers';
import { emptyFunction } from '../../../../config/defaultProps.config';
import { defaultStock } from '../../../../config/core.config';
import { getStockInfoAPI } from '../../../../config/apiEndPoints.config';

const Autocomplete = memo(({
    setGroupName="",
    name="",
    placeholder="",
    displayKey="",
    apiUrl="",
    apiKey="",
    className="",
    inputStyleClass="",
    formWrapperStyle="",
    onChange=emptyFunction
}) =>{

    const ref = useRef(null);
    const [inputValue,,onChangeInput] = useFormState(setGroupName,name);
    const [text,setText]=useState(inputValue);
    const [isShowList,setShowList]=useState(false);
    const dispatch = useDispatch();
    const responses = useSelector(state => _get(state,`response`,{}));
    const itemList = _get(responses,`${apiKey}`,[]);

    const handleOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowList(false);
        }
    }

    const filterResult=()=>{
        return itemList.filter((item) => {
            if(item[displayKey].search(text.toUpperCase()) !== -1) return true;
            return false;
        });
    }

    const getData=(value)=>{
        const stateKey= `${getStockInfoAPI.key}_${value}`;
        if(_get(responses,`${stateKey}`,[]).length === 0 )  dispatch(requestData(getStockInfoAPI.url.replace('{STOCK_NAME}', value),stateKey));
    }

    const setSearchText = (key) => {
        setText(key);
        onChangeInput(key);
        getData(key)
    }

    useEffect(() => {
        getData(defaultStock);
        // setTimeout used due to api request amount timeout
        if(itemList.length === 0 ) setTimeout(()=>dispatch(requestData(apiUrl,apiKey)),6000)
        document.addEventListener('mousemove', handleOutside, true);
        return () => {
            document.removeEventListener('mousemove', handleOutside, true);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return (
        <div className={className} ref={ref}>
            <FormWrapper 
                className={`mt-[3px] ${formWrapperStyle}`} 
                setGroupName={setGroupName}
                setFormObject={{
                    [name]:""
                }}
            >
                <InputBox
                    mainWrapperStyleClass="!mb-0"
                    errorStyleClass='hidden'
                    wrapperStyleClass="items-center flex"
                    inputStyleClass={`!rounded-full bg-custom-gray-600 text-custom-gray-900 border-custom-gray-900 w-64 !text-black ${inputStyleClass}`}
                    name={name}
                    value={text}
                    onChange={(value)=>{
                        setText(value);
                        setShowList(true);
                    }}
                    onClick={()=>{
                        if(text) setShowList(true);
                    }}
                    placeholder={placeholder}
                    iconElement={<Icon icon={faSearch}/>}
                />
                {
                    (isShowList)?(
                        <Card className='absolute sm:w-64 w-full bg-white max-h-52 mt-1 overflow-hidden'>
                        <ul className='w-full'>
                                {
                                    filterResult().map((item,index)=>{
                                        return (
                                            <li 
                                                className='px-2 py-1 border-b border-gray-300'
                                                key={index}
                                                onClick={()=>setSearchText(item[displayKey])}
                                            >{item[displayKey]}</li>
                                        );
                                    })
                                }
                        </ul>
                        </Card>
                    ):(null)
                }
            </FormWrapper>
        </div>
    )
});

export {
    Autocomplete
}