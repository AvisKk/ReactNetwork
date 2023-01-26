import MyContact from "./myContact/myContact";
import s from './mycontacts.module.css'
import {connect} from "react-redux";

const Contacts = (props) => {
    let Contacts = props.messagesPage.dialogs.map(p => <MyContact name={p.name}
                                                                  ava={p.img}
                                                                  id={p.id}
                                                                  key={p.id}/>
    )
    if (!props.isAuth){return <></>}

    return (
        <div className={s.contacts}>
            <div className={s.header}>Contacts:</div>
            {Contacts.slice(0, 3)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps)(Contacts);