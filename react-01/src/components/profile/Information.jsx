import GitHubIcon from "../../components/common/ContactsIcon/GitHubIcon.png"
import VkIcon from "../../components/common/ContactsIcon/VkIcon.png"
import FacebookIcon from "../../components/common/ContactsIcon/FacebookIcon.png"
import InstagramIcon from "../../components/common/ContactsIcon/InstagramIcon.png"
import TwitterIcon from "../../components/common/ContactsIcon/TwitterIcon.png"
import WebsiteIcon from "../../components/common/ContactsIcon/WebSiteIcon.png"
import YoutubeIcon from "../../components/common/ContactsIcon/YoutubeIcon.png"
import MainLinkIcon from "../../components/common/ContactsIcon/MainLinkIcon.png"
import yes from "../../components/common/ContactsIcon/yes.png"
import no from "../../components/common/ContactsIcon/no.png"
import styles from "./Information.module.css"
import React from "react";

const Information = (props) => {
    return (
        <div className={styles.form}>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ?
                <img className={styles.answer} src={yes} alt="yes"/>
                : <img className={styles.answer} src={no} alt="no"/>}
            </div>
            {props.profile.lookingForAJob ? <div><b>My professional skills:</b>
                <div>{props.profile.lookingForAJobDescription}</div> </div> : ''}
            <div className={styles.contacts}><b>Contacts:</b>
                <Contact contactIcon={GitHubIcon} props={props.profile.contacts.github}/>
                <Contact contactIcon={VkIcon} props={props.profile.contacts.vk}/>
                <Contact contactIcon={FacebookIcon} props={props.profile.contacts.facebook}/>
                <Contact contactIcon={InstagramIcon} props={props.profile.contacts.instagram}/>
                <Contact contactIcon={TwitterIcon} props={props.profile.contacts.twitter}/>
                <Contact contactIcon={WebsiteIcon} props={props.profile.contacts.website}/>
                <Contact contactIcon={YoutubeIcon} props={props.profile.contacts.youtube}/>
                <Contact contactIcon={MainLinkIcon} props={props.profile.contacts.mainLink}/>
            </div>
            {!props.userId ? <div><button className={styles.button}
                                          onClick={props.goToEditMode}>Edit</button></div> : ''}
        </div>
    )
}
const Contact = ({contactIcon, props}) => {
    return <div>
        <div className={styles.contact}><img src={contactIcon} alt={''}/>
            {props ? props : '----'}</div>
    </div>
}
export default Information;