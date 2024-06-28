import React from 'react'
import Hero from '../../../components/hero/Hero'
import Form from '../../../components/form/Form'
import ContentTransport from '../../../components/content-rectangle/content-transport/contentTransport'
import imgUrl from '../../../assets/images/services/transport/senior woman exit car into wheelchair.jpg'
import { Helmet } from 'react-helmet-async'

const Transport: React.FC = () => {
	const title = 'Transport'
	const alt = 'Senior woman exits car into wheelchair, caregiver helps'

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta
					name='description'
					content='Explore NDIS transport options! We offer safe, reliable transport
solutions for appointments, outings, and regular trips. Covers all NDIS funding levels.'
				/>
			</Helmet>
			<Hero title={title} imageUrl={imgUrl} alt={alt} />
			<ContentTransport />
			<Form />
		</>
	)
}

export default Transport
