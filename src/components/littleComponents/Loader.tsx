interface Classes {
	className: string;
}

export const Loader: React.FC<Classes> = ({ className }) => {
	return (
		<div className={className}>
			<div className='loader__spinner' />
		</div>
	);
};
