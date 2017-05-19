import React, {Component} from 'react';
import commentStore from '../stores/commentStore';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: commentStore.fetch()};
    }

    removeComment(commentId) {
        commentStore.remove(commentId);
        this.setState({comments: commentStore.fetch()});
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.comments.map(comment => (
                    <li key={comment.id} className="list-group-item">
                        {comment.content}
                        <button type="button"
                                className="btn btn-danger btn-xs pull-right"
                                onClick={() => this.removeComment.call(this, comment.id)}>
                            <div className="glyphicon glyphicon-remove"></div>
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default CommentList;
