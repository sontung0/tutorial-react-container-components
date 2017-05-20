import {connect} from 'react-redux'
import {removeComment} from '../actions'
import CommentList from '../components/CommentList';

const mapStateToProps = (state) => ({
    comments: state.comments.filter(comment => comment.id % 2),
});

const mapDispatchToProps = (dispatch) => ({
    onRemoveComment: (commentId) => {
        dispatch(removeComment(commentId));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList);
