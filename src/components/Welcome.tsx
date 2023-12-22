import { Link } from 'react-router-dom';

export const Welcome: React.FC = () => {
	return (
		<div className='homepage'>
			<div className='homepage__container'>
				<h1 className='homepage__title'>
					<span className='homepage__title-span'>Ś</span>
					<span className='homepage__title-span'>w</span>
					<span className='homepage__title-span'>i</span>
					<span className='homepage__title-span'>a</span>
					<span className='homepage__title-span'>t</span>
					<span className='homepage__title-span'>A</span>
					<span className='homepage__title-span'>n</span>
					<span className='homepage__title-span'>n</span>
					<span className='homepage__title-span'>y</span>
				</h1>
				<Link to='anna-maluje' className='homepage__button'>
					odkryj
				</Link>
			</div>
		</div>
	);
};
