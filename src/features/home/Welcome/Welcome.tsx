import { HashLink } from 'react-router-hash-link';

const Welcome: React.FC = () => {
	return (
		<section className='welcome'>
			<div className='welcome__container'>
				<h1 className='welcome__title'>
					<span>Ś</span>
					<span>w</span>
					<span>i</span>
					<span>a</span>
					<span>t</span>
					<br className='welcome__special-br-tag' />
					<span>A</span>
					<span>n</span>
					<span>n</span>
					<span>y</span>
				</h1>
				<p className='welcome__subtext'>Kolory, które poruszają. Obrazy, które mówią bez słów.</p>
				<HashLink smooth to='/#oferta' className='welcome__button'>
					Oferta
				</HashLink>
			</div>
		</section>
	);
};

export default Welcome;
