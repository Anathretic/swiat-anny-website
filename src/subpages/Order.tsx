import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { getPaintingSizeInitialValue } from '../redux/paintingSizeReduxSlice/paintingSizeSlice';
import { useAppSelector } from '../hooks/reduxHooks';
import { OrderForm } from '../components/Forms/OrderForm.tsx';
import { GiPalette } from 'react-icons/gi';

const Order: React.FC = () => {
	const navigate = useNavigate();
	const selectedSize = useAppSelector(getPaintingSizeInitialValue);

	useEffect(() => {
		if (selectedSize === '') navigate('/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Zamówienie | Świat Anny</title>
				<meta
					name='description'
					content='Składaj zamówienie na unikatowe dzieła malowane techniką pouring. Wypełnij formularz, aby zamówić swój obraz.'
				/>
				<meta property='og:title' content='Zamówienie | Świat Anny' />
				<meta
					property='og:description'
					content='Złóż zamówienie na wyjątkowe obrazy wykonane techniką pouring. Wypełnij formularz i stwórzmy to razem.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://swiat-anny.pl/zloz-zamowienie' />
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<main>
				<section className='order'>
					<div className='order__container dark-blue-gradient'>
						<OrderForm selectedSize={selectedSize} />
						<GiPalette className='order__special-icon' />
					</div>
				</section>
			</main>
		</>
	);
};

export default Order;
