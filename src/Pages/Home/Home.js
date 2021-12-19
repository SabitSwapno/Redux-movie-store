import React from 'react';
import Footer from '../Footer/Footer';
import Movielist from './Movielist/Movielist';
import NavigateBar from './Navigation/NavigateBar';

const Home = () => {
    return (
        <>
            <NavigateBar></NavigateBar>
            <div className="mt-3">
                <h2><span className="textCusColor">Some Movies</span> To Watch</h2>
            </div>
            <div className='container'>
                <Movielist></Movielist>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;