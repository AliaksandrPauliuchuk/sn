import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/236x/0f/f9/12/0ff912f0e24585cace8ad32a3e27140b.jpg" />
      {props.message}
      <div>
        <span> Likes </span> {props.likes}
      </div>
    </div>
  );
};
export default Post;
