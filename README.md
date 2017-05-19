<h1 align="center">Container and Presentational Components</h1>

### 1. Xem xét ví dụ:

Giả sử chúng ta cần xây dựng 1 app để quản lý các comments với 2 yêu cầu sau:

- Hiển thị danh sách comments
- Hiển thị button xóa comment

Chúng ta sẽ tạo component CommentList như sau:

```javascript
class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: fetchComments()};
    }

    removeComment(commentId) {
        removeComent(commentId);
        this.setState({comments: fetchComments()});
    }

    render() {
        return (
            <ul>
                {this.state.comments.map(comment => (
                    <li key={comment.id}>
                        {comment.content}
                        <button onClick={() => this.removeComment.call(this, comment.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        );
    }
}
```

Về cơ bản thì component của chúng ta đã đáp ứng đúng và đủ yêu cầu ban đầu. Nhưng giả sử sau này có thêm yêu cầu mới là cần hiển thị comments của user với cùng 1 format hiển thị. Hoặc là cấu trúc dữ liệu của function fetchComments() thay đổi.

Đến đây thì chúng ta đã nhận thấy component CommentList có các vấn đề sau:

- Không thể tái sử dụng
- Không thể kiểm soát được cấu trúc dữ liệu đầu vào


