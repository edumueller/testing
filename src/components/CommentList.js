import React, { Component } from "react";
import { connect } from "react-redux";
import commentsReducer from "reducers/comments";

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map((comment) => {
      return <li key={comment}>{comment}</li>;
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: commentsReducer };
}

export default connect(mapStateToProps)(CommentList);
