import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';

export const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Welcome />} />
			<Route
				path='oferta'
				element={
					<>
						<Header />
						<main>
							<div className='main-section'></div>
						</main>
						<Footer />
					</>
				}
			/>
			<Route path='*' element={<div>Strona nie istnieje!</div>} />
		</Routes>
	);
};
