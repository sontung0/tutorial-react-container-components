import React, {Component} from 'react';
import api from '../services/api';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: api.fetchComments()};
    }

    removeComment(commentId) {
        api.removeComment(commentId);
        this.setState({comments: api.fetchComments()});
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.comments.map(comment => (
                    <li key={comment.id} className="list-group-item">
                        {comment.content}
                        <button type="button"
                                className="btn btn-danger btn-xs pull-right"
                                onClick={event => this.removeComment.call(this, comment.id)}>
                            <div className="glyphicon glyphicon-remove"></div>
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default CommentList;
