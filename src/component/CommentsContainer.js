import { commentsData } from "./utils/commentsData";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-slate-100 rounded-lg my-1 p-2 shadow-lg">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
      ></img>

      <div className="px-2">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="ml-5 pl-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
