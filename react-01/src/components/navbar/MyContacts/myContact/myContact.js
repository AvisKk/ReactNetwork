import s from "./myContact.module.css";
import {NavLink} from "react-router-dom";

const MyContact = (props) => {
 return (
     <div className={s.item}>
         <NavLink to={"/dialogs/" + props.id}
                  className={navData => navData.isActive ? s.active : s.item}><img src={props.ava} alt="" /> {props.name}</NavLink>
     </div>
 )
}

export default MyContact;