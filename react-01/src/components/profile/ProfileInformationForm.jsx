import styles from "./Information.module.css";
import {createField, Input, Textarea} from "../common/formsControls/formsControls";
import {Form, reduxForm} from "redux-form";
import React from "react";
import style from "../Login/Login.module.css";
const ProfileInformationForm = ({handleSubmit, error, profile}) => {
    return <Form onSubmit={handleSubmit}>
        <>{error && <div className={style.formError}>{error}</div>}</>
        <div>
            <b>Full name:</b>{createField("Full Name", "fullName", Input, [])}
        </div>
        <div>
            <b>About me:</b>{createField("About me", "aboutMe", Textarea, [])}
        </div>
        <div>
            <b>Looking for a job:</b>
            {createField("", "lookingForAJob", Input, [], {type: "checkbox"})}
        </div>
        <div><b>My professional skills:</b>
            {createField("My professional skills", "lookingForAJobDescription",
                Textarea, [])}
        </div>
        <div className={styles.contacts}><b>Contacts</b>: {Object.keys(profile.contacts).map(
            key => {
                return <div>
                    <b>{key}: {createField(key, "contacts." + key, Input, [])}</b>
                </div>
            }
        )}

        </div>
            <button>Save</button>
    </Form>
}

const ProfileInformationFormReduxForm = reduxForm({form: 'editProfile',
    enableReinitialize: true, destroyOnUnmount: false})(ProfileInformationForm)

export default ProfileInformationFormReduxForm;