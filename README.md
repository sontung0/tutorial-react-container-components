<h1 align="center">Container & Presentational Components</h1>

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

Về cơ bản thì component của chúng ta đã đáp ứng đúng và đủ yêu cầu ban đầu. Nhưng giả sử sau này có thêm yêu cầu mới là cần hiển thị comments của một user với cùng format hiển thị. Đến đây thì chúng ta nhận thấy hạn chế của component CommentList là **không thể tái sử dụng**.

### 2. Container & Presentational Components:

Về cơ bản thì component CommentList có 2 vai trò sau:

- Load & update data
- Display data

Lý do không thể tái sử dụng được component CommentList là vì nó đã thực hiện rằng buộc 2 vai trò trên tại cùng 1 nơi.

Vậy ý tưởng la chúng ta sẽ tách component CommentList thành 2 component riêng biệt theo 2 vai trò trên:

- CommentListContainer: Có nhiệm vụ cung cấp và xử lý dữ liệu (Container Component)
- CommentList: Có nhiệm vụ là nhận và hiển thị dữ liệu (Presentational Component)

```javascript
class CommentListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: commentStore.fetch()};
    }

    onRemoveComment(commentId) {
        commentStore.remove(commentId);
        this.setState({comments: commentStore.fetch()});
    }

    render() {
        return <CommentList comments={this.state.comments} onRemoveComment={this.onRemoveComment.bind(this)} />;
    }
}

const CommentList = props => (
    <ul>
        {props.comments.map(comment => (
            <li key={comment.id}>
                {comment.content}
                <button onClick={() => props.onRemoveComment(comment.id)}>Remove</button>
            </li>
        ))}
    </ul>
);
```
Và đề xử lý yêu cầu mới là "Hiển thị comments của một user" thì chúng ta chỉ cần tạo container UserComments như sau

```javascript
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
```
Như vậy là component CommentList có thể được tái sử dụng ở bất cứ đâu khi có nhu cầu.

### 3. Tổng kết:

**Container Components**

- Load và truyền data xuống Presentational Components
- Xử lý data thông qua các event của Presentational Components

**Presentational Components**

- Nhận và hiển thị data từ Container Components
- Tạo các event để Container Components update data

<p align="center"><img src="https://raw.githubusercontent.com/sontung0/react-container-components/master/public/flowchart.png" width="400"></p>

