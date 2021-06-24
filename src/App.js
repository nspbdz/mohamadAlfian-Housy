import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

import PrivateRoute from "./components/route/PrivateRoute";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import {UserContextProvider} from "./contexts/userContext";
import { CartContextProvider } from "./contexts/cartContext";
/**
 * Our main app
 * For routing, make sure to use BrowserRouter, Switch, and Route
 * Route important attribute: path and component
 * @returns
 */
const App = () => {
  const headerTitle = "";
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <CartContextProvider>
            <Header title={headerTitle} />
            <Container fluid>
              <Switch>
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </Container>
          </CartContextProvider>
        </UserContextProvider>
      </Router>
    </div>
  );
};

export default App;
