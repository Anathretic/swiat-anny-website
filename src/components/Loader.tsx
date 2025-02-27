import { LoaderModel } from '../models/loader.model';

const Loader: React.FC<LoaderModel> = ({ className }) => {
	return (
		<div className={className}>
			<div
				className={`loader__spinner ${
					className.includes('--special') ? 'loader__spinner--white' : 'loader__spinner--pink'
				}`}
			/>
		</div>
	);
};

export default Loader;
