import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";


class Signout extends React.Component {

  //logsout before user ebters to thse component
  componentWillMount() {
    this.props.signOut()
  }

  render() {
    return <div className="signout">Hooo Succesfully Logged out</div>;
  }
}

export default connect(null, actions)(Signout);
