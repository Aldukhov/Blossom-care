import React from 'react'
import Hero from '../../../components/hero/Hero'
import Form from '../../../components/form/Form'
import ContentCommunityParticipation from '../../../components/content-rectangle/content-community-participation/ContentCommunityParticipation'
import imageUrl from '../../../assets/images/services/community participation/friends-playng-chess.jpg'
import { Helmet } from 'react-helmet-async'

const CommunityParticipation: React.FC = () => {
	const title = 'Community Participation'
	const alt = 'Group of friends with down syndrome playng chess board together'
	const customStyle = {
		objectPosition: 'center',
	}

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta
					name='description'
					content='Explore opportunities for social inclusion with NDIS support. We help
people with disabilities connect with their community, join groups, and participate in
activities they enjoy.'
				/>
			</Helmet>
			<Hero title={title} imageUrl={imageUrl} style={customStyle} alt={alt} />
			<ContentCommunityParticipation />
			<Form />
		</>
	)
}

export default CommunityParticipation
