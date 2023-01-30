import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {useEffect, useRef} from "react";
import {Field, Form} from "react-final-form";
import {Textarea} from "../common/formsControls/formsControls";
import {maxLength} from "../../utils/validators/validators";


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
                    <AddMessagesForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}
const AddMessagesForm = (props) => (
    <Form onSubmit={props.onSubmit}
          render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <Field component={Textarea} placeholder={"New Message"} name={"newMessageBody"}
                   className={s.textarea} validate={maxLength(150)}/>
            <button className={s.button}>Send</button>
        </form>
    )}/>)
export default Dialogs;
