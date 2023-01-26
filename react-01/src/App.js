import './App.css';
import Navbar from './components/navbar/Navbar';
import React, {Suspense, useEffect} from "react";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import MyContactsContainer from "./components/navbar/MyContacts/myContact/mycontactsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

const App = (props) => {

    useEffect(() => {
    props.initializeApp()
    }, [props.initialized])

        if (!props.initialized){
        return <Preloader />}

        return (<HashRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <MyContactsContainer/>
                <div className='back'></div>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/login" element={<Login/>}/>

                            <Route exact path="/" element={<Navigate to={"/profile"}/>}/>
                            <Route path="*" element={<div>404 NOT FOUND</div>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </HashRouter>)
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);

