import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {useEffect, useRef} from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControls/formsControls";
import {maxLength, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let messages = props.messagesPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id} src={m.src}/>);
    let dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} ava={d.img}/>);

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "auto"})
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div>
                <div className={s.messages}>
                    {messages}
                    <div ref={messagesEndRef}/>
                </div>
                <div className={s.back}>
                    <AddMessagesReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const AddMessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder={"New Message"} name={"newMessageBody"}
                   className={s.textarea} validate={[required (" "), maxLength(150)]}/>
            <button className={s.button}>Send</button>
        </form>
    )
}

const AddMessagesReduxForm = reduxForm({
    form: 'messages'
})(AddMessagesForm)

export default Dialogs;
