import {addPost} from "../../../Redux/profile-reducer";
import MyPosts from "./myposts"
import {connect} from "react-redux";

let mapStateToProps = (state, props) => {
    return{
        profilePage: state.profilePage,
        profile: props.profile,
        userId: props.userId,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;