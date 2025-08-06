import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { scrollToTop } from '../utils/scrollToTop';
import { GiSpotedFlower } from 'react-icons/gi';

const TermsAndConditions: React.FC = () => {
	const navigate = useNavigate();

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Regulamin | Świat Anny</title>
				<meta
					name='description'
					content='Dowiedz się, jak przetwarzam Twoje dane osobowe i jak dbam o ich bezpieczeństwo.'
				/>
				<meta property='og:title' content='Regulamin | Świat Anny' />
				<meta property='og:description' content='Zapoznaj się z moimi zasadami prywatności i przetwarzania danych.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://swiat-anny.pl/regulamin' />
				<link rel='canonical' href='https://swiat-anny.pl/regulamin' />
			</Helmet>
			<main>
				<section className='terms'>
					<div className='terms__container dark-blue-gradient'>
						<h1 className='terms__main-title'>Regulamin</h1>
						<hr className='terms__strap' />
						<div className='terms__box'>
							<h2 className='terms__title'>1. Informacje ogólne</h2>
							<p className='terms__text'>
								Niniejszy dokument określa zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies
								przez stronę internetową Świat Anny, dostępną pod adresem{' '}
								<a href='https://swiat-anny.pl/' className='terms__text-link'>
									swiat-anny.pl
								</a>
							</p>
							<p className='terms__text terms__text--special'>Administratorem danych osobowych jest Anna Wojtyło.</p>
							<p className='terms__text terms__text--special'>
								Dbam o Twoją prywatność i bezpieczeństwo Twoich danych. Wszystkie dane osobowe są przetwarzane zgodnie z
								obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
								2016/679 (RODO).
							</p>
						</div>
						<div className='terms__box'>
							<h2 className='terms__title'>2. Jakie dane są zbierane?</h2>
							<p className='terms__text'>
								Dane osobowe są zbierane wyłącznie w sytuacjach, gdy użytkownik dobrowolnie je udostępni — tj. podczas:
							</p>
							<ul>
								<li>korzystania z formularza kontaktowego,</li>
								<li>korzystania z formularza zamówieniowego.</li>
							</ul>
							<p className='terms__text terms__text--special'>Zakres przetwarzanych danych może obejmować:</p>
							<ul>
								<li>imię i nazwisko,</li>
								<li>adres e-mail,</li>
								<li>numer telefonu,</li>
								<li>inne dane podane dobrowolnie w wiadomości.</li>
							</ul>
						</div>
						<div className='terms__box'>
							<h2 className='terms__title'>3. Cel i podstawa przetwarzania danych</h2>
							<p className='terms__text'>Dane osobowe są przetwarzane w następujących celach:</p>
							<ul>
								<li>udzielenie odpowiedzi na przesłane zapytanie (formularz kontaktowy),</li>
								<li>realizacja zamówień lub świadczenie usług (formularz zamówieniowy),</li>
								<li>kontakt w sprawie świadczonych usług lub zamówień.</li>
							</ul>
							<p className='terms__text terms__text--special'>Podstawą prawną przetwarzania danych osobowych jest:</p>
							<ul>
								<li>art. 6 ust. 1 lit. b RODO – wykonanie umowy lub działania zmierzające do jej zawarcia,</li>
								<li>
									art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora, np. udzielenie odpowiedzi na
									zapytanie.
								</li>
							</ul>
							<p className='terms__text terms__text--special'>
								Podanie danych jest dobrowolne, ale niezbędne do skorzystania z formularza kontaktowego lub
								zamówieniowego.
							</p>
						</div>
						<div className='terms__box'>
							<h2 className='terms__title'>4. Gdzie i jak dane są przetwarzane?</h2>
							<p className='terms__text'>
								Twoje dane mogą być przechowywane i przetwarzane za pomocą narzędzi i usług firm zewnętrznych:
							</p>
							<ul>
								<li>
									Supabase – jako baza danych do przechowywania formularzy kontaktowych i zamówieniowych. Dane mogą być
									przechowywane na serwerach w Europejskim Obszarze Gospodarczym.
								</li>
								<li>EmailJS – do automatycznego przesyłania wiadomości e-mail generowanych przez formularze.</li>
								<li>Google reCAPTCHA – do zabezpieczenia formularzy przed spamem (więcej w punkcie 7).</li>
								<li>Hostinger – jako dostawca hostingu dla strony.</li>
							</ul>
							<p className='terms__text terms__text--special'>
								Każdy z tych dostawców usług przetwarza dane zgodnie z własną polityką prywatności i zapewnia zgodność z
								przepisami RODO.
							</p>
							<p className='terms__text terms__text--special'>
								Dane nie są przekazywane poza EOG, z wyjątkiem sytuacji, gdy dostawca (np. EmailJS) zapewnia odpowiedni
								poziom ochrony danych (np. poprzez standardowe klauzule umowne).
							</p>
						</div>
						<div className='terms__box'>
							<h2 className='terms__title'>5. Czas przechowywania danych</h2>
							<p className='terms__text'>Dane osobowe są przechowywane przez okres:</p>
							<ul>
								<li>niezbędny do realizacji celu, dla którego zostały zebrane,</li>
								<li>lub do momentu wniesienia sprzeciwu lub żądania ich usunięcia,</li>
								<li>lub przez okres wymagany przepisami prawa (np. podatkowego – w przypadku faktur).</li>
							</ul>
						</div>
						<div className='terms__box'>
							<h2 className='terms__title'>6. Prawa użytkownika</h2>
							<p className='terms__text'>Masz prawo do:</p>
							<ul>
								<li>dostępu do swoich danych,</li>
								<li>sprostowania danych,</li>
								<li>usunięcia danych ("prawo do bycia zapomnianym"),</li>
								<li>ograniczenia przetwarzania,</li>
								<li>przenoszenia danych,</li>
								<li>wniesienia sprzeciwu wobec przetwarzania,</li>
								<li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
							</ul>
							<p className='terms__text terms__text--special'>
								W celu realizacji powyższych praw należy skontaktować się z administratorem:{' '}
								<a href='mailto:annawojtylo73@gmail.com' className='terms__text-link'>
									annawojtylo73@gmail.com
								</a>
							</p>
						</div>
						<div className='terms__box'>
							<h2 className='terms__title'>7. Zabezpieczenia i technologie</h2>
							<p className='terms__text'>
								Na stronie wykorzystywana jest technologia Google reCAPTCHA, której celem jest zapobieganie nadużyciom i
								spamowi w formularzach. Zastosowanie tego mechanizmu wiąże się z analizą ruchu (np. adres IP, cookies,
								zachowanie użytkownika). Obowiązują tu zasady prywatności Google:
							</p>
							<ul>
								<li>
									<a href='https://policies.google.com/privacy' className='terms__text-link'>
										https://policies.google.com/privacy
									</a>
								</li>
								<li>
									<a href='https://policies.google.com/terms' className='terms__text-link'>
										https://policies.google.com/terms
									</a>
								</li>
							</ul>
						</div>
						<div className='terms__box'>
							<h2 className='terms__title'>8. Pliki cookies</h2>
							<p className='terms__text'>
								Strona korzysta z plików cookies (ciasteczek), czyli niewielkich plików zapisywanych na Twoim
								urządzeniu.
							</p>
							<p className='terms__text terms__text--special'>Cele stosowania cookies:</p>
							<ul>
								<li>zapewnienie prawidłowego działania strony,</li>
								<li>zapobieganie spamowi (reCAPTCHA),</li>
							</ul>
							<p className='terms__text terms__text--special'>Rodzaje wykorzystywanych cookies:</p>
							<ul>
								<li>techniczne (niezbędne) – wymagane do działania strony,</li>
							</ul>
							<p className='terms__text terms__text--special'>
								Użytkownik może samodzielnie zarządzać plikami cookies poprzez ustawienia przeglądarki internetowej.
								Można zablokować ich zapisywanie lub całkowicie usunąć zapisane pliki cookies. Wyłączenie cookies może
								jednak wpłynąć na działanie strony.
							</p>
						</div>
						<div className='terms__box'>
							<h2 className='terms__title'>9. Zmiany w polityce prywatności</h2>
							<p className='terms__text'>
								Administrator zastrzega sobie prawo do zmiany niniejszej Polityki Prywatności. Zmiany będą publikowane
								na tej stronie. Zaleca się jej regularne sprawdzanie.
							</p>
						</div>
						<div className='terms__box'>
							<h2 className='terms__title'>10. Dane kontaktowe</h2>
							<p className='terms__text'>
								W razie jakichkolwiek pytań lub wątpliwości związanych z ochroną danych osobowych lub polityką cookies,
								proszę o kontakt:{' '}
								<a href='mailto:annawojtylo73@gmail.com' className='terms__text-link'>
									annawojtylo73@gmail.com
								</a>
							</p>
						</div>
						<div className='terms__box'>
							<h2 className='terms__title'>11. Informacje dodatkowe</h2>
							<p className='terms__text'>
								Wstępna makieta oraz cały kod:{' '}
								<a
									className='terms__text-link'
									href='https://www.linkedin.com/in/konrad-wojtylo/'
									target='_blank'
									rel='noreferrer'>
									Konrad Wojtyło
								</a>
							</p>
							<p className='terms__text' style={{ marginTop: '0.5em' }}>
								Korekty i audyt UX/UI:{' '}
								<a
									className='terms__text-link'
									href='https://www.linkedin.com/in/edyta-honkisz/'
									target='_blank'
									rel='noreferrer'>
									Edyta Honkisz
								</a>
							</p>
						</div>
						<hr className='terms__strap' />
						<div className='terms__box'>
							<button
								type='button'
								className='terms__button'
								onClick={() => {
									navigate(-1);
									scrollToTop();
								}}>
								Powrót
							</button>
						</div>
						<GiSpotedFlower className='terms__special-icon terms__special-icon--first' />
						<GiSpotedFlower className='terms__special-icon terms__special-icon--second' />
					</div>
				</section>
			</main>
		</>
	);
};

export default TermsAndConditions;
