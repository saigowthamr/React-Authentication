import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default function(Composed) {
  class Composeds extends React.Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (!this.props.auth) {
        this.context.router.history.push("/");
      }
    }
    componentWillUpdate() {
      if (!this.props.auth) {
        this.context.router.history.push("/");
      }
    }
    render() {
      return <Composed {...this.props} />;
    }
  }

  const mapState = state => {
    return {
      auth: state.proh.auth
    };
  };

  return connect(mapState)(Composeds);
}
