import styles from "./User.module.css";
import React from "react";
import userPhoto from '../../Assets/Images/user.png';
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollowingSaga, followingSaga}) => {
    return (
        <div className={styles.users}>
            <div>
                    <img className={styles.photo} src={user.photos.small != null ? user.photos.small : userPhoto}
                         alt=''/>
            </div>
            <div className={styles.description}>
                <div>{user.name}</div>
                <div>{user.status ? user.status : '----'}</div>
                <div>
                    {user.followed ?
                        <button  className={styles.buttons}
                                 disabled={followingInProgress.some(id => id === user.id)} onClick={() =>
                            unfollowingSaga(user.id)}>Unfollow</button>
                        : <button  className={styles.buttons}
                                   disabled={followingInProgress.some(id => id === user.id)} onClick={() =>
                            followingSaga(user.id)}>Follow</button>}
                    <NavLink to={'/profile/' + user.id}>
                    <button className={styles.buttons}>View Profile</button>
                    </NavLink>
                </div>
            </div>
        </div>)
}
export default User;