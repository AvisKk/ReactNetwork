import styles from "./Information.module.css";
import {Input, Textarea} from "../common/formsControls/formsControls";
import {Field, Form} from "react-final-form";
import React from "react";
import style from "../Login/Login.module.css";
import s from "./ProfileInformationForm.module.css"
const ProfileInformationForm = (props) => (
    <Form onSubmit={props.onSubmit}
          initialValues={props.initialValues}
          render={({handleSubmit}) => (
              <form onSubmit={handleSubmit} className={styles.form}>
                  <>{props.error && <div className={style.formError}>{props.error}</div>}</>
                  <div><b>Full name:</b>
                  <Field name="fullName" component={Input} placeholder="How is your name?"/>
                  </div>

                  <div className={s.fields}><b>About me:</b>
                      <Field name="aboutMe" component={Input} placeholder="Tell about yourself"/>
                  </div>

                  <div className={s.fields}><b>Looking for a job:</b>
                      <Field name="lookingForAJob" component="input" type="checkbox"/>
                  </div>

                  <div><b>My professional skills:</b>
                      <div><Field name="lookingForAJobDescription" component={Textarea}
                                  placeholder="Your professional skills"/></div>
                  </div>

                  <div className={styles.contacts}><b>Contacts</b>: {Object.keys(props.profile.contacts).map(
                      key => {return <div key={key}>
                          <div>{key}:</div>
                          <div>{<Field name={"contacts." + key} component="input"/>}</div>
                      </div>})}
                  </div>
                  <div><button type="submit" className={styles.button}>Save</button></div>
              </form>)}
    />
)

export default ProfileInformationForm;