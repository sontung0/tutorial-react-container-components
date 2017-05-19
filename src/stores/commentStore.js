var comments = null;

export default {
    fetch: () => {
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

    remove: (id) => {
        comments = comments.filter(comment => comment.id !== id);
    },

    fetchUserComments: () => {
        return comments.filter(comment => comment.id % 2);
    },
}