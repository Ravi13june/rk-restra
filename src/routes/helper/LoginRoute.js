import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../config/user";

const LoginRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `/`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default LoginRoute;
