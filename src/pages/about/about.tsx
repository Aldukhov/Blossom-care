import React, { ReactEventHandler } from 'react';
import styles from './about.module.css';
import Mission from '../../components/about-page-components/mission/Mission';
import Hero from '../../components/hero/Hero';
import ACTA from '../../components/about-page-components/cta/ACTA';
import Stats from '../../components/about-page-components/stats/Stats';
import Form from '../../components/form/Form';
import imgUrl from '../../assets/images/about us/header.jpg'
import experience from '../../assets/images/about us/svg/experience-information-knowledge-svgrepo-com.svg';
import location from '../../assets/images/about us/svg/location-pin-alt-svgrepo-com.svg';
const About: React.FC = () => {

    
    const title = "About us";
    
    return (


        <>
            <Hero title={title} imageUrl={imgUrl} alt={'header'}/>
            <Mission />
            <ACTA />
            <Stats />
            <Form />
        </>
    );

}


export default About;
