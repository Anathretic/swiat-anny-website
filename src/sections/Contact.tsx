import { Link } from 'react-router-dom';
import { ContactForm } from '../components/Forms/ContactForm';
import { scrollToTop } from '../utils/scrollToTop';

import { FiMail, FiPhone, FiInstagram } from 'react-icons/fi';

const Contact: React.FC = () => {
	return (
		<section className='contact' id='kontakt'>
			<div className='contact__container'>
				<div className='contact__title-box'>
					<h2 className='contact__title'>Kontakt</h2>
					<div className='contact__title-decoration' />
					<p className='contact__title-subtext'>
						Gotowy na podróż przez zakamarki sztuki? Świetnie! Ale jeśli Twoją głowę męczy jakieś pytanie skorzystaj z
						formularza kontaktowego lub zadzwoń na poniższy numer!
					</p>
					<p className='contact__title-subtext'>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującym{' '}
						<Link to='/regulamin' onClick={scrollToTop}>
							regulaminem.
						</Link>
					</p>
					<ul className='contact__title-info-box'>
						<li>
							<div>
								<FiMail />
							</div>
							<div>
								<p>E-mail:</p>
								<a href='mailto:annawojtylo73@gmail.com'>annawojtylo73@gmail.com</a>
							</div>
						</li>
						<li>
							<div>
								<FiPhone />
							</div>
							<div>
								<p>Telefon:</p>
								<a href='tel:+48533864903'>+48 533 864 903</a>
							</div>
						</li>
						<li>
							<div>
								<FiInstagram />
							</div>
							<div>
								<p>Instagram:</p>
								<a href='https://www.instagram.com/swiat_anny_anna_maluje/' target='_blank' rel='noreferrer'>
									swiat_anny_anna_maluje
								</a>
							</div>
						</li>
					</ul>
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
