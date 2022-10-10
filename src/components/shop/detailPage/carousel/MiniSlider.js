import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { items } from '../../rawData';

const TOTAL_SLIDES = 4; // 총 슬라이드 개수 보다 하나 적게
export default function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRef = useRef(null);
	const nextSlide = () => {
		if (currentSlide >= TOTAL_SLIDES) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};
	const prevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(TOTAL_SLIDES);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	useEffect(() => {
		slideRef.current.style.transition = 'all 0.5s ease-in-out';
		slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
	}, [currentSlide]);

	return (
		<Container>
			<ButtonLeft onClick={prevSlide}>{'<'}</ButtonLeft>
			<SliderContainer ref={slideRef}>
				<img src={items[0].img_url} alt="식물 사진" width={200} height={200} />
				<img src={items[0].img_url} alt="식물 사진" width={200} height={200} />
				<img src={items[0].img_url} alt="식물 사진" width={200} height={200} />
				<img src={items[0].img_url} alt="식물 사진" width={200} height={200} />
				<img src={items[0].img_url} alt="식물 사진" width={200} height={200} />
				<img src={items[0].img_url} alt="식물 사진" width={200} height={200} />
			</SliderContainer>
			<ButtonRight onClick={nextSlide}>{'>'}</ButtonRight>
		</Container>
	);
}

const Container = styled.div`
	width: 50%;
	overflow: hidden;
	padding: 10px 10px;
`;

const SliderContainer = styled.div`
	width: 30%;
	display: flex;
`;

const ButtonLeft = styled.button`
	float: left;
	overflow: visible;
`;

const ButtonRight = styled.button`
	float: left;
	overflow: visible;
`;
