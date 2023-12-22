import { FaInstagram, FaRegCopyright } from 'react-icons/fa';

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

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
				<p className='footer__copyright'>
					<FaRegCopyright className='footer__copyright-icon' />
					{currentYear} Świat Anny
				</p>
			</div>
		</footer>
	);
};
