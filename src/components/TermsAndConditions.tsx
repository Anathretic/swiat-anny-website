import { MailToButton } from './littleComponents/MailToButton';

export const TermsAndConditions: React.FC = () => {
	return (
		<div className='terms'>
			<div className='terms__container dark-blue-gradient'>
				<div className='terms__box'>
					<p className='terms__title'>1. Administrator danych</p>
					<p className='terms__text'>
						Administratorem Państwa danych jest <span>Anna Wojtyło</span>, właściciel strony Świat Anny.
					</p>
				</div>
				<div className='terms__box'>
					<p className='terms__title'>2. Kiedy zbieram Twoje dane?</p>
					<p className='terms__text'>
						Dane użytkownika (takie jak adres e-mail, czy numer telefonu) są gromadzone wyłącznie podczas korzystania z
						formularza kontaktowego i/lub składania zamówienia.
					</p>
				</div>
				<div className='terms__box'>
					<p className='terms__title'>3. Jak wygląda przepływ danych?</p>
					<p className='terms__text'>
						Twoje dane zbierane poprzez formularz kontaktowy i formularz zamówieniowy są przetwarzane wyłącznie w celach
						kontaktowych oraz realizacji zamówienia. Nikomu ich nie udostępniam, ani nie sprzedaję.
					</p>
					<p className='terms__text terms__text--special'>
						Korzystanie z formularza kontaktowego, jak i zamówieniowego, jest dobrowolne.
					</p>
				</div>
				<div className='terms__box'>
					<p className='terms__title'>4. Pozostałe informacje</p>
					<p className='terms__text'>
						W razie jakichkolwiek pytań proszę o kontakt na mój adres mailowy:{' '}
						<MailToButton label='annawojtylo73@gmail.com' mailto='mailto:annawojtylo73@gmail.com' />
					</p>
				</div>
				<div className='terms__box'>
					<p className='terms__title'>5. Projekt strony</p>
					<p className='terms__text'>
						Wstępna makieta oraz cały kod:{' '}
						<a className='terms__text-link' href='https://konrad-wojtylo.com/' target='_blank' rel='noreferrer'>
							Konrad Wojtyło
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};
