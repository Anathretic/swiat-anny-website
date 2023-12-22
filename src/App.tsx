import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Link } from 'react-router-dom';

export const App: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<div className='wrapper'>
					<div className='main-section'>
						<div className='main-section__first-frame'>
							<h3 className='main-section__title'>
								duże <br /> obrazy
							</h3>
							<Link to='/' className='main-section__button'>
								zobacz
							</Link>
						</div>
						<div className='main-section__second-frame'>
							<h3 className='main-section__title'>
								średnie <br /> obrazy
							</h3>
							<Link to='/' className='main-section__button'>
								zobacz
							</Link>
						</div>
						<div className='main-section__third-frame'>
							<h3 className='main-section__title'>
								małe <br /> obrazy
							</h3>
							<Link to='/' className='main-section__button'>
								zobacz
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};
