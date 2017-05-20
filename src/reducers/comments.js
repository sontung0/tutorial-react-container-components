const makeDefaultComments = () => {
    let comments = [];

    for (let id = 1; id <= 10; id++) {
        comments.push({
            id: id,
            content: `Comment ${id}`,
        });
    }

    return comments;
};

export default (comments = makeDefaultComments(), action) => {
    switch (action.type) {
        case 'REMOVE_COMMENT':
            return comments.filter(comment => comment.id !== action.commentId);

        default:
            return comments;
    }
};