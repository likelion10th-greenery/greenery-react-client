import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

export default function CarouselComponent() {
	return (
		<Wrapper>
			<Carousel infiniteLoop autoPlay showThumbs={true} thumbWidth={70}>
				<div>
					<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
				</div>
				<div>
					<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
				</div>
				<div>
					<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
				</div>
				<div>
					<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
				</div>
			</Carousel>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 3rem 2rem;
`;
