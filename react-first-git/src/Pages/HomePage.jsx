import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import MainContainer from '../components/MainContainer/MainContainer.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LogIn from '../components/LoginForm/logIn.jsx';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar/>
            <LogIn/>
            {/* <MainContainer/> */}
            <Footer/>
        </Fragment>
    );
};

export default HomePage;