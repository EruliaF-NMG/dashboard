import { Fragment } from "react";
import { emptyFunction } from '../../../config/defaultProps.config';

const IterateData = ({
    dataList=[],
    callBackElement=emptyFunction,
}) => {
    console.log("yes",dataList);
    return (
        <Fragment>
            {
                dataList.map((item,index)=>{
                    return callBackElement(item,index);
                })
            }
        </Fragment>
    )
}

export {
    IterateData
}