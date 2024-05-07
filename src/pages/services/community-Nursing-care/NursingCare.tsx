import React from 'react';
import Hero from '../../../components/hero/Hero';
import Form from '../../../components/form/Form';
import ContentNursingCare from '../../../components/content-rectangle/content-nursing-care/contentNursingCare';
import imgUrl from '../../../assets/images/services/Nursing care/doctor.jpg'

const NursingCare: React.FC = () => {

    const title = "Community Nursing Care";
    const alt = 'Young female doctor examines her senior patient'
    return (

        
        <>
            <Hero title={title} imageUrl={imgUrl} alt={alt}/>
            <ContentNursingCare/>
            <Form/>
        </>
    );

}


export default NursingCare;