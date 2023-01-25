import s from './post.module.css';
import userPhoto from "../../../../Assets/Images/user.png";

const Post = (props) => {
  return (
  <div>
    <div className={s.item}>
      <img src={ props.profile.photos.small? props.profile.photos.small : userPhoto} alt=""/> <span className={s.post}>{props.message}</span>
      <div className={s.like}>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  </div>
  )
}

export default Post;
