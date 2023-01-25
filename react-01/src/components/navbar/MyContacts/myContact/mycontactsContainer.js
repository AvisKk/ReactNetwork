import {connect} from "react-redux";
import Contacts from "../mycontacts";

let mapStateToProps = (state) => {
    return{
        messagesPage: state.messagesPage
    }
}

const MyContactsContainer = connect(mapStateToProps)(Contacts)

export default MyContactsContainer;