import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import NotFoundImage from '../images/notfound-img.svg';

const PageNotFound: React.FC = () => {
	const currentUrl = window.location.href;

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Strona nie znaleziona | Świat Anny</title>
				<meta
					name='description'
					content='Ups! Wygląda na to, że ta strona nie istnieje. Sprawdź adres lub wróć na stronę główną.'
				/>
				<meta property='og:title' content='Strona nie znaleziona | Świat Anny' />
				<meta property='og:description' content='Nie znaleziono strony. Przekieruj się do naszej oferty.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content={currentUrl} />
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<main>
				<section className='notfound'>
					<img className='notfound__img' src={NotFoundImage} alt='Obrazek error 404' />
					<a href='https://storyset.com/online' className='notfound__credits' target='_blank'>
						Error 404 image by Storyset
					</a>
					<Link to='/' className='notfound__btn'>
						Home
					</Link>
				</section>
			</main>
		</>
	);
};

export default PageNotFound;
