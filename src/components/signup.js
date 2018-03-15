import React, { Component } from "react";
import "./all.css";
import * as actions from "../actions/index";
import { connect } from "react-redux";

class Signup extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    //checks token if token exists pushs to home route
    if (token) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(newProps) {
    // once user sigup he gets auth property  so we push them to protected route
    if (newProps.auth) {
      this.props.history.push("/posts");
    }
  }
  renderErr = () => {
    if (this.props.err) {
      return <h3 className="err"> {this.props.err} </h3>;
    }
  };

  submitHandler = () => {
    const dat = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signUp(dat);
  };

  emailChange = e => {
    this.setState({ email: e.target.value });
  };

  passChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="signup">
          <input
            type="email"
            placeholder="Email"
            className="inp"
            value={this.state.email}
            onChange={this.emailChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="inp"
            value={this.state.password}
            onChange={this.passChange}
          />
        </div>
        <button className="btn c" onClick={this.submitHandler}>
          Signup
        </button>

        {this.renderErr()}
      </div>
    );
  }
}

const mapState = state => {
  return {
    err: state.proh.err,
    auth: state.proh.auth
  };
};

export default connect(mapState, actions)(Signup);
