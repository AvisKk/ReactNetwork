import {usersAPI} from "../API/UsersAPI";
import {followAPI} from "../API/FollowAPI";
import {updateObjectInArray} from "../utils/objects-helper";
import {put, takeEvery} from "redux-saga/effects";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGES = 'SET_CURRENT_PAGES';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [], pageSize: 10, totalUsersCount: 0, currentPage: 1, isFetching: false, followingInProgress: [],
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

//Saga
const GET_USERS_SAGA = 'GET_USERS_SAGA'
const FOLLOWING_SAGA = 'FOLLOWING_SAGA'
const UNFOLLOW_USER_SAGA = 'UNFOLLOW_USER_SAGA'
export const getUsersSagaAction = (currentPage, pageSize) => ({type: GET_USERS_SAGA, currentPage, pageSize})
export const followingSaga = (id) => ({type: FOLLOWING_SAGA, id})
export const unfollowingSaga = (id) => ({type: UNFOLLOW_USER_SAGA, id})
function* getUsersSaga ({currentPage, pageSize}) {
    yield put(ToggleFetching(true))
    let data = yield (usersAPI.getUsers(currentPage, pageSize))
    yield put(ToggleFetching(false))
    yield put(setUsers(data.items))
    yield put(setTotalUsersCount(data.totalCount))
}
function* followUserSaga ({id}) {
    yield put(ToggleFetching(true, id))
    let data = yield (followAPI.follow(id))
    if (data.resultCode === 0) {
        yield put(follow(id))
    }
    yield put(ToggleFetching(false, id))
}
function* unfollowUserSaga ({id}) {
    yield put(ToggleFetching(true, id))
    let data = yield (followAPI.unfollow(id))
    if (data.resultCode === 0) {
        yield put(unfollow(id))
    }
    yield put(ToggleFetching(false, id))
}
export function* getUsersWatcher () {
    yield takeEvery('GET_USERS_SAGA', getUsersSaga)
    yield takeEvery('FOLLOWING_SAGA', followUserSaga)
    yield takeEvery('UNFOLLOW_USER_SAGA', unfollowUserSaga)
}
///////////

export default usersReducer;