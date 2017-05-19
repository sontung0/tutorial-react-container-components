import React, {Component} from 'react';
import CommentList from './components/CommentList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Comments</h1>
                <CommentList/>
            </div>
        );
    }
}

export default App;
