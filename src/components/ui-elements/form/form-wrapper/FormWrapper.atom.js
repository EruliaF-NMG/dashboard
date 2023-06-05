import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { initFormObject, removeFromGroup } from '../../../../helpers/core-actions/form.action';

const FormWrapper = ({
    className="",
    setGroupName="",
    setFormObject={},
    children=null
}) => {

    const dispatch = useDispatch()

    useEffect(() => {   
            dispatch(initFormObject(setGroupName,false,setFormObject));
        return () => {
            dispatch(removeFromGroup(setGroupName));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div className={className}>
            {children}
        </div>
    );
}

FormWrapper.propTypes = {
    className: PropTypes.string,
    setGroupName: PropTypes.string,
    setFormObject: PropTypes.object,
    children: PropTypes.node,
}

export {
    FormWrapper
}