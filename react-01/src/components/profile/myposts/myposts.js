import s from './myposts.module.css';
import Post from "./Post/post";
import React from "react";
import {Field, Form} from "react-final-form";
import {maxLength} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControls/formsControls";

const MyPosts = React.memo(props => {
    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}
                                                              profile={props.profile}/>)

    let onSubmit = (value) => {
        props.addPost(value.newPost)
    }
    return (
        <div className={s.item}>
            <div className={s.myPosts}>{props.profile.fullName} posts:</div>
            {props.userId ? '' : <AddPostForm onSubmit={onSubmit}/>}
            <div className={s.postsElement}>
                {postsElement}
            </div>
        </div>
    )
})


const AddPostForm = (props) => (
    <Form onSubmit={props.onSubmit}
          render={({handleSubmit}) => (
              <form onSubmit={handleSubmit}>
                  <div>
                      <Field className={s.textarea} component={Textarea} name="newPost" autoComplete="off"
                             value="newPost" validate={maxLength(100, 0)} />
                  </div>
                  <div>
                      <button className={s.button} type="submit">Add post</button>
                  </div>
              </form>)}
    />
)

export default MyPosts;
