import React, { ReactEventHandler } from 'react'
import Hero from '../../components/hero/Hero'
import BlogContent from '../../components/blog-content/blogContent'
import imgUrl from '../../assets/images/blog/hands.jpg'
import { Helmet } from 'react-helmet-async'

const Blog: React.FC = () => {
	const title = 'Blog'
	const alt = 'people high-fiving one another'

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta
					name='description'
					content='Explore Blossom Care Disability Services! We offer support &amp; resources
for your NDIS journey. Learn about participant rights, services, and how to provide feedback.'
				/>
			</Helmet>
			<Hero title={title} imageUrl={imgUrl} alt={alt} />
			<BlogContent />
		</>
	)
}

export default Blog
