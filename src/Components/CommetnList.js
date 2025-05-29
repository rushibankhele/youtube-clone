import React from 'react'
import Comment from './Comment';

const CommetnList = ({comments}) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommetnList comments={comment.replies} />
      </div>
    </div>
  ));
}

export default CommetnList