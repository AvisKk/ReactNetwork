const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 21,
            name: 'Katrin',
            img: 'https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png'
        },
        {id: 22, name: 'Ann', img: 'https://cdn.freelance.ru/images/att/1575043_900_600.png'},
        {id: 23, name: 'Andrew', img: 'https://i.pinimg.com/736x/9a/0d/eb/9a0debd592a5b15b9b979d53bfb0e019.jpg'},
        {
            id: 24,
            name: 'Alex',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0cJV_ECcAAkoaGG2WGW8sQwMluLyJnNB1w&usqp=CAU'
        },
        {
            id: 25,
            name: 'Martin',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrDJNATt29GmClEXaTDs4ttyUZ4uj9HKy_w&usqp=CAU'
        },
        {
            id: 26,
            name: 'Mr.Addams',
            img: 'https://tipik.ru/wp-content/uploads/2022/01/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%BF%D0%B0%D1%80%D0%B5%D0%BD%D1%8C-%D0%B8-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0_01.jpg'
        }
    ],

        messages: [{id: 31, message: 'Hi', src: 'in'},
        {id: 32, message: 'Hey, how are you?'},
        {id: 33, message: 'Im ok, you?', src: 'in'},
        {id: 34, message: 'Me too'},
        {id: 35, message: 'i bought a new phone'}],

}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_MESSAGE):
            let text = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,{id: 36, message: text}]
            };
        default:
            return state;
    }
}

export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default messagesReducer;