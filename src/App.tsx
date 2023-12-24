import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<div className='main-section'></div>
			</main>
			<Footer />
		</>
	);
};
