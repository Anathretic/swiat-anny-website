import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';

const Welcome: React.FC = () => {
	return (
		<div className='homepage'>
			<div className='homepage__container'>
				<h1 className='homepage__title'>
					<span>Ś</span>
					<span>w</span>
					<span>i</span>
					<span>a</span>
					<span>t</span>
					<span>A</span>
					<span>n</span>
					<span>n</span>
					<span>y</span>
				</h1>
				<Link to='oferta' className='homepage__button' onClick={scrollToTop}>
					odkryj
				</Link>
			</div>
		</div>
	);
};

export default Welcome;
