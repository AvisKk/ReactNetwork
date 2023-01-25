import s from './myposts.module.css';
import Post from "./Post/post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControls/formsControls";

const MyPosts = React.memo(props => {
    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} profile={props.profile}/>)

    let addNewPost = (value) => {
        props.addPost(value.newPost)
    }
    return (
        <div className={s.item}>
            <div className={s.myPosts}>{props.profile.fullName} posts:</div>
            {props.userId ? '' : <AddPostReduxForm onSubmit={addNewPost}/>}
            <div className={s.postsElement}>
                {postsElement}
            </div>
        </div>
    )
})


const AddPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
             <div>
                 <Field component={Textarea} name={"newPost"} className={s.textarea}
                        validate={[required(" "), maxLength(150)]}/>
             </div>
             <div>
                <button className={s.button}>Add post</button>
             </div>
            </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'posts'
})(AddPostForm)

export default MyPosts;
