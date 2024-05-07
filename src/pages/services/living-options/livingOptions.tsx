import React from 'react';
import RecLivingOptions from '../../../components/content-rectangle/recLivingOptions/recLivingOptions';
import Hero from '../../../components/hero/Hero';
import Form from '../../../components/form/Form';
import imgUrl from '../../../assets/images/services/living options/women-and-girl-smaling.jpg';


const LinvingOptions: React.FC = () => {

    const title = "Individualised Living Options";
    const alt = "Cooking class friends";
    return (


        <>
            <Hero title={title} imageUrl={imgUrl} alt={alt} />
            <RecLivingOptions />
            <Form />
        </>
    );

}


export default LinvingOptions;
