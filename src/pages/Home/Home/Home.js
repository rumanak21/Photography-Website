import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </div>
    );
};

export default Home;