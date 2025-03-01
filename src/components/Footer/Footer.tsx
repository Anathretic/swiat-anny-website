import { FaInstagram } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__text'>
				<span>Chciałbyś zobaczyć jak wykonuje swoje obrazy? Sprawdź mój profil na Instagramie!</span>
				<div className='footer__icons-box'>
					<a
						href='https://www.instagram.com/swiat_anny_anna_maluje/'
						target='_blank'
						rel='noreferrer'
						className='footer__icon'>
						<FaInstagram />
					</a>
				</div>
				<p className='footer__copyright'>&copy; {currentYear} Świat Anny</p>
			</div>
		</footer>
	);
};

export default Footer;
