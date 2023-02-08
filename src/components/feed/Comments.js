import PropTypes from "prop-types";

function Comments({}) {
  return (
    <CommentsContainer>
      <Comment>
        <FatText>{user.username}</FatText>
        <CommentCaption>{caption}</CommentCaption>
      </Comment>
      <CommentCount>
        {commentNumber === 1 ? "1 comment" : `${commentNumber} comments`}
      </CommentCount>
      {comments?.map((comment) => (
        <Comment key={comment.id}>
          <FatText>{comment.user.username}</FatText>
          <CommentCaption>{comment.payload}</CommentCaption>
        </Comment>
      ))}
    </CommentsContainer>
  );
}

export default Comments;
