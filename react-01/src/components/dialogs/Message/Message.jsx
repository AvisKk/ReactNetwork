import s from './Message.module.css'

const Message = (props) =>{

    return(
        <div className={s.messages}> <div className={props.src ? s.message : s.outgoing}>
            {props.message}</div>
        </div>

    )
}

export default Message;
