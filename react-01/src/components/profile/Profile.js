import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./myposts/myPostsContainer";
import Preloader from "../common/preloader/Preloader";
import Information from "./Information";
import styles from "./Profile.module.css"
import React, {useState} from "react";
import ProfileInformationFormReduxForm from "./ProfileInformationForm";


const Profile = (props) => {
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            ()=>{setEditMode(false);});
    }

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={styles.content}>
                <img
                    src="https://wallbox.ru/resize/1280x1024/wallpapers/main2/201717/abstrakcia-tekstura-fon-kvadraty.jpg"
                    alt=""/>
            </div>
            <div className={styles.profilePage}>
                <div>
                    {!props.profile.photos ? <Preloader/> : <>
                        <ProfileInfo userId={props.userId} profile={props.profile}
                                     status={props.status} updateStatus={props.updateStatus}
                                     savePhoto={props.savePhoto}/>
                        <MyPostsContainer profile={props.profile} userId={props.userId}/></>}
                </div>
                <div>
                    {editMode ? <ProfileInformationFormReduxForm profile={props.profile}
                                                                 initialValues={props.profile}
                                                                 onSubmit={onSubmit}/> :
                        <Information goToEditMode={() => {
                            setEditMode(true)
                        }} profile={props.profile} userId={props.userId}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default Profile;