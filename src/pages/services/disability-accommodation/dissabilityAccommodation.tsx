import React from 'react';
import Hero from '../../../components/hero/Hero';
import Form from '../../../components/form/Form';
import ContentAccommodation from '../../../components/content-rectangle/content-disability-accommodation/contentAccommodation';
import imgUrl from '../../../assets/images/services/disability accomodation/room with tv.jpg'

const Accommodation: React.FC = () => {

    const title = "Specialist Disability Accommodation";
    const alt = 'Modern Luxury Room Interior With Empty Bed, Lcd Television And City View From The Window';
    return (


        <>
            <Hero title={title} imageUrl={imgUrl} alt ={alt}/>
            <ContentAccommodation />
            <Form />
        </>
    );

}


export default Accommodation;