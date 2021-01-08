import React from "react"
import 'rsuite/dist/styles/rsuite-default.css';
import { Router, Switch, withRouter } from 'react-router-dom';
import './styles/main.scss';
import { createBrowserHistory } from 'history';
import SignIn from "./pages/Signin";
import PrivateRoute from './components/PrivateRoute';
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";



function App() {
  const history = createBrowserHistory()

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {/* <Route exact='/' component={App} /> */}
          <PublicRoute path="/signin" history={history} component={SignIn} />
          {/* // Public Route */}
          <PrivateRoute path='/home' component={Home} />
          {/* {Everything from PrivateRoute will be redirected to Route} */}
        </Switch>
      </Router>
    </div>
  )
}


export default withRouter(App);

