import { Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Header } from './components/Header';
import { Offer } from './components/Offer';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Welcome />} />
			<Route
				path='oferta'
				element={
					<>
						<Header />
						<Offer />
						<Footer />
					</>
				}
			/>
			<Route path='*' element={<div>Strona nie istnieje!</div>} />
		</Routes>
	);
};
