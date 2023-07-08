import React from 'react';

import '../Home/home.css'
const Home = () => {
    return (
        <div className='home'>
            <img src='src/assets/BackgroundMenu.png' className='home__background'>
            </img>
            <div className='menu flex--column'>
                <span>Enter in the dongeon</span>
                <span>History</span>
                <span>Option</span>
            </div>

        </div>
    );
};

export default Home;