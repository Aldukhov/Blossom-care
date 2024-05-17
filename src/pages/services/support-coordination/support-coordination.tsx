import React from 'react';
import Hero from '../../../components/hero/Hero';
import Form from '../../../components/form/Form';
import ContentSupportCoordination from '../../../components/content-rectangle/content-support-coordination/contentSupportCoordination';
import SSupportCoordination from '../../../components/support-coordination-page-components/content/content';
import imgUrl from '../../../assets/images/services/support-coordination/flower boy and woman.jpg';
import { Helmet } from 'react-helmet-async';

const SupportCoordination: React.FC = () => {

    const title = "Support Coordination";
    const alt = "Social inclusion - man with down syndrome working in garden"
    return (


        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Hero title={title} imageUrl={imgUrl} alt={alt} />
            <ContentSupportCoordination />
            <SSupportCoordination />
            <Form />
        </>
    );

}


export default SupportCoordination;