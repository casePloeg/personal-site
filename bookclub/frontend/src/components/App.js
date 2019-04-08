// import React, { Component, Fragment } from "react";
// import ReactDOM from "react-dom";
// import {
//   HashRouter as Router,
//   Route,
//   Switch,
//   Redirect,
//   Link
// } from "react-router-dom";

// import { Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// import { Provider } from "react-redux";
// import store from "../store";
// import { login, loadUser } from "../actions/auth";

// import Dashboard from "./posts/Dashboard";
// import Alerts from "./layout/Alerts";
// import Header from "./layout/Header";
// import Login from "./accounts/Login";
// import Register from "./accounts/Register";
// import PrivateRoute from "./common/PrivateRoute";

// const alertOptions = {
//   timeout: 3000,
//   position: "top center"
// };

// class App extends Component {
//   componentDidMount() {
//     //store.dispatch(loadUser());
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <AlertProvider template={AlertTemplate} {...alertOptions}>
//           <Router>
//             <Header />
//             <Alerts />
//             <Switch>
//               <Route exact path="/" component={Dashboard} />
//               <Route exact path="/register" component={Register} />
//               <Route exact path="/login" component={Login} />
//             </Switch>
//           </Router>
//         </AlertProvider>
//       </Provider>
//     );
//   }
// }
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// import { Provider } from "react-redux";
// import store from "../store";
import "../App.css";
import Home from "./Home";
import Blog from "./Blog";
import * as ROUTES from "../constants/routes";

import Footer from "./Footer";

import NotFound from "./NotFound";
import P5Wrapper from "./P5Wrapper";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.BLOG} component={Blog} />
            <Route path={ROUTES.HOME} component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
