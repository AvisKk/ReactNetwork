import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer, {getUsersWatcher} from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk'
import appReducer from "./app-reducer";
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

const middleware = [thunk, sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(getUsersWatcher)

export default store;