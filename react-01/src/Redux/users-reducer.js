import {usersAPI} from "../API/UsersAPI";
import {followAPI} from "../API/FollowAPI";
import {updateObjectInArray} from "../utils/objects-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGES = 'SET_CURRENT_PAGES';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [], pageSize: 10, totalUsersCount: 0, currentPage: 1, isFetching: true, followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case (FOLLOW):
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,
                    "id", {followed: true})
            }
        case (UNFOLLOW):
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,
                    "id", {followed: false})
            };
        case (SET_USERS):
            return {...state, users: action.users}
        case (SET_CURRENT_PAGES):
            return {...state, currentPage: action.currentPage}
        case (TOTAL_USERS_COUNT):
            return {...state, totalUsersCount: action.totalUsersCount}
        case (TOGGLE_IS_FETCHING):
            return {...state, isFetching: action.isFetching}
        case (TOGGLE_IS_FOLLOWING_PROGRESS):
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGES, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, totalUsersCount})
export const ToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(ToggleFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(ToggleFetching(false))
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, id));
    let data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id));
}
export const following = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, followAPI.follow.bind(followAPI), follow)
}

export const unfollowing = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, followAPI.unfollow.bind(followAPI), unfollow)
}

export default usersReducer;