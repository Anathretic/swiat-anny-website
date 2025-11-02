import { Helmet } from 'react-helmet-async';
import Welcome from './Welcome/Welcome';
import History from './History/History';
import Offer from './Offer/Offer';
import Opinions from './Opinions/Opinions';
import Contact from './Contact/Contact';

const Home: React.FC = () => {
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
			<main className='special-main'>
				<Welcome />
				<History />
				<Offer />
				<Opinions />
				<Contact />
			</main>
		</>
	);
};

export default Home;
