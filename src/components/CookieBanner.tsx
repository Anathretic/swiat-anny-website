import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { scrollToTop } from '../utils/scrollToTop';

const CookieBanner: React.FC = ({ ...otherProps }) => {
	return (
		<CookieConsent
			location='bottom'
			buttonText='OK'
			style={{
				color: '#fff',
				backgroundColor: '#a34087',
				fontSize: '12px',
				padding: '10px',
				textAlign: 'center',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			buttonStyle={{
				backgroundColor: '#ffdf00',
				fontSize: '14px',
				padding: '10px',
				width: '100px',
				borderRadius: '8px',
			}}
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
