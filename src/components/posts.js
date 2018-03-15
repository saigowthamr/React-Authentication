import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Posts extends React.Component {
  componentDidMount() {
    this.props.getContent();
  }


  render() {
    return (
      <div style={{fontSize:'1.3rem',
      textAlign:'center',
      marginTop:'7rem'
      }}>
        <strong> Im Protected Route</strong>
        <h1>{this.props.data} </h1>
      </div>
    );
  }
}

const mapState = state => {
  return {
    data: state.proh.content
  };
};

export default connect(mapState, actions)(Posts);
