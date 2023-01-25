import {reduxForm} from "redux-form";
import {createField, Input} from "../common/formsControls/formsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from './Login.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            {createField("Email", "email", Input, [required('Field is required')])}
            {createField("Password", "password",
                Input, [required('Field is required')], {type: "password"})}
            {captchaUrl && <><img src={captchaUrl} alt={'captcha'}/>
            {createField("Symbols from image", "captcha", Input,[required('Field is required')])}</>
            }
            {error && <div className={style.formError}>{error}
            </div>}
            {createField('', "rememberMe", Input, '',
                {type: "checkbox"}, "remember me")}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);