import React, { ReactEventHandler } from 'react';
import Hero from '../../components/hero/Hero';
import ContactForm from '../../components/contact-us-page-components/form/ContactForm';
import Faq from '../../components/contact-us-page-components/faq/Faq';
import Info from '../../components/contact-us-page-components/conactInfo/ContactInfo';
import imgUrl from '../../assets/images/contact us/hands holding a heart.jpg'
const Contact: React.FC = () => {

    const title = "Contact us";
    
    return (

        
        <>
            <Hero title={title} imageUrl={imgUrl} alt = {'hands holding a heart'}/>
            <ContactForm />
        </>
    );

}


export default Contact;
