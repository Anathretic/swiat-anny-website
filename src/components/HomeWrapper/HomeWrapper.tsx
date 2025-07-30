import { Helmet } from 'react-helmet-async';
import { HomeWrapperModel } from '../../models/simpleComponents.model';

const HomeWrapper: React.FC<HomeWrapperModel> = ({ children }) => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Malarstwo i Sztuka Nowoczesna | Świat Anny</title>
				<meta
					name='description'
					content='Chciałbyś odświeżyć wygląd swojej sypialni? Na półkach jest zbyt wiele miejsca? Napisz! Stworzymy idealną ozdobę w postaci obrazu!'
				/>
				<meta
					name='keywords'
					content='pouring, malarstwo, rysunek, malowanie, sztuka, sztuka nowoczesna, dzieło artystyczne, pracownia artystyczna'
				/>
				<meta property='og:title' content='Malarstwo i Sztuka Nowoczesna | Świat Anny' />
				<meta
					property='og:description'
					content='Chciałbyś odświeżyć wygląd swojej sypialni? Na półkach jest zbyt wiele miejsca? Napisz! Stworzymy idealną ozdobę w postaci obrazu!'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://swiat-anny.pl/' />
				<link rel='canonical' href='https://swiat-anny.pl/' />
			</Helmet>
			<main>{children}</main>
		</>
	);
};

export default HomeWrapper;
