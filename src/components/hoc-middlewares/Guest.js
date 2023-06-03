import React, { Fragment } from 'react';
import { Navigate, Route } from 'react-router-dom';

import useInit from '../../custom-hooks/useInit.hook';

function Guest(Component) {
  function WrappedComponent(props) {
    const [initStatus, isAuth] = useInit();
    return isAuth === null || initStatus === false ? null : (
      <Fragment>
        {
            isAuth === false ? (
                <Component {...props} />
            ) : (
                <Navigate to={'/dashboard'} />
            )
        }
      </Fragment>
    );
  }

  return WrappedComponent;
}

export default Guest;