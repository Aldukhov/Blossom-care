import React from 'react';
import styles from './ndis.module.css';
import Hero from '../../components/hero/Hero';
import ContentOVal from '../../components/content-oval/ContentOval';
import imgUrl from '../../assets/images/ndis/a boy with down syndrome holding a dog.jpg'
import { Helmet } from 'react-helmet-async';
const Ndis: React.FC = () => {

    const title = "NDIS";

    const customStyle = {
        objectPosition: 'center',
    };

    return (


        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Hero title={title} imageUrl={imgUrl} alt={'a boy with down syndrome holding a dog'} style={customStyle} />
            <ContentOVal />
        </>
    );

}


export default Ndis;
