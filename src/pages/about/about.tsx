import React, { ReactEventHandler } from 'react'
import styles from './about.module.css'
import Mission from '../../components/about-page-components/mission/Mission'
import Hero from '../../components/hero/Hero'
import ACTA from '../../components/about-page-components/cta/ACTA'
import Stats from '../../components/about-page-components/stats/Stats'
import Form from '../../components/form/Form'
import imgUrl from '../../assets/images/about us/header.jpg'
import { Helmet } from 'react-helmet-async'

const About: React.FC = () => {
	const title = 'About us'

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta
					name='description'
					content='Blossom Care fosters a supportive community for individuals with
disabilities to live fulfilling lives. We offer professional services, ethical care, and a team
dedicated to your success.'
				/>
			</Helmet>
			<Hero title={title} imageUrl={imgUrl} alt={'header'} />
			<Mission />
			<ACTA />
			<Stats />
			<Form />
		</>
	)
}

export default About
