import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};
	return (
		<Slider {...settings}>
			<div>
				<img
					src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg"
					height={300}
				/>
			</div>
			<div>
				<img
					src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg"
					height={300}
				/>
			</div>
			<div>
				<img
					src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg"
					height={300}
				/>
			</div>
			<div>
				<img
					src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg"
					height={300}
				/>
			</div>
			<div>
				<img
					src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg"
					height={300}
				/>
			</div>
			<div>
				<img
					src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg"
					height={300}
				/>
			</div>
		</Slider>
	);
}
