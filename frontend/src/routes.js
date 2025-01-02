import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
