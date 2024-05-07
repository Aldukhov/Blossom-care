import React from 'react';
import Hero from '../../../components/hero/Hero';
import Form from '../../../components/form/Form';
import ContentTransport from '../../../components/content-rectangle/content-transport/contentTransport';
import imgUrl from '../../../assets/images/services/transport/senior woman exit car into wheelchair.jpg'

const Transport: React.FC = () => {

    const title = "Title for Page One";
    const alt = 'Senior woman exits car into wheelchair, caregiver helps';
    
    return (


        <>
            <Hero title={title} imageUrl={imgUrl} alt = {alt}/>
            <ContentTransport />
            <Form />
        </>
    );

}


export default Transport;