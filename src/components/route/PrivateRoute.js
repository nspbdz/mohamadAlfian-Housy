import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component }) {

    const isLogin = true
 
    return (
        <Route
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
    )
}

export default PrivateRoute
