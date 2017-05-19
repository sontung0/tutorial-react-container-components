import React, {Component} from 'react';
import commentStore from '../stores/commentStore';
import CommentList from '../components/CommentList';

class UserComments extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: commentStore.fetchUserComments()};
    }

    onRemoveComment(commentId) {
        commentStore.remove(commentId);
        this.setState({comments: commentStore.fetchUserComments()});
    }

    render() {
        return <CommentList comments={this.state.comments} onRemoveComment={this.onRemoveComment.bind(this)} />;
    }
}

export default UserComments;
