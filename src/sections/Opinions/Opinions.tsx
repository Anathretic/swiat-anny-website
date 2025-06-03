import { useQuery } from '@apollo/client';
import { OPINIONS } from '../../graphql/graphModels';
import { Carousel } from 'react-responsive-carousel';
import { Loader } from '../../components';
import { OpinionItem } from './components/OpinionItem';
import { OpinionsDataModel } from '../../models/opinions.model';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Opinions: React.FC = () => {
	const { loading, error, data } = useQuery(OPINIONS, {
		fetchPolicy: 'cache-first',
	});

	return (
		<section id='opinie' className='opinions'>
			<div className='opinions__container'>
				<h2 className='opinions__title'>Opinie</h2>
				<div className='opinions__title-decoration' />
				{!error ? (
					!loading ? (
						<div className='opinions__wrapper'>
							<Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay infiniteLoop>
								{data.opinionsCollection.edges.map((data: OpinionsDataModel, id: number) => (
									<OpinionItem
										key={id}
										id={data.node.id}
										title={data.node.title}
										opinion={data.node.opinion}
										name={data.node.name}
									/>
								))}
							</Carousel>
						</div>
					) : (
						<Loader className='loader loader--special' />
					)
				) : (
					<p className='opinions__error'>Ups! Wygląda na to, że serwer ma przerwę..</p>
				)}
			</div>
		</section>
	);
};

export default Opinions;
