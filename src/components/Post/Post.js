import "./Post.css";

const Post = ({ title, desc }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Post;
