import React, { ReactEventHandler } from 'react';
import Hero from '../../components/hero/Hero';
import BlogContent from '../../components/blog-content/blogContent';

const Blog: React.FC = () => {

    const title = "Blog";
    const imageUrl = "https://example.com/image1.jpg";
    const alt = 'people high-fiving one another';

    return (

        
        <>
            <Hero title={title} imageUrl={imageUrl} alt = {alt}/>
            <BlogContent/>
        </>
    );

}


export default Blog;
