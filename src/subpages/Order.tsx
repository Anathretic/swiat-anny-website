import { useEffect } from 'react';
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
		<section className='order'>
			<div className='order__container dark-blue-gradient'>
				<OrderForm selectedSize={selectedSize} />
				<GiPalette className='order__special-icon' />
			</div>
		</section>
	);
};

export default Order;
