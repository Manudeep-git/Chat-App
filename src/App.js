import React from "react"
import 'rsuite/dist/styles/rsuite-default.css';
import { Switch } from 'react-router-dom';
import './styles/main.scss';
// import { createBrowserHistory } from 'history';
import SignIn from "./pages/Signin";
import PrivateRoute from './components/PrivateRoute';
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";
import { ProfileProvider } from "./context/profilecontext";

// const history1 = createBrowserHistory()

function App() {

  return (
    <ProfileProvider>
      <Switch>
        {/* <Route exact='/' component={App} /> */}
        <PublicRoute path="/signin" component={SignIn} />
        <PrivateRoute path="/" component={Home} />
        {/* // Public Route */}
        {/* {Everything from PrivateRoute will be redirected to Route} */}
      </Switch>
    </ProfileProvider>
  );
}


export default App;

