/*import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 2,
                    message: 'Hey, how are you?',
                    likesCount: 24,
                    img: 'https://coolsen.ru/wp-content/uploads/2021/09/55.jpg'
                },
                {
                    id: 1,
                    message: 'Its my first post',
                    likesCount: 2,
                    img: 'https://coolsen.ru/wp-content/uploads/2021/09/55.jpg'
                }],
            newPostText: ''
        },
        messagesPage: {

            dialogs: [
                {
                    id: 1,
                    name: 'Kate',
                    img: 'https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png'
                },
                {id: 2, name: 'Ann', img: 'https://cdn.freelance.ru/images/att/1575043_900_600.png'},
                {id: 3, name: 'Andrew', img: 'https://i.pinimg.com/736x/9a/0d/eb/9a0debd592a5b15b9b979d53bfb0e019.jpg'},
                {
                    id: 4,
                    name: 'Alex',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0cJV_ECcAAkoaGG2WGW8sQwMluLyJnNB1w&usqp=CAU'
                },
                {
                    id: 5,
                    name: 'Martin',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrDJNATt29GmClEXaTDs4ttyUZ4uj9HKy_w&usqp=CAU'
                },
                {
                    id: 6,
                    name: 'Mr.Addams',
                    img: 'https://tipik.ru/wp-content/uploads/2022/01/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%BF%D0%B0%D1%80%D0%B5%D0%BD%D1%8C-%D0%B8-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0_01.jpg'
                }
            ],

            messages: [{id: 1, message: 'Hi', src: 'in'},
                {id: 2, message: 'Hey, how are you?'},
                {id: 3, message: 'Im ok, you?', src: 'in'},
                {id: 4, message: 'Me too'},
                {id: 5, message: 'i bought a new phone'}],

            newMessageText: ''
        }
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('stateChanged')
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
window.store = store;*/
