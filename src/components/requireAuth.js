import React, { Component } from "react";
import { connect } from "react-redux";
import CommentBox from "./CommentBox";

const requireAuth = (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (!this.props?.auth) this.props.history.push("/");
    }
    render() {
      return <ChildComponent />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth(CommentBox);
