import React, {Component} from 'react';
import CommentListContainer from '../containers/CommentListContainer';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Comments</h1>
                <CommentListContainer/>
            </div>
        );
    }
}

export default App;
