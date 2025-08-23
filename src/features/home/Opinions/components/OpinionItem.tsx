import { OpinionsItemModel } from '../models/opinions.model';

export const OpinionItem: React.FC<OpinionsItemModel> = ({ id, name, opinion, title }) => {
	return (
		<div className='opinions__box dark-blue-gradient'>
			<div className={`opinions__box-image opinions__box-image--${id}`} />
			<h3>{title}</h3>
			<p>{opinion}</p>
			<span>{name}</span>
		</div>
	);
};
