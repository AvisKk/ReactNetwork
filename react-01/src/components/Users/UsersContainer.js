import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    following, unfollowing
} from "../../Redux/users-reducer";
import Users from "./Users";
import React from "react";
import {
    GetCurrentPage,
    GetFollowingProgress,
    GetIsFetching,
    GetPageSize,
    GetTotalUsersCount,
    GetUsers
} from "../../Redux/usersSelectors";
class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    };
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
    };
    render() {
        return <>
                <Users users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       followingInProgress={this.props.followingInProgress}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       following={this.props.following}
                       unfollowing={this.props.unfollowing}
                       isFetching={this.props.isFetching}
                />
        </>
    }
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
    setCurrentPage, toggleFollowingProgress, getUsers, following, unfollowing})(UsersAPI);