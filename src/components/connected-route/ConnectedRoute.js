import React from "react";
import ProptTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

/*
 * ConnectedRoute is a component that renders Routes for you
 * It uses the auth store in redux to determine if a route should be rendered
 * or redirected else where based on the auth status
 */
export function ConnectedRoute({
  isProtected,
  redirectIfAuthenticated,
  component: ComponentToRender,
  ...rest
}) {
  if (!ComponentToRender) {
    throw new Error("ConnectedRoute MUST have a prop named 'component'");
  }

  // https://react-redux.js.org/api/hooks#useselector
  const { isAuthenticated, username } = useSelector((state) => ({
    username: state.auth.username,
    isAuthenticated: state.auth.isAuthenticated,
  }));

  if (redirectIfAuthenticated && isAuthenticated) {
    return (
      <Route
        {...rest}
        render={({ location }) => (
          <Redirect
            to={{
              pathname: `/profiles/${username}`,
              state: { from: location },
            }}
          />
        )}
      />
    );
  }

  if (isProtected === null || (isProtected && isAuthenticated)) {
    return (
      <Route
        {...rest}
        render={(renderedProps) => <ComponentToRender {...renderedProps} />}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) => (
        <Redirect
          to={{
            pathname: `/`,
            state: { from: location },
          }}
        />
      )}
    />
  );
}

ConnectedRoute.defaultProps = {
  isProtected: null,
};
// https://reactjs.org/docs/typechecking-with-proptypes.html
ConnectedRoute.propTypes = {
  isProtected: ProptTypes.bool,
  redirectIfAuthenticated: ProptTypes.bool,
  component: ProptTypes.elementType.isRequired,
};
