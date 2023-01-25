import React from "react";
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
class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.param.userId;
        if (!userId) {
            userId = this.props.myId;
        }
        this.props.getUsersProfile(userId)
        this.props.getUsersStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.param.userId !== prevProps.param.userId)
        this.refreshProfile()
    }
    render() {
        return (
            <Profile {...this.props} updateStatus={this.props.updateStatus} userId={this.props.param.userId}/>
        )
    }
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