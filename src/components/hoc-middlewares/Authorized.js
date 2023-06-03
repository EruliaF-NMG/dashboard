import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

import useInit from '../../custom-hooks/useInit.hook';

function Authorized(Component) {
  function WrappedComponent(props) {
    const [initStatus, isAuth] = useInit();


    return isAuth === null || initStatus === false ? null : (
      <Fragment>
        {
            isAuth === true ? (
                <Component {...props} />
            ) : (
                <Navigate to={'/'} />
            )
        }
      </Fragment>
    );
  }

  return WrappedComponent;
}

export default Authorized;


