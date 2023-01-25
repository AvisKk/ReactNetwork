import s from './ProfileInfo.module.css';
import userPhoto from "../../../Assets/Images/user.png";
import UploadIcon from "../../../Assets/Images/UploadIcon.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            let file = e.target.files[0]
            props.savePhoto(file)
        }
    }

    const MyPage = (element) => (props.userId ? '' : element)

    return <div>
        <div className={s.descriptionContainer}>
            <div className={s.avatarContainer}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto}
                     className={s.avatar}
                     alt=''/>
                <div>{MyPage(<label htmlFor="input_file"><img className={s.uploadIco}
                                                              src={UploadIcon} alt={'Upload avatar'}/></label>)}
                </div>
                <div>{MyPage(<input type="file" onChange={onMainPhotoSelected}
                                    className={s.input_file} id="input_file"/>)}</div>
            </div>
            <div className={s.description}>
                <div className={s.nickname}>{props.profile.fullName}</div>
                <div className={s.aboutMe}>About me: {props.profile.aboutMe ? props.profile.aboutMe : '_____'}</div>
                <div className={s.status}><ProfileStatusWithHooks status={props.status}
                                                                  updateStatus={props.updateStatus}
                                                                  userId={props.userId}/></div>
            </div>
        </div>
    </div>
}
export default ProfileInfo;
