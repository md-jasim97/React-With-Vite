import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import MainContainer from '../components/MainContainer/MainContainer.jsx';
import Footer from '../components/Footer/Footer.jsx';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar/>
            <MainContainer/>
            <Footer/>
        </Fragment>
    );
};

export default HomePage;