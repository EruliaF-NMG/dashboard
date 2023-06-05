import { Fragment } from 'react';
import PropTypes from 'prop-types';

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

IsEmpty.propTypes = {
    value: PropTypes.any,
    elementIFEmpty: PropTypes.node,
    children: PropTypes.node,
}

export {
    IsEmpty
}