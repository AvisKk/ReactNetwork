import {authAPI} from "../API/AuthAPI";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'network/auth/SET_USERS_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'network/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl:null, //if null, then captcha is not required
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, ...action.payload,
            }
        default:
            return state;
    }
}
export const setAuthUsersData = (userId, email, login, isAuth) => ({
    type: SET_USERS_DATA,
    payload: {userId, email, login, isAuth}
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const Auth = () => async (dispatch) => {
    const data = await authAPI.authMe();

    if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setAuthUsersData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(Auth())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        const message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUsersData(null, null, null, false))
    }
}
export const getCaptcha = () => async (dispatch) => {
    const response = await authAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export default authReducer;