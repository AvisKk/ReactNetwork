import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import LogoutImg from "./../common/LogoutImg.png"
 const Header = (props) => {
     return <header className={s.header}>
         <div className={s.loginBlock}>
             {props.isAuth ?
                 <div>
                     {props.login} <input type={"image"}
                                           alt={'Exit'}
                                           src={LogoutImg}
                                           onClick={props.logout}
                                           className={s.exitIcon}></input></div>
                 : <NavLink to={'/login'}>Login</NavLink>}
         </div>
         <img src="https://mediascope.net/rkn/img/logo.png" alt=""/>
     </header>
 }
 export default Header;
