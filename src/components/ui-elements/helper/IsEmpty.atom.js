import { Fragment } from 'react';
import { isEmpty } from '../../../helpers/common.helper';

const IsEmpty=({
    value="",
    elementIFEmpty=null,
    children=null,
})=>{
    return (
        <Fragment>
            {
                isEmpty(value)?
                    (<Fragment>{elementIFEmpty}</Fragment>)
                    :(<Fragment>{children}</Fragment>)
            }
        </Fragment>
    )
}

export {
    IsEmpty
}