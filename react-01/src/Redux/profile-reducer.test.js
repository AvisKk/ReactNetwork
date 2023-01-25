import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {
            id: 12,
            message: 'Hey, how are you?',
            likesCount: 24,
        },
        {
            id: 11,
            message: 'Its my first post',
            likesCount: 2,
        }],
    profile: '',
    status: '',
}

it('length of post should be incremented', () => {
    //1. test data
    let action = addPost("NewPostText")
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(3);
})

it('message of new post should be correct', () => {
    //1. test data
    let action = addPost("NewPostText")
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts[3].message).toBe("NewPostText")
})

it('after deleting length of message should be decrement', () => {
    //1. test data
    let action = deletePost(1)
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts[3].length).toBe(2)
})
