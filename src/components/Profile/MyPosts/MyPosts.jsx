import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi there!!!" likes="12" />
        <Post message="It's my first text" likes="23" />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;
