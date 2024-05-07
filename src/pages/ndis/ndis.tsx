import React from 'react';
import styles from './ndis.module.css';
import Hero from '../../components/hero/Hero';
import ContentOVal from '../../components/content-oval/ContentOval';
import imgUrl from '../../assets/images/ndis/a boy with down syndrome holding a dog.jpg'
const Ndis: React.FC = () => {

    const title = "Ndis";

    const customStyle = {
        objectPosition: 'center',
    };

    return (

        
        <>
            <Hero title={title} imageUrl={imgUrl} alt={'a boy with down syndrome holding a dog'} style={customStyle}/>
            <ContentOVal/>
        </>
    );

}


export default Ndis;
