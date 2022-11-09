import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { FreeMode, Navigation, Scrollbar } from 'swiper';

export default function LongCarousel() {
	return (
		<Swiper
			navigation={true}
			slidesPerView={4}
			spaceBetween={30}
			freeMode={true}
			modules={[FreeMode, Navigation, Scrollbar]}
			scrollbar={{ draggable: true }}
			className="mySwiper"
		>
			<SwiperSlide>
				<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg" />
			</SwiperSlide>
		</Swiper>
	);
}
