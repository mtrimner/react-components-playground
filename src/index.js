import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" image={faker.image.image()} commentText="Great!"/>
           </ApprovalCard>

           <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 3:23PM" image={faker.image.image()} commentText="Wow!"/>
           </ApprovalCard>

           <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 9:45PM" image={faker.image.image()} commentText="Interesting!"/>
           </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));