import styles from "./User.module.css";
import React from "react";
import userPhoto from '../../Assets/Images/user.png'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollowing, following}) => {
    return <div className={styles.users}>
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img className={styles.photo} src={user.photos.small != null ? user.photos.small : userPhoto}
                     alt=''/>
            </NavLink>
        </div>
        <div>
            {user.followed ?
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() =>
                    unfollowing(user.id)}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() =>
                    following(user.id)}>Follow</button>}
        </div>
        <div>{user.name}</div>
        <div>{user.status}</div>
        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>
    </div>
}
export default User;