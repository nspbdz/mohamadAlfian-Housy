import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

import PrivateRoute from "./components/route/PrivateRoute";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import DetailRestaurant from "./pages/DetailRestaurant";
import DetailProperty from "./pages/DetailProperty";
import MyBooking from "./pages/MyBooking";
import MyBookingPending from "./pages/MyBookingPending";
import MyBookingHistory from "./pages/MyBookingHistory";
import { BookContextProvider } from "./contexts/BookContext";
import {UserContextProvider} from "./contexts/userContext";
import { CartContextProvider } from "./contexts/cartContext";
import Profile from "./pages/Profile";

const App = () => {
  const headerTitle = "Dumbways Batch 24";
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <BookContextProvider>
            <Header title={headerTitle} />
            <Container fluid>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/restaurant/:id" component={DetailRestaurant} />
                <PrivateRoute exact path="/DetailProperty/:id" component={DetailProperty} />
                <PrivateRoute exact path="/MyBooking/:user/:id" component={MyBooking} />
                <PrivateRoute exact path="/MyBookingPending/:user/:id/:book" component={MyBookingPending} />
                <PrivateRoute exact path="/MyBookingHistory/:user/:id/:book" component={MyBookingHistory} />
                {/* <Route exact path="/cart" component={Cart} /> */}
                {/* <Route exact path="/signup" component={Signup} /> */}
                {/* <Route path="/lifecycle" component={LifeCycle} /> */}
              </Switch>
            </Container>
          </BookContextProvider>
        </UserContextProvider>
      </Router>
    </div>
  );
};

export default App;
