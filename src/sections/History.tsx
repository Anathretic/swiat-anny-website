import { GiEasel } from 'react-icons/gi';
import SectionImage from '../images/history-section-image.jpg';

const History: React.FC = () => {
	return (
		<section id='historia' className='history'>
			<div className='history__container'>
				<h2 className='history__title'>Historia</h2>
				<div className='history__title-decoration' />
				<div className='history__wrapper'>
					<div className='history__image-box'>
						<img src={SectionImage} alt='Obraz przedstawiający malarza, która nabiera farbę pędzlem z palety' />
						<GiEasel className='history__image-box-icon' />
					</div>
					<div className='history__content-container'>
						<div className='history__content-box'>
							<h3>I</h3>
							<p>
								W wieku 50 lat Anna poczuła, że nadszedł czas na wielką zmianę. Przez całe życie marzyła o malowaniu,
								ale nigdy nie miała odwagi, by podjąć ten krok. Zajmowała się pracą biurową, żyła według ustalonych
								schematów, choć w jej sercu ciągle tkwiła tęsknota za czymś innym. Kiedy skończyła 50 lat, postanowiła,
								że nie chce czekać dłużej. Zdecydowała się na malowanie pouringiem – metodą, którą odkryła przypadkiem,
								oglądając film o artystach, którzy tworzą dzieła za pomocą intensywnych, pełnych emocji ruchów.
							</p>
						</div>
						<div className='history__special-decoration' />
						<div className='history__content-box'>
							<h3>II</h3>
							<p>
								Pierwsze obrazy powstały w jej niewielkim studio, które zamieniła w przestrzeń twórczą. Farby wylewały
								się na płótno w przypadkowy sposób, tworząc niepowtarzalne kształty i kolory. Anna odkryła, że to w tej
								swobodzie wyrazu czuje się naprawdę sobą. Każda kolejna warstwa farby była dla niej momentem
								oczyszczenia, a proces tworzenia stał się jej osobistą terapią. Na początku nie była pewna, czy jej
								prace spotkają się z uznaniem, ale gdy zaczęła je pokazywać, zaskoczyła ją reakcja ludzi – nie tylko
								podziwiali jej obrazy, ale czuli w nich autentyczność i pasję, które w końcu ujrzały światło dzienne.
							</p>
						</div>
						<div className='history__special-decoration' />
						<div className='history__content-box'>
							<h3>III</h3>
							<p>
								Anna czuła, że podjęła najlepszą decyzję w swoim życiu. Choć nie była już najmłodsza, malowanie dało jej
								poczucie wolności i spełnienia, o którym marzyła przez tyle lat. Odkryła, że nigdy nie jest za późno, by
								zacząć realizować swoje pasje i żyć pełnią życia, bez względu na wiek.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default History;
