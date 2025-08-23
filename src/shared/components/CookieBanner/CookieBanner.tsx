import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { scrollToTop } from '../../utils/scrollToTop';

const CookieBanner: React.FC = ({ ...otherProps }) => {
	return (
		<CookieConsent
			disableStyles={true}
			containerClasses='cookie-banner-container'
			buttonClasses='cookie-banner-button'
			location='bottom'
			buttonText='Zamknij'
			expires={1}
			{...otherProps}>
			<p className='cookie-banner-text'>
				Ta strona używa plików cookie wyłącznie w celach technicznych (np. google reCaptcha). Dowiedz się więcej z{' '}
				<Link to='/regulamin' className='cookie-banner-link' onClick={scrollToTop}>
					regulaminu
				</Link>
				.
			</p>
		</CookieConsent>
	);
};

export default CookieBanner;
