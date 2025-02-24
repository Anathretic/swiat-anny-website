import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderForm } from '../components/Forms/OrderForm.tsx';
import { useAppSelector } from '../hooks/reduxHooks';
import { getPaintingSizeInitialValue } from '../redux/paintingSizeReduxSlice/paintingSizeSlice';

const Order: React.FC = () => {
	const navigate = useNavigate();
	const selectedSize = useAppSelector(getPaintingSizeInitialValue);

	useEffect(() => {
		if (selectedSize === '') navigate('/oferta');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className='order'>
			<div className='order__container dark-blue-gradient'>
				<OrderForm selectedSize={selectedSize} />
			</div>
		</section>
	);
};

export default Order;
