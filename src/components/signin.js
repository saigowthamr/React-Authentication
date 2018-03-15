import React, { Component } from "react";
import "./all.css";
import * as actions from "../actions/index";
import { connect } from "react-redux";
class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(newProps) {
    // once user sigin he gets auth property  so we push them to protected route
    if (newProps.auth) {
      this.props.history.push("/posts");
    }
  }

  submitHandler = () => {
    const dat = {
      email: this.state.email,
      password: this.state.password
    };

    return this.props.signIn(dat);
  };

  emailChange = e => {
    this.setState({ email: e.target.value });
  };

  passChange = e => {
    this.setState({ password: e.target.value });
  };

  renderErr = () => {
    if (this.props.err) {
      return <h3 className="err"> {this.props.err} </h3>;
    }
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
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.submitHandler();
              }
            }}
          />
        </div>
        <button className="btn c" onClick={this.submitHandler}>
          SignIn
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

export default connect(mapState, actions)(Signin);
