import {ProfileAPI} from "../API/ProfileAPI";
import {stopSubmit} from "react-final-form";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
    posts: [
        {
            id: 12,
            message: 'Hey, how are you?',
            likesCount: 24,

        },
        {
            id: 11,
            message: 'Its my first post',
            likesCount: 2,

        }],
    profile: '',
    status: '',
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let text = action.newPost
            return {
                ...state,
                posts: [{
                    id: 13,
                    message: text,
                    likesCount: 0,
                    img: ''
                }, ...state.posts]
            };
        case SET_USERS_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}
export const addPost = (newPost) => ({type: ADD_POST, newPost})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photoFile) => ({type: SAVE_PHOTO_SUCCESS, photoFile})
export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await ProfileAPI.Profile(userId)
    dispatch(setUsersProfile(response.data));
}
export const getUsersStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.ProfileStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.UpdateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch, getState) => {
    let userId = getState().auth.userId;
    let response = await ProfileAPI.SavePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
        dispatch(getUsersProfile(userId))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.userId;
    let response = await ProfileAPI.SaveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        //dispatch(stopSubmit("editProfile", {message}))
        return Promise.reject(response.data.messages[0])
    }
}
export default profileReducer;