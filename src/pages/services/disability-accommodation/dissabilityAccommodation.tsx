import React from 'react'
import Hero from '../../../components/hero/Hero'
import Form from '../../../components/form/Form'
import ContentAccommodation from '../../../components/content-rectangle/content-disability-accommodation/contentAccommodation'
import imgUrl from '../../../assets/images/services/disability accomodation/room with tv.jpg'
import { Helmet } from 'react-helmet-async'

const Accommodation: React.FC = () => {
	const title = 'Specialist Disability Accommodation'
	const alt =
		'Modern Luxury Room Interior With Empty Bed, Lcd Television And City View From The Window'
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta
					name='description'
					content='Explore Specialist Disability Accommodation (SDA) - housing designed
for those with severe functional impairments. Learn about eligibility, design categories, and
NDIS funding.'
				/>
			</Helmet>
			<Hero title={title} imageUrl={imgUrl} alt={alt} />
			<ContentAccommodation />
			<Form />
		</>
	)
}

export default Accommodation
