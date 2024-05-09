import React, { ReactEventHandler } from 'react';
import styles from './home.module.css';
import CTA from '../../components/home-page-components/cta/CTA';
import Services from '../../components/home-page-components/services/Services';
import Choose from '../../components/home-page-components/choose-us/Choose';
import Reviews from '../../components/home-page-components/reviews/Reviews';
import Hero from '../../components/hero/Hero';
import heroImg from '../../assets/images/home/hands with hand.jpg';

const Home: React.FC = () => {

    const title = "Nurturing independence, mpowering choices & enriching lives.";
    const alt = 'Caregiver holding hands elderly woman patient, help and care';
    return (


        <>
            
                <Hero title={title} imageUrl={heroImg} alt={alt} />
                <Choose />
                <Services />
                <CTA />
            
        </>
    );

}


export default Home;
