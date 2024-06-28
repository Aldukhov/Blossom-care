import React from 'react'
import Hero from '../../../components/hero/Hero'
import Form from '../../../components/form/Form'
import ContentIndepLiving from '../../../components/content-rectangle/content-independent-living/contentIndepLiving'
import ACTA from '../../../components/about-page-components/cta/ACTA'
import OvalIndependetLiving from '../../../components/content-oval/oval-independing-living/OvalIndependingLiving'
import imgUrl from '../../../assets/images/services/independent living/happy-disabled-man.jpg'
import { Helmet } from 'react-helmet-async'

const IndependetLiving: React.FC = () => {
	const title = 'Supported Independent Living'
	const alt = 'Happy disabled man in wheelchair and friend celebrating at home'

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta
					name='description'
					content='Explore Supported Independent Living (SIL) - an NDIS program that
empowers people with disabilities to live as independently as possible. Learn about
eligibility, living arrangements, and how SIL can help you achieve your goals.'
				/>
			</Helmet>
			<Hero title={title} imageUrl={imgUrl} alt={alt} />
			<ContentIndepLiving />
			<ACTA />
			<OvalIndependetLiving />
			<Form />
		</>
	)
}

export default IndependetLiving
