import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import {
	getPopupSelectPaintingSizeInitialValue,
	resetSize,
} from '../redux/popupSelectPaintingSizeReduxSlice/popupSelectPaintingSizeSlice';
import { useEffect } from 'react';

export const OrderPopup: React.FC = () => {
	const selectedSize = useAppSelector(getPopupSelectPaintingSizeInitialValue);
	const disptach = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (selectedSize === '') {
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='order-popup'>
			<p>Udało się!</p>
			<p>{selectedSize}</p>
			<button
				type='button'
				onClick={() => {
					disptach(resetSize());
					navigate(-1);
				}}>
				Cofnij
			</button>
		</div>
	);
};
