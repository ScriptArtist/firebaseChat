import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

/**
 *  A wrapper for <Route> that redirects to the login
 *  screen if you're not yet authenticated.
 */
function PrivateRoute({ children, ...params }) {
  const auth = useSelector((state) => state.firebase.auth);

  function CheckLogin() {
    return (
      (isEmpty(auth)) ? (
        <Redirect to={{ pathname: '/login' }} />
      ) : (
        children
      )
    );
  }

  return (
    <Route {...params}>
      {
        isLoaded(auth) ? (
          <CheckLogin />
        ) : (
          <div>Loading...</div>
        )
      }
    </Route>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
