import { ContactForm } from '../components/Forms/ContactForm';
import { GiEasel } from 'react-icons/gi';

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
						obowiązującą polityką prywatności.
					</p>
					<ul className='contact__title-info-box'>
						<li>
							<p>E-mail:</p>
							<p>annawojtylo73@gmail.com</p>
						</li>
						<li>
							<p>Telefon:</p>
							<p>+48 533 864 903</p>
						</li>
					</ul>
					<GiEasel className='contact__title-icon contact__title-icon--first' fontSize={200} />
					<GiEasel className='contact__title-icon contact__title-icon--second' fontSize={120} />
					<GiEasel className='contact__title-icon contact__title-icon--third' fontSize={90} />
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
