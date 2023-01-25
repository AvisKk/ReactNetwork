import {instance} from "./Instance";
export const authAPI = {
    authMe () {
        return instance.get('auth/me')
            .then(response => response.data);
    },
    login (email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout () {
        return instance.delete('auth/login')
            .then(response => response.data)
    },
    getCaptchaUrl () {
        return instance.get('security/get-captcha-url')
    }
}