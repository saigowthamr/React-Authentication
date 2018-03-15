import React from "react";
import { Route } from "react-router-dom";
import rAuth from "../hoc/Auth";
import Header from "../header";
import App from "../../App";
import Signup from "../signup";
import Signin from "../signin";
import Posts from "../posts";
import Signout from "../signout";

class ReactRouter extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route exact path="/posts" component={rAuth(Posts)} />
      </div>
    );
  }
}

export default ReactRouter;
