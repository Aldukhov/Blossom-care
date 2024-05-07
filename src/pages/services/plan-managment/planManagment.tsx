import React from 'react';
import Hero from '../../../components/hero/Hero';
import Form from '../../../components/form/Form';
import ContentPlanManagment from '../../../components/content-rectangle/content-plan-managment/ContentPlanManangment';
import imgUrl from '../../../assets/images/services/plan managment/paperwrok.jpg';


const PlanManagment: React.FC = () => {

    const title = "Plan Management";
    const alt = 'Business colleagues (including Special Needs Woman) talking about document'

    return (

        
        <>
            <Hero title={title} imageUrl={imgUrl} alt={alt}/>
            <ContentPlanManagment/>
            <Form/>
        </>
    );

}


export default PlanManagment;
