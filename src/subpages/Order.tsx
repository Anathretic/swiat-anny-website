import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useMediaQuery } from 'react-responsive';
import { OrderForm } from '../components/Forms/OrderForm.tsx';
import { useAppSelector } from '../hooks/reduxHooks';
import { useContactFormButton } from '../hooks/useContactFormButton';
import { getPaintingSizeInitialValue } from '../redux/paintingSizeReduxSlice/paintingSizeSlice';

const Order: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useContactFormButton();
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });
	const refCaptcha = useRef<ReCAPTCHA>(null);
	const navigate = useNavigate();
	const selectedSize = useAppSelector(getPaintingSizeInitialValue);

	useEffect(() => {
		if (selectedSize === '') navigate('/oferta');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='order'>
			<div className='order__container dark-blue-gradient'>
				<OrderForm
					isLoading={isLoading}
					setIsLoading={setIsLoading}
					errorValue={errorValue}
					setErrorValue={setErrorValue}
					buttonText={buttonText}
					setButtonText={setButtonText}
					isMobile={isMobile}
					refCaptcha={refCaptcha}
					navigate={navigate}
					selectedSize={selectedSize}
				/>
			</div>
		</div>
	);
};

export default Order;
