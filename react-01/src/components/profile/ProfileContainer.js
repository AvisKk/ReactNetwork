import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUsersProfile,
    getUsersStatus,
    savePhoto,
    saveProfile,
    setUsersProfile,
    updateStatus
} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const ProfileContainer = (props) => {
    const refreshProfile = () => {
        let userId = props.param.userId;
        if (!userId) {
            userId = props.myId;
        }
        props.getUsersProfile(userId)
        props.getUsersStatus(userId)
    }

    useEffect(() => {
        refreshProfile()}, [props.param.userId])

    return (
        <Profile {...props} updateStatus={props.updateStatus} userId={props.param.userId}/>
    )
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.userId,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})
const TakeParams = (props) => {
    return <ProfileContainer {...props} updateStatus={props.updateStatus} param={useParams()}/>
}
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setUsersProfile, getUsersProfile,
        getUsersStatus, updateStatus, savePhoto, saveProfile
    }),)
(TakeParams);