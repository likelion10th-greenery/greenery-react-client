import React, { useState } from 'react';
import styled from 'styled-components';
import { items } from '../rawData';

function MiniCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<CarouselArea>
			<Carousel>
				<CarouselList>
					<CarouselTrack
						style={{
							transform: `translateX(${(-100 / { items }.length) * (0.5 + currentIndex)}%)`,
						}}
					>
						{items.map(item => (
							<CarouselItem>
								<a>
									<img src={item.img_url} />
								</a>
							</CarouselItem>
						))}
					</CarouselTrack>
				</CarouselList>
			</Carousel>
		</CarouselArea>
	);
}

export const CarouselArea = styled.div``;
export const Carousel = styled.div``;
export const CarouselList = styled.div``;
export const CarouselTrack = styled.div``;
export const CarouselItem = styled.div``;

export default MiniCarousel;
