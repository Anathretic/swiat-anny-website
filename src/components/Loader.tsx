import { LoaderModel } from '../models/loader.model';

const Loader: React.FC<LoaderModel> = ({ className }) => {
	return (
		<div className={className}>
			<div className='loader__spinner' />
		</div>
	);
};

export default Loader;
