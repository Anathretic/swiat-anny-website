import { Link } from 'react-router-dom';
import NotFoundImage from '../images/notfound-img.svg';

const PageNotFound: React.FC = () => {
	return (
		<main>
			<section className='notfound'>
				<img className='notfound__img' src={NotFoundImage} alt='Page not found image' />
				<a href='https://storyset.com/online' className='notfound__credits' target='_blank'>
					Error 404 image by Storyset
				</a>
				<Link to='/' className='notfound__btn'>
					home
				</Link>
			</section>
		</main>
	);
};

export default PageNotFound;
