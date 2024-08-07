import React from 'react'
import RecLivingOptions from '../../../components/content-rectangle/recLivingOptions/recLivingOptions'
import Hero from '../../../components/hero/Hero'
import Form from '../../../components/form/Form'
import imgUrl from '../../../assets/images/services/living options/women-and-girl-smaling.jpg'
import { Helmet } from 'react-helmet-async'

const LinvingOptions: React.FC = () => {
	const title = 'Individualised Living Options'
	const alt = 'Cooking class friends'
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta
					name='description'
					content='Explore Independent Living Options (ILO) with NDIS. Design your ideal
living situation with flexible, personalised support tailored to your needs and goals.'
				/>
			</Helmet>
			<Hero title={title} imageUrl={imgUrl} alt={alt} />
			<RecLivingOptions />
			<Form />
		</>
	)
}

export default LinvingOptions
