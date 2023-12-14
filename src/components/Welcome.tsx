import { Link } from 'react-router-dom';

export const Welcome: React.FC = () => {
	return (
		<div className='homepage'>
			<div className='homepage__container'>
				<h1 className='homepage__title'>świat anny</h1>
				<Link to='anna-maluje' className='homepage__button'>
					anna maluje
				</Link>
			</div>
		</div>
	);
};
