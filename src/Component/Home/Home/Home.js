import React from 'react';
import Footer from '../../Share/Footer';
import About from '../About/About';
import Blog from '../Blog';
import Contact from '../Contact';
import Counter from '../Counter/Counter';
import Fetures from '../Fetures/Fetures';
import Header from '../Header/Header/Header';
import More from '../More';
import Pricing from '../Pricing/Pricing';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import SwiperSlid from '../SwiperSlid';
import Team from '../Team/Team';
import Testmonial from '../Testmonial/Testmonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <About />
            <Counter />
            <Fetures />
            <Projects />
            <Subscribe />
            <Team />
            <Pricing />
            <Testmonial />
            <Blog />
            <Contact />
            {/* <SwiperSlid /> */}
            <More />
            <Footer />
        </div>
    );
};

export default Home;