import React, { useContext, useEffect, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const PrivateRoute = ({ component: Component, ...props  }) => {
    const authContext = useContext(AuthContext);
    const { authenticated, loading, userAuthenticate } = authContext;

    useEffect(() => {
        userAuthenticate();
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Route { ...props } render={ props => !authenticated && !loading ? (
                        <Redirect to="/login" />
                    ) : (
                        <Component {...props} />
                    )
                }
            />
        </Fragment>
     );
}
 
export default PrivateRoute;