import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  renderHeader = () => {
    //Authenicated Routes
    if (this.props.auth) {
      return [
        <Link to="/posts" key="3s">
          <li className="nav">Posts</li>
        </Link>,
        <Link to="/signout" key="9s">
          <li className="nav">Signout</li>
        </Link>
      ];
    } else {
      //UnAuthenicated Routes
      return [
        <Link to="/signup" key="1s">
          <li className="nav">SignUp</li>
        </Link>,
        <Link to="/signin" key="2s">
          <li className="nav">Signin</li>
        </Link>
      ];
    }
  };

  render() {
    return (
      <div>
        <div className="App">
          <Link to="/">
            <li className="nav">Home</li>
          </Link>
          {this.renderHeader()}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    auth: state.proh.auth
  };
};

export default connect(mapState, null)(Header);
