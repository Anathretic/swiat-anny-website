import { OpinionsItemModel } from '../../../models/opinions.model';

export const OpinionItem: React.FC<OpinionsItemModel> = ({ name, opinion, title }) => {
	return (
		<div className='opinions__box dark-blue-gradient'>
			<img src='' alt='' />
			<h3>{title}</h3>
			<p>{opinion}</p>
			<span>{name}</span>
		</div>
	);
};
