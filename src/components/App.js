import React from 'react';
import CommentListContainer from '../containers/CommentListContainer';
import UserComments from '../containers/UserComments';

const App = () => (
    <div className="container">
        <h1>Comments</h1>
        <CommentListContainer/>

        <h1>User Comments</h1>
        <UserComments/>
    </div>
);

export default App;
