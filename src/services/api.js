var comments = null;

export default {
    fetchComments: () => {
        if (!comments) {
            comments = [];

            for (let id = 1; id <= 10; id++) {
                comments.push({
                    id: id,
                    content: `Comment ${id}`,
                });
            }
        }

        return comments;
    },

    removeComment: (id) => {
        comments = comments.filter(comment => comment.id !== id);
    },
}