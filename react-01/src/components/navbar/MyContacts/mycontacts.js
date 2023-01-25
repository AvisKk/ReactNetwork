import MyContact from "./myContact/myContact";
import s from './mycontacts.module.css'

const Contacts = (props) => {
    let Contacts = props.messagesPage.dialogs.map(p => <MyContact name={p.name}
                                                                  ava={p.img}
                                                                  id={p.id}
                                                                  key={p.id}/>
    )
    return (
        <div className={s.contacts}>
            <div className={s.header}>Contacts:</div>
            {Contacts.slice(0, 3)}
        </div>
    )
}

export default Contacts;