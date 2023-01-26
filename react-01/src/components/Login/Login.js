import {Field, Form} from "react-final-form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from './Login.module.css'
import s from '../dialogs/Dialogs.module.css'

const LoginReduxForm = (props) => (
    <Form onSubmit={props.onSubmit}
          render={({handleSubmit, submitError}) => (
              <form onSubmit={handleSubmit}>
                  <div className={style.subtitle}>Email:</div>
                  <div className={style.formElement}><Field name="email" autoComplete="on"
                                                            component="input" placeholder="Email"/></div>
                  <div className={style.subtitle}>Password:</div>
                  <div className={style.formElement}><Field name="password" autoComplete="on"
                                                            component="input" placeholder="Password" type="password"/></div>
                  <div className={style.remember}><Field name="rememberMe" component="input" type="checkbox"/>
                      <span className={style.subtitle + ' ' + style.remember}>Remember Me</span></div>
                  <div>{props.captchaUrl && <>
                      <div><img className={style.captcha} src={props.captchaUrl} alt={'captcha'}/></div>
                      <div className={style.formElement}><Field name="captcha" component="input" placeholder="Symbols from image"/></div>
                  </>}</div>
                  {submitError && <div className={style.error}>{submitError}</div>}
                  <button className={s.button + ' ' + style.button} type="submit">Submit</button>
              </form>)}
    />)

const Login = (props) => {
    let onSubmit = ({ email, password, checkBox, captcha}) => {
        return props.login(email, password, checkBox, captcha)
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return <div  className={style.form}>
        <h1 className={style.title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);