import React from 'react';
import Hero from '../../../components/hero/Hero';
import Form from '../../../components/form/Form';
import ContentNursingCare from '../../../components/content-rectangle/content-nursing-care/contentNursingCare';
import imgUrl from '../../../assets/images/services/Nursing care/doctor.jpg'
import { Helmet } from 'react-helmet-async';

const NursingCare: React.FC = () => {

    const title = "Community Nursing Care";
    const alt = 'Young female doctor examines her senior patient'
    return (

        
        <>
         <Helmet>
                <title>{title}</title>
            </Helmet>
            <Hero title={title} imageUrl={imgUrl} alt={alt}/>
            <ContentNursingCare/>
            <Form/>
        </>
    );

}


export default NursingCare;