import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollowingProgress, getUsersSagaAction, followingSaga, unfollowingSaga
} from "../../Redux/users-reducer";
import Users from "./Users";
import React, {useEffect} from "react";
import {
    GetCurrentPage,
    GetFollowingProgress,
    GetIsFetching,
    GetPageSize,
    GetTotalUsersCount,
    GetUsers
} from "../../Redux/usersSelectors";
const UsersAPI = (props) => {

    useEffect(() => {
        props.getUsersSagaAction(props.currentPage,props.pageSize)
    }, [props.currentPage])

    const onPageChanged = (pageNumber) => {
        props.getUsersSagaAction(pageNumber, props.pageSize)
        props.setCurrentPage(pageNumber);
    };

        return <>
                <Users users={props.users}
                       onPageChanged={onPageChanged}
                       currentPage={props.currentPage}
                       pageSize={props.pageSize}
                       totalUsersCount={props.totalUsersCount}
                       followingInProgress={props.followingInProgress}
                       toggleFollowingProgress={props.toggleFollowingProgress}

                       unfollowingSaga={props.unfollowingSaga}

                       isFetching={props.isFetching}
                       followingSaga={props.followingSaga}
                />
        </>
}
let mapStateToProps = (state) => {
    return {
        users: GetUsers(state),
        pageSize: GetPageSize(state),
        totalUsersCount: GetTotalUsersCount(state),
        currentPage: GetCurrentPage(state),
        isFetching: GetIsFetching(state),
        followingInProgress: GetFollowingProgress(state),
    }
}
export default connect(mapStateToProps, {
    setCurrentPage, toggleFollowingProgress, unfollowingSaga, getUsersSagaAction
,followingSaga})(UsersAPI);