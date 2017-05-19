import React from 'react';

const CommentList = props => (
    <ul className="list-group">
        {props.comments.map(comment => (
            <li key={comment.id} className="list-group-item">
                {comment.content}
                <button type="button"
                        className="btn btn-danger btn-xs pull-right"
                        onClick={() => props.onRemoveComment(comment.id)}>
                    <div className="glyphicon glyphicon-remove"></div>
                </button>
            </li>
        ))}
    </ul>
);

export default CommentList;
