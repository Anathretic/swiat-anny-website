import { OpinionsItemModel } from '../../../models/opinions.model';

interface OpinionItemProps extends OpinionsItemModel {
	setStopAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OpinionItem: React.FC<OpinionItemProps> = ({ id, name, opinion, title, setStopAnimation }) => {
	return (
		<div
			className='opinions__box dark-blue-gradient'
			onMouseOver={() => {
				setStopAnimation(true);
			}}
			onMouseLeave={() => {
				setStopAnimation(false);
			}}>
			<div className={`opinions__box-image opinions__box-image--${id}`} />
			<h3>{title}</h3>
			<p>{opinion}</p>
			<span>{name}</span>
		</div>
	);
};
